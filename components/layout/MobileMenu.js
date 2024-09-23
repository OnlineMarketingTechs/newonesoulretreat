'use client'
import Link from "next/link"
import { useState } from "react"
export default function MobileMenu({ isSidebar, handleMobileMenu, handleSidebar }) {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <div className="mobile-menu">
                <div className="menu-backdrop" onClick={handleMobileMenu} />
                <div className="close-btn" onClick={handleMobileMenu}><span className="icon flaticon-remove" /></div>
                <nav className="menu-box">
                    <div className="nav-logo"><Link href="/"><img src="/assets/images/logo-2.png" alt="" /></Link></div>
                    <div className="menu-outer">
                        <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                            <ul className="navigation clearfix">

                                {/* <li className={isActive.key == 2 ? "dropdown current" : "dropdown"}><Link href="/#">Company</Link>
                                    <ul style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                                        <li className={isActive.key == 8 ? "current" : "dropdown"}><Link href="/#">About Us</Link></li>
                                        <li className={isActive.key == 8 ? "current" : "dropdown"}><Link href="/#">Careers</Link></li>
                                        <li className={isActive.key == 8 ? "current" : "dropdown"}><Link href="/#">Meet Our Team</Link></li>
                                    </ul>
                                    <div className={isActive.key == 2 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(2)}><span className="fa fa-angle-right" /></div>
                                </li> */}
                                <li className={isActive.key == 8 ? "current" : "dropdown"}><Link href="https://www.clover.com/online-ordering/journey-cafe-kailuakona">Menu / Online Ordering</Link></li>
                                <li className={isActive.key == 8 ? "current" : "dropdown"}><Link href="https://www.clover.com/online-ordering/journey-cafe-kailuakona">Vegan Resources</Link></li>
                                <li className={isActive.key == 8 ? "current" : "dropdown"}><Link href="https://www.clover.com/online-ordering/journey-cafe-kailuakona">Kona Hawaii Vegan?</Link></li>        
                                   
                                
                                
                            </ul>
                        </div>

                    </div>
                    {/*Social Links*/}
                    <div className="social-links">
                        <ul className="clearfix">
                            {/* <li><Link href="https://www.facebook.com/journeycafe"><span className="fab fa-twitter" /></Link></li> */}
                            <li><Link href="https://www.facebook.com/journeycafe"><span className="fab fa-facebook-square" /></Link></li>
                            {/* <li><Link href="/#"><span className="fab fa-pinterest-p" /></Link></li> */}
                            <li><Link href="https://www.instagram.com/journeytogoodhealthcafe/"><span className="fab fa-instagram" /></Link></li>
                            <li><Link href="https://www.youtube.com/@journeycafe1766"><span className="fab fa-youtube" /></Link></li>
                        </ul>
                    </div>
                </nav>
            </div>{/* End Mobile Menu */}
            <div className="nav-overlay" style={{ display: `${isSidebar ? "block" : "none"}` }} onClick={handleSidebar} />



        </>
    )
}
