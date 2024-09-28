import Link from "next/link"


export default function Service() {
    return (
        <>
            <section className="service-section-eight">
                <div className="pattern-bg" style={{ backgroundImage: 'url(assets/images-3/pattern/pattern-bg-1.jpg)' }} />
                <div className="auto-container">
                    <div className="sec-title style-eight clr2  text-center">
                        <h4><img src="/assets/images/logos/one-soul-white-logo-small.png" alt="" /></h4>
                        <h2>Heal your mind, body and soul<br /></h2>
                    </div>
                    <div className="row">
                        {/*Start Service Block Eight*/}
                        <div className="col-xl-4 col-lg-4 service-block-eight">
                            <div className="inner-box">
                                <div className="img-holder">
                                    <div className="inner">
                                        <img src="/assets/images/background/shaman-ayahuasca-taita.webp" alt="" />
                                    </div>
                                    {/* <div className="icon">
                                        <span className="icon-fear" />
                                    </div> */}
                                    <div className="button">
                                        <Link href="#" className="theme-btn btn-style-eight"><span className="btn-title">Read
                                            More</span></Link>
                                    </div>
                                </div>
                                <div className="text-holder">
                                    <h3><Link href="/onesoulpath">The One Soul Path</Link></h3>
                                    <p>We guide your journey every step along your path, for optimal results.</p>
                                </div>
                            </div>
                        </div>
                        {/*End Service Block Eight*/}
                        {/*Start Service Block Eight*/}
                        <div className="col-xl-4 col-lg-4 service-block-eight">
                            <div className="inner-box">
                                <div className="img-holder">
                                    <div className="inner">
                                        <img src="/assets/images/background/woman-enjoying-her-ayahuasca-retreat.webp" alt="" />
                                    </div>
                                    {/* <div className="icon">
                                        <span className="icon-business" />
                                    </div> */}
                                    <div className="button">
                                        <Link href="/onesoulpath" className="theme-btn btn-style-eight"><span className="btn-title">Read
                                            More</span></Link>
                                    </div>
                                </div>
                                <div className="text-holder">
                                    <h3><Link href="#">Amenities & Services</Link></h3>
                                    <p>We offer unparalleled amenities and servoices pm sote.</p>
                                </div>
                            </div>
                        </div>
                        {/*End Service Block Eight*/}
                        {/*Start Service Block Eight*/}
                        <div className="col-xl-4 col-lg-4 service-block-eight">
                            <div className="inner-box">
                                <div className="img-holder">
                                    <div className="inner">
                                        <img src="/assets/images/background/integration-aftercare.webp" alt="" />
                                    </div>
                                    {/* <div className="icon">
                                        <span className="icon-rest" />
                                    </div> */}
                                    <div className="button">
                                        <Link href="#" className="theme-btn btn-style-eight"><span className="btn-title">Read
                                            More</span></Link>
                                    </div>
                                </div>
                                <div className="text-holder">
                                    <h3><Link href="#">Integration Support</Link></h3>
                                    <p>Denounce with righteous indignation &amp; demoralized the charms.</p>
                                </div>
                            </div>
                        </div>
                        {/*End Service Block Eight*/}
                    </div>
                </div>
            </section>
        </>
    )
}
