import Link from "next/link"


export default function Blog() {
    return (
        <>
            <section className="blog-section-eight">
                <div className="auto-container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="news-section-eight_title">
                                <div className="sec-title style-eight">
                                    <h4>One Soul News</h4>
                                    <h2>Great articles about Ayahuasca Retreats</h2>
                                </div>
                                {/* <div className="btn-box">
                                    <Link href="#" className="theme-btn btn-style-eight"><span className="btn-title">More
                                        News</span></Link>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {/*Start Single blog Style1*/}
                        <div className="col-xl-4 col-lg-4">
                            <div className="news-block-eight wow fadeInUp" data-wow-duration="1500ms">
                                <div className="img-holder">
                                    <div className="inner">
                                        <img src="/assets/images/background/everything-your-need-to-know-about-ayahuasca.webp" alt="Everything you need to know about Ayahuasca Retreats" />
                                        <div className="overlay-icon">
                                            <Link href="/everything-you-need-to-know-about-ayahuasca-retreats"><span className="icon-plus" /></Link>
                                        </div>
                                    </div>
                                    <div className="categories-box bgclr1">
                                        <p>Ayahuasca Retreats</p>
                                    </div>
                                </div>
                                <div className="text-holder">
                                    <ul className="meta-info">
                                        <li>14 February, 2021</li>
                                        <li><Link href="#">By Raana irave</Link></li>
                                    </ul>
                                    <h3 className="blog-title">
                                        <Link href="/everything-you-need-to-know-about-ayahuasca-retreats">Everything You Need To Know About AYAHUASCA Retreats</Link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        {/*End Single blog Style1*/}
                        {/*Start Single blog Style1*/}
                        <div className="col-xl-4 col-lg-4">
                            <div className="news-block-eight wow fadeInUp" data-wow-duration="1500ms">
                                <div className="img-holder">
                                    <div className="inner">
                                        <img src="/assets/images/background/legal-ayahuasca-retreats-in-aspen-colorado.webp" alt="Legal Ayahuasca Retreat Aspen Colorado" />
                                        <div className="overlay-icon">
                                            <Link href="/everything-you-need-to-know-about-ayahuasca-retreats"><span className="icon-plus" /></Link>
                                        </div>
                                    </div>
                                    <div className="categories-box bgclr1">
                                        <p>Ayhuasca Retreats Colorado</p>
                                    </div>
                                </div>
                                <div className="text-holder">
                                    <ul className="meta-info">
                                        <li>14 February, 2021</li>
                                        <li><Link href="#">By Brendan Duke</Link></li>
                                    </ul>
                                    <h3 className="blog-title">
                                        <Link href="/blog-single">Legal Ayahuasca Retreats in Aspen Colorado!</Link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        {/*End Single blog Style1*/}
                        {/*Start Single blog Style1*/}
                        <div className="col-xl-4 col-lg-4">
                            <div className="news-block-eight wow fadeInUp" data-wow-duration="1500ms">
                                <div className="img-holder">
                                    <div className="inner">
                                        <img src="/assets/images/background/Transforming-depression-with-ayahuasca.webp" alt="Transforming Depression with Ayahuasca" />
                                        <div className="overlay-icon">
                                            <Link href="#"><span className="icon-plus" /></Link>
                                        </div>
                                    </div>
                                    <div className="categories-box bgclr1">
                                        <p>Depression and Ayahuasca</p>
                                    </div>
                                </div>
                                <div className="text-holder">
                                    <ul className="meta-info">
                                        <li>14 February, 2021</li>
                                        <li><Link href="#">By Raana irave</Link></li>
                                    </ul>
                                    <h3 className="blog-title">
                                        <Link href="/blog-single">Transforming Depression with Ayahuasca</Link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        {/*End Single blog Style1*/}
                    </div>
                </div>
            </section>
        </>
    )
}
