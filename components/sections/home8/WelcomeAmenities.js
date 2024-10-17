import Link from "next/link"


export default function Welcome() {
    return (
        <>
            <section className="welcome-section-eight">
                <div className="auto-container">
                    <div className="row mb-5 pb-5">
                        <div className="col-xl-6">
                            <div className="welcome-image-box-eight">
                                <div className="thm-shape" style={{ backgroundImage: 'url(assets/images-3/shape/thm-shape-1.png)' }} />
                                <div className="inner">
                                    <img src="/assets/images/background/one-soul-retreats-colorado.webp" alt="happy-people-at-ayahuasca-retreat-in-Costa-Rica" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="welcome-content-eight">
                                <div className="sec-title style-eight">
                                    <h2>Our Retreats are Simply the Best!</h2>
                                    {/* <h4>Welcome to One Soul Retreats</h4> */}
                                </div>
                                <div className="inner text-left">
                                    <h3>We offer top tier amenities and the perfect retreat Experiences.</h3>
                                    <p>Choosing the right retreat is a crucial step on your journey. At One Soul Retreats, our staff is deeply committed to the One Soul Path and our facilities are designed to support your journey of self-discovery and personal growth.</p>
                                    
                                    
                                    {/* <ul className="mt-5 mb-5">
                                        <li className="ml-5"><b>Identify your soul purpose:</b> Discover your unique contribution to the world.</li>
                                        <li className="ml-5"><b>Overcome limiting beliefs:</b> Break free from negative thoughts that hold you back.</li>
                                        <li className="ml-5"><b>Cultivate self-awareness:</b> Understand your thoughts, feelings, and behaviors on a deeper level.</li>

                                    </ul> */}
                                    {/* <p>"The One Soul Path" is more than just a book; it's a roadmap to a more fulfilling life. Download your free copy today and start your journey toward self-discovery and transformation.</p> */}
                                    
                                    {/* <div className="btn-box text-center mt-4">
                                      
                                            <Link href="/ayahuasca-for-real-people" className="theme-btn btn-style-eight mt-3"><span className="btn-title">Download Your Free Copy Now !</span></Link>
                                        </div> */}
                          
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>
        </>
    )
}
