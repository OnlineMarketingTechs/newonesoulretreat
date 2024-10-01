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
                                        <img src="/assets/images/icons/step1.webp" width={200} alt="" />
                                    </div>
                                    <div className="counting-step-box" />
                                </div>
                                <div className="text-holder">
                                    <h3><Link href="#">You Connect with Us</Link></h3>
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
                                        <img src="/assets/images/icons/step2.webp" alt="walking-the-path-of-ayahuasca-step-2-one-soul-retreats" />
                                    </div>
                                    <div className="counting-step-box" />
                                </div>
                                <div className="text-holder">
                                    <h3><Link href="#">Create Your Journey</Link></h3>
                                    <p className="stepstext">Schedule a consultation with one or our senior guides and they will help you plan your jounrey, your transformation plan, and ultimatly your travel itenary.
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
                                        <img src="/assets/images/icons/step3.png" alt="" />
                                    </div>
                                    <div className="counting-step-box" />
                                </div>
                                <div className="text-holder">
                                    <h3><Link href="#">Live Your Journey</Link></h3>
                                    <p className="stepstext">Travel to your One Soul Retreat destination and experiance a life transformation and experience true healing.</p>
                                </div>
                            </div>
                        </div>
                        {/*Working Process Block Eight*/}
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <div className="working-process-block-eight">
                                <div className="img-holder">
                                    <div className="shape-bg" style={{ backgroundImage: 'url(assets/images-3/shape/thm-shape-2.png)' }} />
                                    <div className="inner">
                                        <img src="/assets/images/icons/step4.webp" alt="" />
                                    </div>
                                    <div className="counting-step-box" />
                                </div>
                                <div className="text-holder">
                                    <h3><Link href="#">On Going Support</Link></h3>
                                    <p>When you complete your One Soul Journey our team will help you integrate your experiance and bring lasting healing into your daily life. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
