import Link from "next/link"
export default function Footer8() {
    return (
        <>
            <footer className="footer-section-eight">
                <div className="footer-eight">
                    <div className="pattern-bg" style={{ backgroundImage: 'url(assets/images-3/pattern/pattern-bg-1.jpg)' }} />
                    <div className="auto-container">
                        <div className="row text-right-rtl">
                            {/*Start single footer widget*/}
                            {/* <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 wow animated fadeInUp" data-wow-delay="0.1s">
                                <div className="single-footer-widget marbtm">
                                    <div className="our-company-info">
                                        <div className="footer-logo">
                                            <Link href="/booking"><img src="/assets/images/background/ayahuasca-ceremony-with-female-facilitator-shaman.webp" alt="Awesome Footer Logo" title="Logo" /></Link>
                                        </div>
                                        <div className="text-box">
                                            <h3>About Us</h3>
                                            <p>We are your guides every step of the way</p>
                                            <Link href="/booking" className="theme-btn btn-style-eight mt-3"><span className="btn-title">Speak to A Guide</span></Link>
                                        </div>
                                        <div className="phone-number">
                                            <p>Call for free consultation!</p>
                                            <h3><Link href="tel:+1800000000">(+800) 000-0000</Link></h3>
                                        </div> 
                                    </div>
                                </div>*
                            </div>/}
                            {/*End single footer widget*/}
                            {/*Start single footer widget*/}
                            {/* <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 wow animated fadeInUp" data-wow-delay="0.3s">
                                <div className="single-footer-widget">
                                    <div className="title">
                                        <h3>Usefull Link</h3>
                                    </div>
                                    <div className="footer-widget-link-box">
                                        <ul className="footer-widget-links1 left">
                                            <li><Link href="#">About Company</Link></li>
                                            <li><Link href="#">Why Choose Us</Link></li>
                                            <li><Link href="#">Testimonials</Link></li>
                                            <li><Link href="#">FAQ’s</Link></li>
                                            
                                        </ul>
                                        <ul className="footer-widget-links1 right">
                                            <li><Link href="#">Latest News</Link></li>
                                            <li><Link href="#">Contact Us</Link></li>
                                            <li><Link href="#">Privacy Policy</Link></li>
                                            
                                        </ul>
                                    </div>
                                </div>
                            </div> */}
                            {/*End single footer widget*/}
                            {/*Start single footer widget*/}
                            <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12 wow animated fadeInUp" data-wow-delay="0.7s">
                                <div className="single-footer-widget pdtop">
                                    <div className="title">
                                        <h3>Important Infromation</h3>
                                    </div>
                                    <div className="text">
                                        <div>This is the lp footer</div>
                                    </div>
                                </div>
                            </div>
                            {/*End single footer widget*/}
                        </div>
                    </div>
                </div>
                <div className="footer-bottom-eight">
                    <div className="container">
                        <div className="outer-box">
                            <div className="copyright-text">
                                <p>Copyrights © {new Date().getFullYear()} <Link href="/">OneSoulRetreats </Link>, All Rights Reserved.</p>
                            </div>
                            <div className="footer-menu-style1">
                                <ul>
                                    <li><Link href="/lpprivacy_policy">Privacy Policy</Link></li>
                                    <li><Link href="/lpterms">Terms &amp; Conditions</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
