
'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 5500,
        disableOnInteraction: true,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
}

export default function Banner() {
    return (
        <>
            <section className="banner-section style-eight">
                <Swiper {...swiperOptions} className="banner-carousel theme_carousel owl-theme">
                    {/* Slide Item */}
                    <SwiperSlide className="slide-item">
                        <div className="image-layer lazy-image" data-bg="/assets/images/background/aya-header-1111.png">
                        </div>
                        <div className="auto-container">
                            <div className="content-box">
                                <div className="text-center">
                                    {/* <h3>Be the Change</h3> */}
                                    <h2>Experience a Life-Changing Transformational Journey</h2>
                                    <div className="text text-left hombanWOW">Discover unparalleled transformative experiences at One Soul Retreats. Immerse yourself in the beauty of premiere destinations in Colorado, Costa Rica, Peru, and Mexico as you embark on a journey of self-discovery and healing. Our retreats, led by world-renowned shaman and facilitators, offer a safe and unforgettable space for personal growth. Experience the power of ancient wisdom combined with modern techniques to connect with your inner self and find lasting peace.</div>
                                  
                                    <div className="row">
                                    <div className="col-xl-5">
                                    <div className="btn-box bckBooking">
                                    <h3 className="homebannerSub pt-4 bannCallColor">Take the next step towards personal growth</h3>
                                    <div className="bannCallColor text mt-4 pl-4 pr-4">Plan your Transformation Journey Now, and get on the path to your highest potential</div>
                                    <div className="text bannCallColor smT">We offer weekly retreats year-round; <br></br>your jouney begins today</div>
                                        <Link href="/booking" className="theme-btn btn-style-eight"><span className="btn-title">Book Now </span></Link>
                                        </div>

                                    </div>
                                    <div className="col-xl-5 btn-box wipWow">   
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
                                      
                                            <Link href="#" className="theme-btn btn-style-eight mt-3"><span className="btn-title">Get - AYAHUSCA FOR REAL PEOPLE NOW!</span></Link>
                                        </div>
                                    </div>
                                        
                                         
                                    </div></div>
                                    
                                </div>
                            </div>
                        {/* new item */}
                            
                        {/* new item end */}
                        </div>
                    </SwiperSlide>
                    {/* Slide Item */}
                    <SwiperSlide className="slide-item">
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
                     
                    </SwiperSlide>
                            {/* Slide Item */}
                            <SwiperSlide className="slide-item">
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
                     
                    </SwiperSlide>
                    
                    
                    
                       
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
