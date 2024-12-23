import Link from "next/link"


export default function WorkingProcess() {
    return (
        <>
            <section className="working-process-section-eight">
                <div className="auto-container">
                    <div className="sec-title style-eight text-center">
                        <h4>So How does it work?</h4>
                        <h2>Steps on Your Journey</h2>
                    </div>
                    <div className="row">
                        {/*Working Process Block Eight*/}
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <div className="working-process-block-eight">
                                <div className="img-holder">
                                    <div className="shape-bg" style={{ backgroundImage: 'url(assets/images-3/shape/thm-shape-2.png)' }} />
                                    <div className="inner">
                                        <img src="/assets/images/icons/step1.webp" width={200} alt="Connect with One Soul Retreats and join the One Soul Family" />
                                    </div>
                                    <div className="counting-step-box" />
                                </div>
                                <div className="text-holder">
                                    <h3><Link href="/booking">You Connect with Us</Link></h3>
                                    <p className="stepstext">When you join The One Soul Family we become your partners and guides through the steps of your Journey .</p>
                                </div>
                            </div>
                        </div>
                        {/*Working Process Block Eight*/}
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <div className="working-process-block-eight">
                                <div className="img-holder">
                                    <div className="shape-bg" style={{ backgroundImage: 'url(assets/images-3/shape/thm-shape-2.png)' }} />
                                    <div className="inner">
                                        <img src="/assets/images/icons/step2.webp" alt="Create your journey with One Soul Retreats, make your plan" />
                                    </div>
                                    <div className="counting-step-box" />
                                </div>
                                <div className="text-holder">
                                    <h3><Link href="/booking">Create Your Journey</Link></h3>
                                    <p className="stepstext">Schedule a consultation with one or our senior guides and they will help you plan your jounrey, create your transformation plan, and ultimately schedule your travel itinerary.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/*Working Process Block Eight*/}
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <div className="working-process-block-eight">
                                <div className="img-holder">
                                    <div className="shape-bg" style={{ backgroundImage: 'url(assets/images-3/shape/thm-shape-2.png)' }} />
                                    <div className="inner">
                                        <img src="/assets/images/icons/step3.png" alt="Live your journey travel to your One Soul Retreats destination and experiance true healing" />
                                    </div>
                                    <div className="counting-step-box" />
                                </div>
                                <div className="text-holder">
                                    <h3><Link href="/booking">Live Your Journey</Link></h3>
                                    <p className="stepstext">Travel to your One Soul Retreats destination to experiance a life changing transformation and true healing.</p>
                                </div>
                            </div>
                        </div>
                        {/*Working Process Block Eight*/}
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <div className="working-process-block-eight">
                                <div className="img-holder">
                                    <div className="shape-bg" style={{ backgroundImage: 'url(assets/images-3/shape/thm-shape-2.png)' }} />
                                    <div className="inner">
                                        <img src="/assets/images/icons/step4.webp" alt="On going support and integration after your retreat" />
                                    </div>
                                    <div className="counting-step-box" />
                                </div>
                                <div className="text-holder">
                                    <h3><Link href="/booking">On Going Support</Link></h3>
                                    <p>When you complete your One Soul Journey our team will help you integrate your eexperiences into your daily life and bring lasting healing. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
