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
                                        <img src="/assets/images/background/shaman-ayahuasca-taita.webp" alt="Ayahuasca Shamen inviting you to come experience Ayahuasca in a safe and beautiful setting" />
                                    </div>
                                    {/* <div className="icon">
                                        <span className="icon-fear" />
                                    </div> */}
                                    <div className="button">
                                        <Link href="/lp-booking" className="theme-btn btn-style-eight"><span className="btn-title">Learn
                                            More</span></Link>
                                    </div>
                                </div>
                                <div className="text-holder">
                                    <h3><Link href="/lp-booking">The One Soul Path</Link></h3>
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
                                        <img src="/assets/images/background/woman-enjoying-her-ayahuasca-retreat.webp" alt="woman enjoying the amenities at a One Soul Retreats ayahuasca retreat" />
                                    </div>
                                    {/* <div className="icon">
                                        <span className="icon-business" />
                                    </div> */}
                                    <div className="button">
                                        <Link href="/lp-booking" className="theme-btn btn-style-eight"><span className="btn-title">Learn
                                            More</span></Link>
                                    </div>
                                </div>
                                <div className="text-holder">
                                    <h3><Link href="/lp-booking">Amenities & Services</Link></h3>
                                    <p>We offer unparalleled amenities and services offered at all of our retreats.</p>
                                </div>
                            </div>
                        </div>
                        {/*End Service Block Eight*/}
                        {/*Start Service Block Eight*/}
                        <div className="col-xl-4 col-lg-4 service-block-eight">
                            <div className="inner-box">
                                <div className="img-holder">
                                    <div className="inner">
                                        <img src="/assets/images/background/integration-aftercare.webp" alt="woman doing meditation and mindfulness work after attending an ayahuasca retreat with One Soul Retreats" />
                                    </div>
                                    {/* <div className="icon">
                                        <span className="icon-rest" />
                                    </div> */}
                                    <div className="button">
                                        <Link href="/lp-booking" className="theme-btn btn-style-eight"><span className="btn-title">Learn
                                            More</span></Link>
                                    </div>
                                </div>
                                <div className="text-holder">
                                    <h3><Link href="/lp-booking">Integration Support</Link></h3>
                                    <p>Before and after your journey we are here to support your with integration</p>
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
