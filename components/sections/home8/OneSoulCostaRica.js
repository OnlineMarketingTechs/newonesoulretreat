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
                        <h2 id="costarica">Costa Rica<br /></h2>
                    </div>
                    <div className="row mb-5 pb-5">
                        
                        <div className="col-xl-6">
                            <div className="welcome-content-eightB2a">
                                <div className="sec-title style-eightB2a">
                                    <h2>Immerse yourself in the ideal set and setting for peak experiences and deep healing</h2>
                                    {/* <h4>Welcome to One Soul Retreats</h4> */}
                                </div>
                                <div className="inner text-left">
                                    <h3>We offer top tier Amenities and The perfect retreat experience for people like you.</h3>
                                    <p className="mt-5">Indulge in the ultimate comfort and serenity at One Soul Retreat, where we've meticulously crafted a luxurious environment to enhance your transformative journey. Our retreat offers a range of world-class amenities designed to provide relaxation, rejuvenation, and inspiration.  our focus is on providing a safe, peaceful and supportive space for your personal growth and healing.</p>
                                    
                                    
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
                                    <img src="/assets/images/background/private-rooms-at-one-soul-costa-rica.webp" alt="people in the maloca at ayahuasca retreat in Costa Rica" />
                                </div>
                            </div>
                            <div className="welcome-image-box-eight mt-5 mb-5">
                                <div className="thm-shape" style={{ backgroundImage: 'url(assets/images-3/shape/thm-shape-1.png)' }} />
                                <div className="inner">
                                    <img src="/assets/images/background/costa-rica-ayahuasca-retreat-group.webp" alt="group of people ayahuasca-retreat-in-Costa-Rica" />
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
