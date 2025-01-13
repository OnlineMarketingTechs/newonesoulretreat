import { useState } from 'react';
import Menulp from "../Menulp"
import MobileMenu from "../MobileMenu"
import LpBooking from "@/components/elements/LpBooking";
import BookingformLP from "@/components/elements/BookingformLP";

export default function Header8({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handlePopup, handleSidebar }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
      
        const handleOpenModal = () => {
          setIsModalOpen(true);
        };
      
        const handleCloseModal = () => {
          setIsModalOpen(false);
        };
    return (
        <>
            {/* <header className="main-header header-style-eight"> */}
            <header className={`main-header header-style-eight ${scroll ? "fixed-header" : ""}`}>
                {/* Header Upper */}
                <div className="header-upper header-upper-style8">
                    <div className="auto-container">
                        <div className="inner-container clearfix">
                            {/*Logo*/}
                            <div className="logo-box">
                                <div className="logo"><a href="#"><img src="/assets/images/logos/one-soul-white-logo-small.png" alt="one soul retreats logo best retreats in the world!" /></a></div>
                            </div>
                            {/*Nav Box*/}
                            <div className="nav-outer clearfix">
                                {/*Mobile Navigation Toggler*/}
                                {/* <div className="mobile-nav-toggler" onClick={handleMobileMenu}><img src="/assets/images/icons/icon-bar.png" alt="" /></div> */}
                                {/* Main Menu */}
                                <nav className="main-menu style8 navbar-expand-md navbar-light">
                                    <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                        <Menulp />
                                    </div>
                                </nav>
                                {/* Main Menu End*/}
                            </div>
                            <div className="header-upper-right-style8">
                                
                                <div className="right-button">
                                    <a className="theme-btn btn-style-eight">
                                        <span className="btn-title" onClick={handleOpenModal}>Book Now</span>
                                        <LpBooking isOpen={isModalOpen} onClose={handleCloseModal}> 
          <BookingformLP />
        </LpBooking>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*End Header Upper*/}
                {/* Sticky Header  */}
                <div className={`sticky-header ${scroll ? "animated slideInDown" : ""}`}>
                    <div className="header-upper header-upper-eight">
                        <div className="auto-container">
                            <div className="inner-container clearfix">
                                {/*Logo*/}
                                <div className="logo-box">
                                    <div className="logo"><a href="#"><img src="/assets/images/logos/one-soul-black-logo-small.png" alt="One Soul Retreats | The number one retreat provider in the world!" /></a></div>
                                </div>
                                {/*Nav Box*/}
                                <div className="nav-outer clearfix">
                                    {/*Mobile Navigation Toggler*/}
                                    <div className="mobile-nav-toggler" onClick={handleMobileMenu}><img src="/assets/images/logos/one-soul-retreats.png" alt="" /></div>
                                    {/* Main Menu */}
                                    <nav className="main-menu navbar-expand-md navbar-light">
                                        <Menulp />
                                    </nav>
                                    {/* Main Menu End*/}
                                    <div className="navbar-right-info">
                                        {/* <button type="button" className="theme-btn search-toggler" onClick={handlePopup}><span className="flaticon-search" /></button> */}
                                        {/*Sidemenu Navigation Toggler*/}
                                        {/* <div className="sidemenu-nav-toggler" onClick={handleSidebar}>
                                            <img src="/assets/images-3/icon-bar-8-v2.png" alt="" />
                                        </div> */}
                                        <div className="right-button">
                                    <a className="theme-btn btn-style-eight" href="/bookinglp">
                                        <span className="btn-title">Book Now</span>
                                    </a>
                                </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>{/* End Sticky Menu */}
                {/* Mobile Menu  */}
                {/* <MobileMenu handleMobileMenu={handleMobileMenu} isSidebar={isSidebar} handleSidebar={handleSidebar} /> */}

            </header>

        </>
    )
}
