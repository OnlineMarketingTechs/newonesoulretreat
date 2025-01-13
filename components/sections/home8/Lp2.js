
'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

// const swiperOptions = {
//     modules: [Autoplay, Pagination, Navigation],
//     slidesPerView: 1,
//     spaceBetween: 0,
//     autoplay: {
//         delay: 5500,
//         disableOnInteraction: true,
//     },
//     loop: true,

//     // Navigation
//     navigation: {
//         nextEl: '.h1n',
//         prevEl: '.h1p',
//     },

//     // Pagination
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//     },
// }

export default function Banner() {
    return (
        <>
            <section className="banner-section style-eight">
                <Swiper className="banner-carousel theme_carousel owl-theme">
                    {/* Slide Item */}
                    <SwiperSlide className="slide-item">
                        <div className="image-layer lazy-image" data-bg="/assets/images/background/ayahuasca-book-and-shaman.webp">
                        </div>
                        <div className="auto-container">
                            <div className="content-box">
                                <div className="">
                                    {/* <h3>Be the Change</h3> */}
                                    <h1 className="LPtopper2">AYAHUASCA FOR REAL PEOPLE</h1>
                                    <h2 className="LPtopper">A Beginner's Guide to Healing and Self-Discovery </h2>
                                    {/* <p className="text">Embark on a Journey of Self-Discovery with Ayahuasca</p>
                                    <p className="text">Ready to unlock your true potential and experience the profound healing power of Ayahuasca? Download your FREE copy of "Demystifying Ayahuasca: A Beginner's Guide to Healing and Self-Discovery" today and gain the knowledge and confidence to embark on your transformative journey. This comprehensive guide provides everything you need to know about Ayahuasca, from its benefits and effects to choosing the right retreat and setting intentions for a life-changing experience. Start your adventure now and discover the wonders that await you!</p> */}
                                    {/* <div className="">This is your chance to:</div> */}
                                            <ui>
                                            {/* <li className="pl-3 bC3"><span className="flaticon-check bC4 pr-2" />Connect with your inner self</li>
                                            <li className="pl-3 bC3"><span className="flaticon-check bC4 pr-2" />Find lasting peace</li>
                                            <li className="pl-3 bC3"><span className="flaticon-check bC4 pr-2" />Create unforgettable memories</li> */}
                                            </ui>

                                    {/* <div className="text">Enter now for your chance to win a transformative vacation at One Soul Retreats!</div> */}

                                  
                                    <div className="row">
                                    {/* <div className="col-xl-5">
                                    <div className="btn-box bckBooking text-center">
                                    <h3 className="homebannerSub pt-4 bannCallColor">Take the next step towards personal growth</h3>
                                    <div className="bannCallColor text mt-4 pl-4 pr-4">Plan your Transformation Journey Now, and get on the path to your highest potential</div>
                                    <div className="text bannCallColor smT">We offer weekly retreats year-round; <br></br>your jouney begins today</div>
                                        <Link href="/booking" className="theme-btn btn-style-eight"><span className="btn-title">Book Now </span></Link>
                                        </div>

                                    </div> */}
                                    {/* <div className="col-xl-5 btn-box wipWow">   
                                    <div className="auto-container">
                                             <h3 className="pt-4 text-right pr-4 bannerboxTexts">Learn Everything You Need <br></br> To Know About Ayahuasca</h3>
                                                <ul className="ml-5 pl-5 bannerboxTexts">
                                                       <li className="ml-5 pl-5 text-right"><span className="flaticon-check pr-2" /> What is Ayahuasca?</li>
                                                        <li  className="ml-5 pl-5 text-right"><span className="flaticon-check pr-2" /> What are the benefits of Ayahuasca?</li>
                                                        <li  className="ml-5 pl-5 text-right"><span className="flaticon-check pr-2" /> What are the risks of Ayahuasca?</li>
                                                        <li  className="ml-5 pl-5 text-right"><span className="flaticon-check pr-2" /> What to expect during an Ayahuasca ceremony?</li>
                                                        <li  className="ml-5 pl-5 text-right">So much more...</li>
                                                </ul>
                            
                                        <div className="btn-box text-center">
                                      
                                            <Link href="/ayahuasca-for-real-people" className="theme-btn btn-style-eight mt-3"><span className="btn-title">Get - AYAHUSCA FOR REAL PEOPLE NOW!</span></Link>
                                        </div>
                                    </div>
                                        
                                         
                                    </div>*/}
                                    </div> 
                                </div>
                            </div>
                        {/* new item */}
                            
                        {/* new item end */}
                        </div>
                    </SwiperSlide>
                    {/* Slide Item */}
                    {/* <SwiperSlide className="slide-item">
                        <div className="image-layer lazy-image" data-bg="/assets/images/background/one-soul-retreat-soul-journey.webp">
                        </div>
                        <div className="auto-container">
                            <div className="content-box justify-content-end">
                                <div>
                                    <h3 className="">Find Your True Path</h3>
                                    <h2 className="specialMove mt-5"> Our retreats provide safe & supportive containers to dive deeply into your healing</h2>
                                    <div className="text white">One Soul Retreats the #1 Ayahuasca retreat and healing center for individuals committed to personal growth and profound results.</div>
                                    <div className="btn-box">
                                        <Link href="#" className="theme-btn btn-style-eight"><span className="btn-title">Read
                                            More</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                     
                    </SwiperSlide> */}
                            {/* Slide Item */}
                            {/* <SwiperSlide className="slide-item">
                        <div className="image-layer lazy-image" data-bg="/assets/images/background/one-soul-reteats-soul-merger.webp">
                        </div>
                        <div className="auto-container">
                            <div className="content-box justify-content-end">
                                <div>
                                    <h3 className="specialMove">Heal - Grow - Change</h3>
                                    <h2 className=" mt-5">Experience a Life-Changing Awakening !</h2>
                                    <div className="text white">One Soul Retreats - Ayahuasca retreats in the safe and beautiful Colorado Mountains.</div>
                                    <div className="btn-box">
                                        <Link href="#" className="theme-btn btn-style-eight"><span className="btn-title">Read
                                            More</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                     
                    </SwiperSlide> */}
                    
                    
                    
                       
                    <div className="owl-nav">
                        <button type="button" className="owl-prev h1n">
                            <span>‹</span>
                        </button>
                        <button type="button" className="owl-next h1n">
                            <span>›</span>
                        </button>
                    </div>
                </Swiper>
            </section>
        </>
    )
}
