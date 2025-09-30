import React, { useState } from 'react'
import Nav from './nav'
import Link from 'next/link'

const ActionsStyles = {
    buttons: {
        display: "inline-flex",
        width: "100%", 
        alignItems: "center",
        justifyContent: 'space-between'
    },
    navButton: {
        padding: "10px 20px"
    }
}

const CenterLogoHeader = (props) => {
    const [sidebar, setSidebar] = useState(false);

    const clickSidebar = () => {
        setSidebar(!sidebar)
        document.querySelector('.navbar').classList.add('openSidebar')
    }

    return (
        <header className={`loding-header nav-abs custom-scroll header-rel ${props.themeClass} ${props.kit ? 'position-relative' : ''}`}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="navbar-expand-lg theme-nav w-100">
                            <Link href="/" className="center-header d-none d-lg-block">
                                <img alt="logo" className="logo-abs h-auto" src="../assets/images/logo/croko_logo.png" />
                            </Link>
                            <Link href="#" className="logo-responsive navbar-brand d-md-block d-lg-none">
                                <img alt="logo" src="../assets/images/logo/croko.png" />
                            </Link>
                                <div className="responsive-btn w-100">
                                    <div className="actions" style={ActionsStyles.buttons}>
                                        { !props.kit && (
                                            <Link href='/kit' className={`btn btn-default btn-gradient text-white ${props.kit ? 'kit' : 'local'}`} style={ActionsStyles.navButton}>KIT Maquillaje</Link>
                                        )}
                                        <a className="toggle-nav" onClick={clickSidebar} data-target="#scroll-spy" aria-controls="scroll-spy">
                                            <i aria-hidden="true" className="fa fa-bars"></i>
                                        </a>
                                    </div>
                                </div>
                            <Nav className="w-100" kit={props.kit} />
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default CenterLogoHeader
