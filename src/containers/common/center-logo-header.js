import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import Nav from './nav'
import Link from 'next/link'
import Image from 'next/image'

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
    const pathname = usePathname()
    const isKit = props.kit === 'true' || pathname === '/kit-pinta-barriguitas'
    const [sidebar, setSidebar] = useState(false);

    const clickSidebar = () => {
        setSidebar(!sidebar)
        document.querySelector('.navbar').classList.add('openSidebar')
    }

    return (
        <header className={`loding-header nav-abs custom-scroll header-rel ${props.themeClass || 'wedding'} ${isKit ? 'position-relative' : ''}`}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="navbar-expand-lg theme-nav w-100">
                            <Link href="/" className="center-header d-none d-lg-block">
                                <Image
                                    src="/assets/images/logo/croko_logo.png"
                                    alt="logo"
                                    width={462}
                                    height={255}
                                    className="logo-abs h-auto"
                                    priority
                                />
                            </Link>
                            <div className="d-flex justify-content-between align-items-center w-100 d-lg-none">
                                <Link href="/" className="logo-responsive navbar-brand">
                                    <Image
                                        src="/assets/images/logo/croko.png"
                                        alt="logo"
                                        width={93}
                                        height={40}
                                        priority
                                    />
                                </Link>
                                <div className="responsive-btn">
                                    <div className="actions" style={ActionsStyles.buttons}>
                                        { !isKit && (
                                            <Link href='/kit-pinta-barriguitas' className={`btn btn-default btn-gradient text-white ${isKit ? 'kit' : 'local'}`} style={ActionsStyles.navButton}>KIT Maquillaje</Link>
                                        )}
                                        <button
                                            className="toggle-nav"
                                            onClick={clickSidebar}
                                            aria-controls="scroll-spy"
                                            aria-expanded={sidebar}
                                            aria-label="Toggle navigation menu"
                                            style={!isKit ? { marginLeft: '15px', background: 'none', border: 'none', cursor: 'pointer' } : { background: 'none', border: 'none', cursor: 'pointer' }}
                                        >
                                            <i aria-hidden="true" className="fa fa-bars"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <Nav className="w-100" kit={isKit ? 'true' : 'false'} />
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default CenterLogoHeader
