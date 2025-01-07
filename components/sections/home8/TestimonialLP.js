import TestimonialSlider8 from "@/components/slider/TestimonialSlider8"


export default function Testimonial() {
    return (
        <>
            <section className="testimonial-section-eight-h8-LP">
                <div className="layer-outer" style={{ backgroundImage: 'url(/assets/images/background/colorado-2.webp)' }} />
                <div className="auto-container" id="Testimonials">
                    <div className="sec-title style-eight-LP text-center">
                        <h4 >Testimonials</h4>
                        <h2>Words From Our Customers</h2>
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                            <TestimonialSlider8 />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
