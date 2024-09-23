import Menu from "../Menu"
import MobileMenu from "../MobileMenu"
export default function Header13({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handlePopup, handleSidebar }) {
    return (
        <>
            {/* <header className="main-header header-style-13"> */}
            <header className={`main-header header-style-13 ${scroll ? "fixed-header" : ""}`}>
                {/* header-top-13 */}
                <div className="header-top-13">
                    <div className="auto-container">
                        <div className="top-inner clearfix">
                            <div className="top-left">
                                <div className="info-box">
                                    <div className="icon-box"><i className="fa fa-soup" /></div>
                                    <h6>   Want it delivered?<a href="https://www.clover.com/online-ordering/journey-cafe-kailuakona" onClick={() => sendGTMEvent({ event: 'buttonClicked', value: 'MenuLoad' })} ><i className="far fa-long-arrow-right" />Order Now</a></h6>
                                </div>
                            </div>
                            <div className="top-right clearfix">
                                 {/*<ul className="social-links clearfix">
                                    <li><a href="https://www.facebook.com/journeycafe"><i className="fab fa-facebook-f" /></a></li>
                                    <li><a href="https://www.instagram.com/journeycafebigisland/"><i className="fab fa-instagram" /></a></li>
                                    <li><a href="/index-13"><i className="fab fa-linkedin-in" /></a></li> 
                                    <li><a href="https://www.youtube.com/@journeycafe1766"><i className="fab fa-youtube" /></a></li>
                                    {/* <li><a href="/index-13"><i className="fab fa-skype" /></a></li> 
                                </ul>*/}
                                <div className="support-box">
                                    <h6><i className="fas fa-phone-volume" /><a href="tel:18087317194" onClick={() => sendGTMEvent({ event: 'buttonClicked', value: 'PhoneClickCall' })}>+1 808 731-7194</a></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* header-top-13 end */}
                {/* Header Upper */}
                <div className="header-upper">
                    <div className="auto-container">
                        <div className="outer-box">
                            <div className="logo-box">
                                <figure className="logo"><a href="/"><img src="/assets/images/journey-cafe-logo-ss.png" alt="journey-cafe-big-island" /></a></figure>
                            </div>
                            {/*Nav Box*/}
                            <div className="nav-outer clearfix">
                                {/*Mobile Navigation Toggler*/}
                                <div className="mobile-nav-toggler" onClick={handleMobileMenu}><img src="/assets/images-2/icons/icon-bar-3.png" alt="" /></div>
                                {/* Main Menu */}
                                <nav className="main-menu navbar-expand-md navbar-light">
                                    <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                        <Menu />
                                    </div>
                                </nav>
                                {/* Main Menu End*/}
                            </div>
                            <div className="nav-right clearfix">
                                <div className="search-btn">
                                    {/* <button type="button" className="search-toggler" onClick={handlePopup}><i className="customicon-magnifying-glass" /></button> */}
                                </div>
                                <div className="btn-box">
                                    <a href="https://www.clover.com/online-ordering/journey-cafe-kailuakona" onClick={() => sendGTMEvent({ event: 'buttonClicked', value: 'MenuLoad' })} className="theme-btn btn-style-seven"><span className="btn-title">Our Menu</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*End Header Upper*/}
                {/* Sticky Header  */}
                <div className={`sticky-header ${scroll ? "animated slideInDown" : ""}`}>
                    <div className="auto-container">
                        <div className="outer-box">
                            <div className="logo-box">
                                <figure className="logo"><a href="/"><img src="/assets/images/journey-cafe-logo-ss.png" alt="" /></a></figure>
                            </div>
                            {/*Nav Box*/}
                            <div className="nav-outer clearfix">
                                {/*Mobile Navigation Toggler*/}
                                <div className="mobile-nav-toggler" onClick={handleMobileMenu}><img src="/assets/images-2/icons/icon-bar-3.png" alt="" /></div>
                                {/* Main Menu */}
                                <nav className="main-menu navbar-expand-md navbar-light">
                                    <Menu />
                                </nav>
                                {/* Main Menu End*/}
                            </div>
                            <div className="nav-right clearfix">
                                <div className="btn-box">
                                    <a href="https://www.clover.com/online-ordering/journey-cafe-kailuakona" onClick={() => sendGTMEvent({ event: 'buttonClicked', value: 'MenuLoad' })} className="theme-btn btn-style-seven"><span className="btn-title">Our Menu</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>{/* End Sticky Menu */}
                {/* Mobile Menu  */}
                <MobileMenu handleMobileMenu={handleMobileMenu} isSidebar={isSidebar} handleSidebar={handleSidebar} />

            </header>

        </>
    )
}
