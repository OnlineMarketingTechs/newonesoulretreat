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
                                    <img src="/assets/images/background/farm-to-table-organic-food.png" alt="happy-people-at-ayahuasca-retreat-in-Costa-Rica" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="welcome-content-eight">
                                <div className="sec-title style-eight">
                                    <h2>Dining Experiences!</h2>
                                    {/* <h4>Welcome to One Soul Retreats</h4> */}
                                </div>
                                <div className="inner text-left">
                                    <h3>We offer top tier Amenities and The perfect retreat experience for people like you.</h3>
                                    <p className="mb-4">Our organic, farm-to-table cuisine is thoughtfully designed to support your healing journey and provide optimal nourishment. Enjoy delicious and balanced meals featuring fresh, local ingredients.</p>

                                    <p>For guests seeking a more stringent dietary regimen, we offer "diet-friendly" meal options with balanced macros and plenty of fresh fruits. These carefully crafted selections complement your therapy and spiritual practices, enhancing your overall wellness experience.</p>
                                    
                                    
                                    <ul className="mt-5 mb-5">

                                        <li className="ml-5"><b>Gourmet Cuisine:</b> Savor delicious and nutritious meals prepared by our talented chefs using fresh, locally sourced ingredients.</li>
                                        <li className="ml-5"><b>Healthy Options:</b>  Catering to various dietary needs, we offer a variety of healthy and delicious meal choices.</li> 
                                    </ul>
                                    {/* <p>"The One Soul Path" is more than just a book; it's a roadmap to a more fulfilling life. Download your free copy today and start your journey toward self-discovery and transformation.</p>
                                    
                                    <div className="btn-box text-center mt-4">
                                      
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
