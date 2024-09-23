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
export default function TestimonialSlider13() {
    return (
        <>
            <Swiper {...swiperOptions} className="theme_carousel owl-theme">
                <SwiperSlide className="slide">
                    <div className="testimonial-block">
                        <div className="inner-box">
                            <div className="icon-box"><i className="customicon-right-quote" /></div>
                            <h3>AN</h3>
                            <span className="designation">Five Stars</span>
                            <p>Sam and Jen are amazing. What they've done with the menu is impressive. Best mac n cheese you'll ever have. Nothing in their menu that I didn't love.</p>
                            <figure className="testimonial-thumb"><img src="/assets/images/testi1.png" alt="" /></figure>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="testimonial-block">
                        <div className="inner-box">
                            <div className="icon-box"><i className="customicon-right-quote" /></div>
                            <h3>Christina Chandra</h3>
                            <span className="designation">Five Stars</span>
                            <p>My favorite place to eat on the West side!! I come here all the time for the mac nut milk soft serve 🍦and the tomato soup with flatbread. The mac n cheese and ube pancake are also my favorites. This is my happy place. 100% recommend!</p>
                            <figure className="testimonial-thumb"><img src="/assets/images/christinia-journey-cafe.png" alt="" /></figure>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="testimonial-block">
                        <div className="inner-box">
                            <div className="icon-box"><i className="customicon-right-quote" /></div>
                            <h3>Austin Hallock</h3>
                            <span className="designation">Five Stars</span>
                            <p>This is our favorite restaurant. We try to order something new each time we visit, and every single time, it’s incredible. Delicious food and amazing ice cream!</p>
                            <figure className="testimonial-thumb"><img src="/assets/images/austin-journey-cafe.png" alt="" /></figure>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
