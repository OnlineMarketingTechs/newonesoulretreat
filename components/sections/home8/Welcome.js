import Link from "next/link"


export default function Welcome() {
    return (
        <>
            <section className="welcome-section-eight">
                <div className="auto-container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="welcome-image-box-eight">
                                <div className="thm-shape" style={{ backgroundImage: 'url(assets/images-3/shape/thm-shape-1.png)' }} />
                                <div className="inner">
                                <img src="/assets/images/background/one-soul-retreats-happy-visitors.webp" alt="happy-people-at-ayahuasca-retreat-in-Costa-Rica" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="welcome-content-eight">
                                <div className="sec-title style-eight">
                                    <h2>Heal, grow, and change with One Soul Retreats</h2>
                                    {/* <h4>Welcome to One Soul Retreats</h4> */}
                                </div>
                                <div className="inner">
                                    <h3>One Soul Retreats ayahuasca-based,</h3>
                                    <p>comprehensive transformation program is recognized as the world's best and safest place to work with ayahuasca. Enjoy luxurious amenities in a set and setting designed to give you a safe and productive place to heal. One Soul Retreats, the perfect place to experience the profound change you've been seeking, with results that last.</p>
                                    <div className="authorized">
                                        <div className="left">
                                  
                                        </div>
                                        <div className="text">
                                            <h3>Book Your Journey Now</h3>

                                        </div>
                                    </div>
                                    <div className="btn-box">
                                
                                        <Link href="/booking" className="theme-btn btn-style-eight"><span className="btn-title">Book Now </span></Link>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
