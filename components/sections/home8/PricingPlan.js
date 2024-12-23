import Link from "next/link"


export default function PricingPlan() {
    return (
        <>
            <section className="pricing-plan-section-eight">
                <div className="pattern-bg" style={{ backgroundImage: 'url(assets/images-3/pattern/pattern-bg-1.jpg)' }} />
                <div className="auto-container">
                    <div className="sec-title style-eight clr2  text-center">
                        <h4>Get Started Now</h4>
                        <h2>Start Your Journey Now <br /> Reach Out Now</h2>
                    </div>
                    <div className="row">
                        {/*Start Pricing Plan Block Eight*/}
                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 text-center">
                            <div className="pricing-plan-block-eight">
                                <div className="table-header" style={{ backgroundImage: 'url(/assets/images/background/book-now.webp)' }}>
                                    <div className="top">
                                        <h3>Book a Guidance Session</h3>
                                        <span>Connect with an expert to learn more</span>
                                    </div>
                                    <div className="package">
                                        <h2>STEP 1<b></b></h2>
                                    </div>
                                </div>
                                <div className="table-button">
                                    <Link href="/booking" className="theme-btn btn-style-eight"><span className="btn-title">Book Now!</span></Link>
                                </div>
                                <div className="price-list">
                                    <ul>
                                        <li>We will send you a copy of Ayahuasca for Real People and schedule a call with an experienced guide</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/*End Pricing Plan Block Eight*/}
                        {/*Start Pricing Plan Block Eight*/}
                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 text-center">
                            <div className="pricing-plan-block-eight">
                                <div className="table-header" style={{ backgroundImage: 'url(/assets/images/background/the-path.webp)' }}>
                                    <div className="top">
                                        <h3>The One Soul Path</h3>
                                        <span>Start taking steps on your path</span>
                                    </div>
                                    <div className="package">
                                        <h2><span>Learn</span>The Path</h2>
                                    </div>
                                </div>
                                <div className="table-button">
                                    <Link href="/one-soul-path" className="theme-btn btn-style-eight"><span className="btn-title">Download Now</span></Link>
                                </div>
                                <div className="price-list">
                                    <ul>
                                        <li>You will learn A powerful process to live Your highest potential on your One Soul path</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/*End Pricing Plan Block Eight*/}
                        {/*Start Pricing Plan Block Eight*/}
                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 text-center">
                            <div className="pricing-plan-block-eight">
                                <div className="table-header" style={{ backgroundImage: 'url(/assets/images/background/plant-medicine-for-real-people.webp)' }}>
                                    <div className="top">
                                        <h3>Our Ayahuasca Book</h3>
                                        <span>Ayahuasca For Real People</span>
                                    </div>
                                    <div className="package">
                                        <h2><span>Get</span>The Book</h2>
                                    </div>
                                </div>
                                <div className="table-button">
                                    <Link href="/ayahuasca-for-real-people" className="theme-btn btn-style-eight" title="Ayahusca for Real People"><span className="btn-title">Get Your Copy Free
                                        Now</span></Link>
                                </div>
                                <div className="price-list">
                                    <ul>
                                        <li>What are the benefits What are the risks What to expect during a ceremony So much more...</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/*End Pricing Plan Block Eight*/}
                    </div>
                </div>
            </section>
        </>
    )
}
