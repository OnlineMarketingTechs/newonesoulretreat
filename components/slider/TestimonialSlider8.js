'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
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

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        575: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    }
}
export default function TestimonialSlider8() {
    return (
        <>

            <Swiper {...swiperOptions} className="theme_carousel owl-theme">
                {/*Testimonial Block Eight*/}
                <SwiperSlide className="testimonial-block-eight">
                    <div className="img-holder">
                        <img src="/assets/images/background/rachel-lenard.webp" alt="rachel-leonard-ayahuasca-retreat-testimonial" />
                    </div>
                    <div className="inner-content text-center" style={{ backgroundImage: 'url(assets/images-3/pattern/pattern-bg-1.jpg)' }}>
                        <h3>Rachel Leonard</h3>
                        <span>California</span>
                        <div className="text">
                            <p>My journey changed my life, I have never felt so present, and perfectly in the right place. The staff was amazing the retreat was like nothing I have seen.</p>
                        </div>
                    </div>
                </SwiperSlide>
                {/*Testimonial Block Eight*/}
                <SwiperSlide className="testimonial-block-eight">
                    <div className="img-holder">
                        <img src="/assets/images/background/Jason-shaun.webp" alt="jason-shaun-ayahuasca-retreat-visitor-testimonial" />
                    </div>
                    <div className="inner-content text-center" style={{ backgroundImage: 'url(assets/images-3/pattern/pattern-bg-1.jpg)' }}>
                        <h3>Lamont Shaun</h3>
                        <span>Newyork</span>
                        <div className="text">
                            <p>Still can not believe how profound this experience, really was. I just can not say enough about the staff, and One Soul Retreats</p>
                        </div>
                    </div>
                </SwiperSlide>
                {/*Testimonial Block Eight*/}
                <SwiperSlide className="testimonial-block-eight">
                    <div className="img-holder">
                        <img src="/assets/images/background/kay-winston.webp" alt="Key-winston-ayahuasca-testimonial" />
                    </div>
                    <div className="inner-content text-center" style={{ backgroundImage: 'url(assets/images-3/pattern/pattern-bg-1.jpg)' }}>
                        <h3>Xavier Winston</h3>
                        <span>California</span>
                        <div className="text">
                            <p>Still can not believe how profound this experience, really was. I just can not say enough about the staff, and One Soul Retreats</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

        </>
    )
}
