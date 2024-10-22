
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
                                <div className="text">Complete this form to speak with a senior guest consultant and get all your questions answered.</div>  
                                <div className="text">Discover the perfect One Soul Retreat for you.</div>
                                <div className="pb-3">You will learn:</div>
                                <div className="pl-3"><span className="flaticon-check pr-2" />The retreats offered by Onesoul</div>
                                <div className="pl-3"><span className="flaticon-check pr-2" />Our locations and amenities</div>
                                <div className="pl-3"><span className="flaticon-check pr-2" />Travel information</div>
                                <div className="pl-3"><span className="flaticon-check pr-2" />Your goals and intentions for your jouney</div>

                                <div className="pt-4">Our trained guides will answer any other questions or concerns you may have</div>

                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="contact-form-eight-b">
                                <div className="title">
                                    <h2>Get connected with a guide</h2>
                                    <p className="mb-3">Lets get started planning your journey</p>
                                    
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
                                        <div className="mt-2 ml-3">
                                           <Link className="mr-2" href="/privacy">Privacy Policy</Link> <Link href="/terms">Terms &amp; Conditions</Link>
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