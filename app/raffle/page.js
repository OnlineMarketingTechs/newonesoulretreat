
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
                <div className="raffleT">
                <div className="sec-title style-eight">
                                    <h2 className="pt-2">Win A Transformation Vacation</h2>
                                </div>
                                <img className="mb-3" src="/assets/images/background/ayahuasca-vacation-in-costa-rica.webp" width="" alt="amazing beach near Costa Rica Ayahuasca Retreat" />
                                <div></div>
                </div>
                    <div className="row">
                    <div className="col-xl-6">
                            <div className="faq-content-eight">
                                {/* <div className="sec-title style-eight">
                                    <h2 className="pt-4">Win A Transformation Vacation</h2>
                                </div> */}
                                <div className="text pt-4">Win a Free 7 Day All Inclusive Retreat with One Soul Retreats</div>  
                                <div className="text">Valued at over $8500.</div>
                                <div className="pb-3">Includes:</div>
                                <div className="pl-3"><span className="flaticon-check pr-2" />7 Days accomidations</div>
                                <div className="pl-3"><span className="flaticon-check pr-2" />All meals</div>
                                <div className="pl-3"><span className="flaticon-check pr-2" />On site classes and guidance sessions</div>
                                <div className="pl-3"><span className="flaticon-check pr-2" />Ayahuasca healing program</div>
                                <div className="pl-3"><span className="flaticon-check pr-2" />Post retreat support and integration</div>

                                <div className="pt-4 mb-3">We select a new winner every season <br></br>  Winter - Spring - Summer - Fall</div>
                               
                                      
                                      <Link href="/terms" className="pt-5"><span className="btn-title">Terms & Conditions</span></Link>
                               
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="contact-form-eight-b">
                                <div className="title">
                                    <h2>Enter Now</h2>
                                    <p className="mt-4">We will also send you a copy of our Ayahuasca for Real People Book</p>
                                    
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