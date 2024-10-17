import Link from "next/link"


export default function Service() {
    return (
        <>
            <section className="service-section-eight">
                <div className="pattern-bg" style={{ backgroundImage: 'url(assets/images-3/pattern/pattern-bg-1.jpg)' }} />
                {/* new section 1 */}
                <div className="auto-container">
                <div className="sec-title style-eight clr2  text-center">
                        <h4><img src="/assets/images/logos/one-soul-white-logo-small.png" alt="" /></h4>
                        <h2 id="costarica">Colorado<br /></h2>
                    </div>
                    <div className="row mb-5 pb-5">
                        
                        <div className="col-xl-6">
                            <div className="welcome-content-eightB2a">
                                <div className="sec-title style-eightB2a">
                                    <h2>Luxury and Tranquility at One Soul Retreats, Aspen</h2>
                                    {/* <h4>Welcome to One Soul Retreats</h4> */}
                                </div>
                                <div className="inner text-left">
                                    <h3>Theres really nothing like this anywhere in the world, its awe inspiring.</h3>
                                    <p className="mt-5">Experience the pinnacle of luxury and tranquility at One Soul Retreat, nestled amidst 100 acres of majestic mountains in Aspen, Colorado. Our stunning estate offers world-class amenities and breathtaking natural beauty, creating the perfect setting for your transformative journey.
</p>
                                    
                                    
                                    <ul className="mt-5 mb-5">
                                        <li className="ml-5 mb-4"><b>Accommodations:</b> </li>
                                        <li className="ml-5"><b>A Private Room:</b> Relax in our cozy and well-appointed rooms, each featuring modern amenities for your comfort and breathtaking natural landscapes.</li>
                                        <li className="ml-5 mt-5 mb-4"><b>Wellness and Relaxation:</b></li>
                                        <li className="ml-5"><b>Spa Services:</b> Pamper yourself with a variety of rejuvenating treatments, including massages, facials, body wraps, and steam baths.</li>
                                        <li className="ml-5"><b>Yoga and Meditation:</b>  Find inner peace and balance through daily yoga and meditation classes led by experienced instructors.</li>
                                        {/* <li className="ml-5 mt-5 mb-4"><b>Dining Experiences:</b></li>
                                        <li className="ml-5"><b>Gourmet Cuisine:</b> Savor delicious and nutritious meals prepared by our talented chefs using fresh, locally sourced ingredients.</li>
                                        <li className="ml-5"><b>Healthy Options:</b>  Catering to various dietary needs, we offer a variety of healthy and delicious meal choices.</li> */}
                                    </ul>
                                
                                    
                                    {/* <div className="btn-box text-center mt-4">
                                      
                                            <Link href="/ayahuasca-for-real-people" className="theme-btn btn-style-eight mt-3"><span className="btn-title">Download Your Free Copy Now !</span></Link>
                                        </div> */}
                          
                                </div>
                                
                            </div>
                        </div>

                        <div className="col-xl-6">
                            <div className="welcome-image-box-eight mb-5">
                                <div className="thm-shape" style={{ backgroundImage: 'url(assets/images-3/shape/thm-shape-1.png)' }} />
                                <div className="inner">
                                    <img src="/assets/images/background/colorado-ayahuasca-retreats-One-Soul-Aspen.webp" alt="people in the maloca at ayahuasca retreat in Costa Rica" />
                                </div>
                            </div>
                            <div className="welcome-image-box-eight mt-5 mb-5">
                                <div className="thm-shape" style={{ backgroundImage: 'url(assets/images-3/shape/thm-shape-1.png)' }} />
                                <div className="inner">
                                    <img src="/assets/images/background/colorado-ayahuasca-retreats-One-Soul-Aspen-maloca.webp" alt="group of people ayahuasca-retreat-in-Costa-Rica" />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                 {/* end new section 2 */}
              
            </section>
        </>
    )
}
