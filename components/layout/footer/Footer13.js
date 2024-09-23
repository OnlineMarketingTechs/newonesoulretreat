import Link from "next/link"
export default function Footer13() {
    return (
        <>
            <footer className="footer-style-13">
                <div className="auto-container">
                    <div className="footer-top">
                        <div className="row clearfix">
                            <div className="col-lg-12 col-md-12 col-sm-12 logo-column">
                                <div className="logo-inner clearfix">
                                    <figure className="footer-logo"><Link href="/"><img src="assets/images/journey-cafe-logo-ss.png" alt="Journey Cafe Big Island" /></Link></figure>
                                    <div className="text">
                                        <h2>Kona's #1 Vegan Resturant - Best Vegan Food in Kona!</h2>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-lg-6 col-md-12 col-sm-12 subscribe-column">
                                <div className="subscribe-inner">
                                    <form action="contact" method="post">
                                        <div className="form-group">
                                            <div className="icon"><i className="far fa-envelope" /></div>
                                            <input type="email" name="email" placeholder="Email address..." required />
                                            <button type="submit" className="btn-style-eight2">Subscribe</button>
                                        </div>
                                    </form>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <div className="widget-section">
                        <div className="row clearfix">
                            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                                <div className="about-widget footer-widget">
                                    <div className="widget-title">
                                        <h3>Journey Cafe</h3>
                                        <div className="decore" style={{ backgroundImage: 'url(assets/images-4/icons/decore-1.png)' }} />
                                    </div>
                                    <div className="widget-content">
                                        <h3 className="mb-5">Heal The Land < br/> Heal The People</h3>
                                        {/* <p>Right to find fault with a man who chooses to enjoy a pleasures that annoying consequences. </p> */}
                                        <Link href="https://www.clover.com/online-ordering/journey-cafe-kailuakona" onClick={() => sendGTMEvent({ event: 'buttonClicked', value: 'MenuLoad' })} className="btn-style-eight2">Read More</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                                <div className="links-widget footer-widget">
                                    <div className="widget-title">
                                        <h3>Company</h3>
                                        <div className="decore" style={{ backgroundImage: 'url(assets/images-4/icons/decore-1.png)' }} />
                                    </div>
                                    <div className="widget-content">
                                        <ul className=" clearfix">
                                            <li><Link href="/about">About Us</Link></li>
                                           <li><Link href="/careers">Careers</Link></li>
                                             {/* <li><Link href="/index-13">Meet Experts</Link></li>
                                            <li><Link href="/index-13">Our Case Studies</Link></li>
                                            <li><Link href="/index-13">Get a Quote</Link></li>
                                            <li><Link href="/index-13">Testimonials</Link></li>
                                            <li><Link href="/index-13">FAQ’s</Link></li> */}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                                <div className="links-widget footer-widget">
                                    <div className="widget-title">
                                        <h3>Resources</h3>
                                        <div className="decore" style={{ backgroundImage: 'url(assets/images-4/icons/decore-1.png)' }} />
                                    </div>
                                    <div className="widget-content">
                                        <ul className=" clearfix">
                                            <li><Link href="/index-13">Kona Hawaii Vegan</Link></li>
                                            <li><Link href="/index-13">Kona Hawaii Resources</Link></li>
                                            {/* <li><Link href="/index-13">Consultancy</Link></li>
                                            <li><Link href="/index-13">Design &amp; Build</Link></li>
                                            <li><Link href="/index-13">Electrical</Link></li>
                                            <li><Link href="/index-13">Management</Link></li>
                                            <li><Link href="/index-13">Mechanical</Link></li> */}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                                <div className="post-widget footer-widget">
                                    <div className="widget-title">
                                        <h3>Popular Post</h3>
                                        <div className="decore" style={{ backgroundImage: 'url(assets/images-4/icons/decore-1.png)' }} />
                                    </div>
                                    <div className="post-inner">
                                        <div className="post">
                                            <span className="post-date">14 February, {new Date().getFullYear()}</span>
                                            <h5><Link href="/#">The Best Ice Cream In Hawaii! - <u>Totally Vegan!</u></Link></h5>
                                        </div>
                                        <div className="post">
                                            <span className="post-date">21 January, {new Date().getFullYear()}</span>
                                            <h5><Link href="/#">Vegan Treats! Amazing Deserts and Refreshing Drinks!</Link></h5>
                                        </div>
                                    </div>
                                    <div className="more-links">
                                        <h6><Link href="/#"><i className="far fa-long-arrow-right" />Read All Kona Hawaii Vegan News</Link></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="auto-container clearfix">
                        <div className="copyright"><p>Copyrights © {new Date().getFullYear()} <Link href="/#">Journey Cafe Big Island</Link>, All Rights Reserved.</p></div>
                        <ul className="footer-nav clearfix">
                            <li><Link href="/#">Privacy Policy</Link></li>
                            <li><Link href="/#">Site Map</Link></li>
                            <li><Link href="/#">Refund Policy</Link></li>
                        </ul>
                    </div>
                </div>
            </footer>

        </>
    )
}
