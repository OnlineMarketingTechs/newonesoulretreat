import CounterUp from "@/components/elements/CounterUp"
import VideoPopup from "@/components/elements/VideoPopup"
import Link from "next/link"


export default function About() {
    return (
        <>
            <section className="about-section-home13">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                            <div className="content-box">
                                <div className="sec-title-two">
                                    <h6>Journey Cafe</h6>
                                    <h2>Vegan, Healing foods</h2>
                                </div>
                                <div className="text">
                                    
                                    <p className="mb-4">This is our Journey. We would like to share it with you: the journey from processed food to healthy food, gentle and healing to our land and our spirit.</p>
                                    <p className="mb-4">We believe that healing comes from aligning with the power of nature. Therefore, we pride ourselves in buying vibrant produce from local farmers and meticulously handcraft each dish with utmost care. </p>
                                    <p className="mb-4">With each bite, you will find that our food is full of life, full of flavor, full of love. For love touches the heart and heals the soul.</p>
                                    <p className="mb-4">This is the magic of healing food. Food that takes us on a Journey to Good Health. Heal the people. Heal the land.</p>
                                    <h3>That is our Journey.</h3>
                                </div>
                                <div className="inner-box">
                                    {/* <div className="row clearfix">
                                        <div className="col-lg-6 col-md-12 col-sm-12 single-column">
                                            <div className="single-item">
                                                <div className="icon-box"><i className="flaticon-share" /></div>
                                                <h3>Professional Team</h3>
                                                <p>On the other hand we denonce righteous indignation.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-12 single-column">
                                            <div className="single-item">
                                                <div className="icon-box"><i className="customicon-crane" /></div>
                                                <h3>Quality Service</h3>
                                                <p>Procure him some pleasure to take a trivial example.</p>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                                <div className="btn-box">
                                    {/* <Link href="/about" className="theme-btn btn-style-seven"><span className="btn-title">Read More</span></Link> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                            <div className="image-box">
                                <figure className="image"><img src="/assets/images/journey-cafe-team.png" alt="Journey Cafe Team - The makers of Good Things - farm fresh - local Hawaiian Foods" /></figure>
                                <div className="funfact-inner text-center clearfix">
                                    <div className="counter-column">
                                        <div className="inner-box">
                                            <h3>Heal the people. Heal the land.</h3>
                                        </div>
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
