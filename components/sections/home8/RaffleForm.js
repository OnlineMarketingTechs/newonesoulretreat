import Link from "next/link"


export default function ContactInfo() {
    return (
        <>
            <section className="contact-info-section-eight">
                <div className="auto-container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="contact-info-eight">
                                <ul>
                                    <li>
                                        <div className="inner"> 
                                        <div className="title">
                                                <h3>Enter To Win Your Transformation Vacation</h3>
                                                <p>We Choose a New Winner Each Season!</p>
                                                <p className="tsmall mt-4 mb-4">Spring-Summer-Fall-Winter</p>
                                                <div>We will also send you our book Ayahuasca for Real People. Once we have selected a winner you will be contacted when we make the announcment.</div>
                                            
                                            </div>
                                            <div className="icon">
                                                <span className="icon-location clr8" />
                                            </div>
                                           
                                        </div>
                                    </li>

                                    <li>
                                        <div className="inner">
                                        <div className="contact-form-eight-b">
                                <div className="title">
                                    <h2 className="text-center">Complete This Form To Enter!</h2>
                                    <p className="pt-3">All Information is Required to Enter</p>
                                    
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
                                                <span className="btn-title">Book Now</span>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
