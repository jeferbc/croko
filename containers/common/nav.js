import React, { useEffect, useState } from 'react'
import { MENUITEMS } from '../../constant/menu';
import { KITMENUITEMS } from '../../constant/kitMenu';

const Nav = (props) => {
    const navItems = props.kit === 'true' ? KITMENUITEMS : MENUITEMS
    const [mainmenu, setMainMenu] = useState(navItems);
    const [sidebar, setSidebar] = useState(false);

    function closeSidebar() {
        setSidebar(!sidebar)
        document.querySelector('.navbar').classList.remove('openSidebar')
    }

    useEffect(() => {
        const currentUrl = location.pathname;
        mainmenu.filter(items => {
            if (items.path === currentUrl)
                setNavActive(items)
            if (!items.children) return false
            items.children.filter(subItems => {
                if (subItems.path === currentUrl)
                    setNavActive(subItems)
                if (!subItems.children) return false
                subItems.children.filter(subSubItems => {
                    if (subSubItems.path === currentUrl)
                        setNavActive(subSubItems)
                })
            })
        })

    }, [])

    const setNavActive = (item) => {
        navItems.filter(menuItem => {
            if (menuItem != item)
                menuItem.active = false
            if (menuItem.children && menuItem.children.includes(item))
                menuItem.active = true
            if (menuItem.children) {
                menuItem.children.filter(submenuItems => {
                    if (submenuItems.children && submenuItems.children.includes(item)) {
                        menuItem.active = true
                        submenuItems.active = true
                    }
                })
            }
        })
        item.active = !item.active
        setMainMenu({ mainmenu: navItems })

    }

    // Click Toggle menu
    const toggletNavActive = (item) => {

        if (!item.active) {
            navItems.forEach(a => {
                if (navItems.includes(item))
                    a.active = false
                if (!a.children) return false
                a.children.forEach(b => {
                    if (a.children.includes(item)) {
                        b.active = false
                    }
                    if (!b.children) return false
                    b.children.forEach(c => {
                        if (b.children.includes(item)) {
                            c.active = false
                        }
                    })
                })
            });
        }
        item.active = !item.active
        setMainMenu({ mainmenu: navItems })
    }

    return (
        <div className={`navbar`} id="togglebtn scroll-spy">
            <div className="responsive-btn">
                <a className="btn-back" onClick={closeSidebar}>
                    <h5>atrás</h5>
                </a>
            </div>
            <ul className="main-menu">
                <li>
                    <a className="copyright-text" href="https://www.facebook.com/crokolina" target='_blank'>
                        <i aria-hidden="true" className="fa fa-facebook gradient-text"></i>
                    </a>
                </li>
                <li>
                    <a className="copyright-text " href="https://www.instagram.com/croko_maquillaje_embarazada/" target='_blank'>
                        <i aria-hidden="true" className="fa fa-instagram gradient-text"></i>
                    </a>
                </li>
                <li>
                    <a className="copyright-text" href="https://wa.me/573168161717?text=Hola, estoy interesado en maquillaje prenatal en Medellín." target='_blank'>
                        <i aria-hidden="true" className="fa fa-whatsapp gradient-text"></i>
                    </a>
                </li>
                {
                    navItems.slice(0, 2).map((menuItem, i) => {
                        return (
                            <li key={i}>
                                <a href={`${menuItem.path}`} onClick={() => toggletNavActive(menuItem)}>
                                    <span>{menuItem.title}</span>
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
            <ul className="main-menu">
                {
                    navItems.slice(2, 5).map((menuItem, i) => {
                        return (
                            <li key={i}>
                                <a href={`${menuItem.path}`} onClick={() => toggletNavActive(menuItem)}>
                                    <span>{menuItem.title}</span>
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Nav
