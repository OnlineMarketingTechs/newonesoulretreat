import VideoPopup from "@/components/elements/VideoPopup"
import Link from "next/link"


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
                                    
                                    {/* new form section */}
                                    <div className="contact-form-eight-b">
                                <div className="title">
                                    <h2>Get your free copy now!</h2>
                                    <p className="mt-3 mb-3">The One Soul Path will get you started on the path to best life!</p>
                                    
                                </div>
                                <form method="post" action="sendemail.php" className="contact-form-h8">
                                    <div className="row clearfix">
                                        <div className="col-md-12 form-group">
                                            <input type="text" name="firstname" placeholder="Your First Name" required />
                                        </div>
                                        <div className="col-md-12 form-group">
                                            <input type="text" name="lastname" placeholder="Your Last Name" required />
                                        </div>
                                        <div className="col-md-12 form-group">
                                            <input type="email" name="email" placeholder="Email Address" required />
                                        </div>
                                        <div className="col-md-12 form-group">
                                            <input type="text" name="phone" placeholder="Phone" required />
                                        </div>
                                        <div className="col-md-12">
                                            <button className="theme-btn btn-style-eight" type="submit" name="submit-form">
                                                <span className="btn-title">Download Now</span>
                                            </button>
                                            
                                        </div>
                                        <div className="mt-2 ml-3">
                                           <Link className="mr-2" href="/privacy">Privacy Policy</Link> <Link href="/terms">Terms &amp; Conditions</Link>
                                        </div>

                                    </div>
                                </form>
                            </div>
                                    {/* end new form section */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
