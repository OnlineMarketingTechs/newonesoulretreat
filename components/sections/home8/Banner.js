
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
                                <div>
                                    <h3>Be the Change</h3>
                                    <h2>Awaken Your Highest Potential</h2>
                                    <div className="text">The #1 transformation center for individuals committed to personal growth goals and seeking profound results.</div>
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
                        <button type="button" className="owl-prev h1p">
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
