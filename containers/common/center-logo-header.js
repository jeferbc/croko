import React, { useState } from 'react'
import Nav from './nav'
import Link from 'next/link'

const CenterLogoHeader = (props) => {
    const [sidebar, setSidebar] = useState(false);

    const clickSidebar = () => {
        setSidebar(!sidebar)
        document.querySelector('.navbar').classList.add('openSidebar')
    }

    return (
        <header className={`loding-header nav-abs custom-scroll header-rel ${props.themeClass}`}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="navbar-expand-lg theme-nav w-100">
                            <Link href="#">
                                <a className="center-header d-none d-lg-block">
                                    <img alt="logo" className="logo-abs h-auto" src="../assets/images/logo/croko_logo.png" />
                                </a>
                            </Link>
                            <Link href="#">
                                <a className="logo-responsive navbar-brand d-md-block d-lg-none">
                                    <img alt="logo" src="../assets/images/logo/croko.png" />
                                </a>
                            </Link>
                            <div className="responsive-btn ml-auto">
                                <a className="toggle-nav" onClick={clickSidebar} data-target="#scroll-spy" aria-controls="scroll-spy">
                                    <i aria-hidden="true" className="fa fa-bars"></i>
                                </a>
                            </div>
                            <Nav className="w-100" />
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default CenterLogoHeader
