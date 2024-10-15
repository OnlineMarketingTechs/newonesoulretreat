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
                                    <h2>Heal, grow, and change with The One Soul Path</h2>
                                    {/* <h4>Welcome to One Soul Retreats</h4> */}
                                </div>
                                <div className="inner text-left">
                                    <h3>Are you ready to unlock your true potential and live a life filled with purpose and fulfillment?</h3>
                                    <p>"The One Soul Path" is your guide to discovering your unique journey and embracing your highest self.</p>
                                    <p className="mt-4">In this transformative book, you'll learn how to:</p>
                                    <ul className="mt-5 mb-5">
                                        <li className="ml-5"><b>Identify your soul purpose:</b> Discover your unique contribution to the world.</li>
                                        <li className="ml-5"><b>Overcome limiting beliefs:</b> Break free from negative thoughts that hold you back.</li>
                                        <li className="ml-5"><b>Cultivate self-awareness:</b> Understand your thoughts, feelings, and behaviors on a deeper level.</li>
                                        <li className="ml-5"><b>Set meaningful goals:</b> Create a clear vision for your future and achieve your dreams.</li>
                                        <li className="ml-5"><b>Embrace challenges as opportunities:</b> Learn to navigate life's obstacles with resilience and grace.</li>
                                        <li className="ml-5"><b>Nourish your mind, body, and spirit:</b> Take care of yourself holistically for optimal well-being.</li>
                                        <li className="ml-5"><b>Cultivate gratitude:</b> Focus on the positive aspects of your life and experience greater happiness.</li>
                                        <li className="ml-5"><b>Build a supportive community:</b> Connect with like-minded individuals and find belonging.</li>
                                        <li><b></b></li>
                                        <li><b></b></li>
                                        <li><b></b></li>
                                        <li><b></b></li>
                                    </ul>
                                    <p>"The One Soul Path" is more than just a book; it's a roadmap to a more fulfilling life. Download your free copy today and start your journey toward self-discovery and transformation.</p>
                                    
                                    <div className="btn-box text-center mt-4">
                                      
                                            <Link href="/ayahuasca-for-real-people" className="theme-btn btn-style-eight mt-3"><span className="btn-title">Download Your Free Copy Now !</span></Link>
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
