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
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 wow animated fadeInUp" data-wow-delay="0.1s">
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
                                       
                                    </div>
                                </div>
                            </div>
                            {/*End single footer widget*/}
                            {/*Start single footer widget*/}
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 wow animated fadeInUp" data-wow-delay="0.3s">
                                <div className="single-footer-widget">
                                    <div className="title">
                                        <h3>Usefull Links</h3>
                                    </div>
                                    <div className="footer-widget-link-box">
                                        <ul className="footer-widget-links1 left">
                                            <li><Link href="/one-soul-path">The One Soul Path</Link></li>
                                            <li><Link href="/amenities">Amenitites & Services</Link></li>
                                            {/* <li><Link href="#Testimonials">Testimonials</Link></li> */}
                                            
                                            
                                        </ul>

                                    </div>
                                </div>
                            </div>
                            {/*End single footer widget*/}
                            {/*Start single footer widget*/}
                            <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12 wow animated fadeInUp" data-wow-delay="0.7s">
                                <div className="single-footer-widget pdtop">
                                    <div className="title">
                                        <h3>Great Ayahuasca Infromation</h3>
                                    </div>
                                    <ul className="widget-popular-post">
                                        <li>
                                            <div className="img-box">
                                                <img src="/assets/images/icons/ayahuasca-70x70.webp" alt="ayahuasca ceremony at One Soul Retreats" />
                                            </div>
                                            <div className="title-box">
                                                <span>2023</span>
                                                <h3><Link href="/everything-you-need-to-know-about-ayahuasca-retreats">Everything You Need To Know About AYAHUASCA<br /></Link></h3>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="img-box">
                                                <img src="/assets/images/icons/ayahuasca-aspen-colorado-70x70.webp" alt="Ayahuasca shaman performing ayahuasca ceremony" />
                                            </div>
                                            <div className="title-box">
                                                <span>2023</span>
                                                <h3><Link href="/legal-ayahuasca-retreats-in-aspen-colorado">Legal Ayahuasca Retreats in Aspen Colorado!</Link></h3>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="img-box">
                                                <img src="/assets/images/icons/transforming-depression-ayahuasca-70x70.webp" alt="a woman working through depression with ayahuasca" />
                                            </div>
                                            <div className="title-box">
                                                <span>2023</span>
                                                <h3><Link href="/transforming-depression-with-ayahuasca">Transforming Depression With Ayahuasca</Link></h3>
                                            </div>
                                        </li>
                                    </ul>
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
                                <p>Copyrights © {new Date().getFullYear()} <Link href="#">OneSoulRetreats </Link>, All Rights Reserved.</p>
                            </div>
                            <div className="footer-menu-style1">
                                <ul>
                                    <li><Link href="/privacy_LP">Privacy Policy</Link></li>
                                    <li><Link href="/terms-lp">Terms &amp; Conditions</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
