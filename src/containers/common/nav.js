import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import SocialMedia from '@/containers/elements/common/socialMedia';
import { MENUITEMS } from '@/constant/menu';
import { KITMENUITEMS } from '@/constant/kitMenu';

const Nav = (props) => {
    const pathname = usePathname()
    const isKit = props.kit === 'true' || pathname === '/kit-pinta-barriguitas'
    const navItems = isKit ? KITMENUITEMS : MENUITEMS
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
        setMainMenu([...navItems])

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
        setMainMenu([...navItems])
    }

    return (
        <div className={`navbar`} id="togglebtn scroll-spy">
            <div className="responsive-btn">
                <button
                    className="btn-back"
                    onClick={closeSidebar}
                    aria-label="Cerrar menú de navegación"
                    style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                >
                    <h5>atrás</h5>
                </button>
            </div>
            <ul className="main-menu">
                <SocialMedia kit={props.kit} />
                {
                    navItems.slice(0, 2).map((menuItem, i) => {
                        return (
                            <li key={i}>
                                {(menuItem.type === 'sub') ?
                                    menuItem.path ? (
                                        <Link href={menuItem.path} className="dropdown" aria-label={menuItem.title}>
                                            <span>{menuItem.title}</span>
                                        </Link>
                                    ) : (
                                        <a className="dropdown" href="#" onClick={(e) => { e.preventDefault(); toggletNavActive(menuItem); }} aria-label={`Menú ${menuItem.title}`}>
                                            <span>{menuItem.title}</span>
                                        </a>
                                    )
                                    : ''}
                                {(menuItem.type === 'link') ?
                                    menuItem.path.startsWith('#') ? (
                                        <a href={menuItem.path} onClick={() => toggletNavActive(menuItem)} aria-label={menuItem.title}>
                                            <span>{menuItem.title}</span>
                                        </a>
                                    ) : (
                                        <Link href={menuItem.path} onClick={() => toggletNavActive(menuItem)} aria-label={menuItem.title}>
                                            <span>{menuItem.title}</span>
                                        </Link>
                                    )
                                    : ''}
                                {menuItem.children && menuItem.type === 'sub' ?
                                    <ul className={`${menuItem.active ? 'menu-open activeSubmenu' : ''}`} style={menuItem.active ? { opacity: 1, transition: 'opacity 500ms ease-in' } : {}}>
                                        {menuItem.children.map((childrenItem, index) =>
                                            <li key={index}>
                                                {(childrenItem.type === 'link') ?
                                                    childrenItem.path.startsWith('#') ? (
                                                        <a href={childrenItem.path} aria-label={childrenItem.title}>
                                                            <span>{childrenItem.title}</span>
                                                        </a>
                                                    ) : (
                                                        <Link href={childrenItem.path} onClick={() => toggletNavActive(childrenItem)} aria-label={childrenItem.title}>
                                                            <span>{childrenItem.title}</span>
                                                        </Link>
                                                    )
                                                    : ''}
                                            </li>
                                        )}
                                    </ul>
                                    : ''}
                            </li>
                        )
                    })
                }
            </ul>
            <ul className="main-menu">
                {
                    navItems.slice(2, 6).map((menuItem, i) => {
                        return (
                            <li key={i}>
                                {(menuItem.type === 'sub') ?
                                    menuItem.path ? (
                                        <Link href={menuItem.path} className="dropdown" aria-label={menuItem.title}>
                                            <span>{menuItem.title}</span>
                                        </Link>
                                    ) : (
                                        <a className="dropdown" href="#" onClick={(e) => { e.preventDefault(); toggletNavActive(menuItem); }} aria-label={`Menú ${menuItem.title}`}>
                                            <span>{menuItem.title}</span>
                                        </a>
                                    )
                                    : ''}
                                {(menuItem.type === 'link') ?
                                    menuItem.path.startsWith('#') ? (
                                        <a href={menuItem.path} onClick={() => toggletNavActive(menuItem)} aria-label={menuItem.title}>
                                            <span>{menuItem.title}</span>
                                        </a>
                                    ) : (
                                        <Link href={menuItem.path} onClick={() => toggletNavActive(menuItem)} aria-label={menuItem.title}>
                                            <span>{menuItem.title}</span>
                                        </Link>
                                    )
                                    : ''}
                                {menuItem.children && menuItem.type === 'sub' ?
                                    <ul className={`${menuItem.active ? 'menu-open activeSubmenu' : ''}`} style={menuItem.active ? { opacity: 1, transition: 'opacity 500ms ease-in' } : {}}>
                                        {menuItem.children.map((childrenItem, index) =>
                                            <li key={index}>
                                                {(childrenItem.type === 'link') ?
                                                    childrenItem.path.startsWith('#') ? (
                                                        <a href={childrenItem.path} aria-label={childrenItem.title}>
                                                            <span>{childrenItem.title}</span>
                                                        </a>
                                                    ) : (
                                                        <Link href={childrenItem.path} onClick={() => toggletNavActive(childrenItem)} aria-label={childrenItem.title}>
                                                            <span>{childrenItem.title}</span>
                                                        </Link>
                                                    )
                                                    : ''}
                                            </li>
                                        )}
                                    </ul>
                                    : ''}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Nav
