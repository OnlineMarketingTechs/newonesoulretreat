import VideoPopup from "@/components/elements/VideoPopup"


export default function Choose() {
    return (
        <>
            <section className="choose-section-eight">
                <div className="auto-container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="video-holder-box8" style={{ backgroundImage: 'url(/assets/images/background/ayahuasca-ceremony-be-the-best-you-can-be.webp)' }}>
                                <div className="video-box">
                                    <VideoPopup />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="choose-content-eight">
                                <div className="sec-title style-eight">
                                    <h4>Why Choose Us</h4>
                                    <h2>Be The Best You That You<br /> Can Be. Live Your Best Life!</h2>
                                </div>
                                <div className="inner-content">
                                    <ul>
                                        <li>
                                            <div className="inner">
                                                <div className="icon">
                                                    <div className="icon-bg1" style={{ backgroundImage: 'url(assets/images-3/icon/icon-bg-1.png)' }}>
                                                    </div>
                                                    <div className="icon-bg1-overlay" style={{ backgroundImage: 'url(assets/images-3/icon/icon-bg-1-overlay.png)' }}>
                                                    </div>
                                                    <span className="icon-login clr8" />
                                                </div>
                                                <div className="text">
                                                    <h3>Safe, Private &amp; Confidential</h3>
                                                    <p>We will help you create a life changing journey that provides lasting results and true transformation.</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="inner">
                                                <div className="icon">
                                                    <div className="icon-bg1" style={{ backgroundImage: 'url(assets/images-3/icon/icon-bg-1.png)' }}>
                                                    </div>
                                                    <div className="icon-bg1-overlay" style={{ backgroundImage: 'url(assets/images-3/icon/icon-bg-1-overlay.png)' }}>
                                                    </div>
                                                    <span className="icon-unknown clr8" />
                                                </div>
                                                <div className="text">
                                                    <h3>On Going Support and Integration</h3>
                                                    <p>Our talented staff and licensed therapists have created an integration curiculum and support network that helps you continue to grow.</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="inner">
                                                <div className="icon">
                                                    <div className="icon-bg1" style={{ backgroundImage: 'url(assets/images-3/icon/icon-bg-1.png)' }}>
                                                    </div>
                                                    <div className="icon-bg1-overlay" style={{ backgroundImage: 'url(assets/images-3/icon/icon-bg-1-overlay.png)' }}>
                                                    </div>
                                                    <span className="icon-support clr8" />
                                                </div>
                                                <div className="text">
                                                    <h3>24/7 Caring With Experts</h3>
                                                    <p>Our customer service team is always avaliable to help with anything your need.</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
