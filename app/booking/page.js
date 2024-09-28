
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import Breadcrumb_Services from "@/components/layout/Breadcrumb_Services"
import ContactForm from "@/components/contact/ContactForm"


export default function Home() {

    return (
        <>
              <Layout headerStyle={8} footerStyle={8} wrapperCls="home_8">
            {/* <Breadcrumb_Services  pageImage="assets/images/online_maarketing_services_g.jpg" /> */}
        <div className="bookingTOp">
        <div className="bumper111">
                <section className="contact-form-faq-section-eight">
                <div className="auto-container">
                    <div className="row">
                    <div className="col-xl-6">
                            <div className="faq-content-eight">
                                <div className="sec-title style-eight">
                                    <h2 className="pt-4">Lets Plan Your Journey Now</h2>
                                </div>
                                <div className="text">Complete the form below to speak with a senior guest consultant and get all your questions answered.</div>  
                                <div className="text">Discover the perfect One Soul Retreat for you.</div>
                                
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="contact-form-eight-b">
                                <div className="title">
                                    <h2>Send Your Message to Us</h2>
                                    <p>Please feel free to get in touch using the form below.<br /> We'd love to hear for you.</p>
                                    
                                </div>
                                <form method="post" action="sendemail.php" className="contact-form-h8">
                                    <div className="row clearfix">
                                        <div className="col-md-12 form-group">
                                            <input type="text" name="username" placeholder="Your Name" required />
                                        </div>
                                        <div className="col-md-12 form-group">
                                            <input type="email" name="email" placeholder="Email Address" required />
                                        </div>
                                        <div className="col-md-12 form-group">
                                            <input type="text" name="phone" placeholder="Phone" required />
                                        </div>
                                        <div className="col-md-12 form-group">
                                            <textarea name="form_message" placeholder="Message goes here" />
                                        </div>
                                        <div className="col-md-12">
                                            <button className="theme-btn btn-style-eight" type="submit" name="submit-form">
                                                <span className="btn-title">Send request</span>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        
                    </div>
                    {/* end row */}
                </div>
            </section>


     </div>
</div>
                
            </Layout> 
            
        </>
    )
}