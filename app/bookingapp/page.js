'use client'; 
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import Breadcrumb_Services from "@/components/layout/Breadcrumb_Services"
import ContactForm from "@/components/contact/ContactForm"
import Testimonialdl from "@/components/sections/home8/Testimonialdl"
import BookingForm from "@/components/elements/Bookingform"

export default function Home() {

    return (
        <>
            <Layout headerStyle={7} footerStyle={7} wrapperCls="home_8">
            {/* <Breadcrumb_Services  pageImage="assets/images/online_maarketing_services_g.jpg" /> */}
            <div className="bookingTOp">
            <div className="bumper111">
                        <section className="contact-form-faq-section-eight">
                        <div className="auto-container">
                            <div className="row">
                                <div className="sec-title style-eight">
                                                <h2 className="pt-4">Lets Plan Your Journey Now</h2>
                                </div>
                                <div className="text mb-4">Complete this form to speak with a senior guest consultant and get all your questions answered.</div>
                                
                                <iframe className="mb-5" width='100%' height='600px' src='https://onesoulretreats.zohobookings.com/portal-embed#/onesoulretreats' frameborder='0' allowfullscreen='' > </iframe>
                             
                                    <div className="faq-content-eight mb-5 pb-5">

                                    </div>

                            </div>
                            {/* end row */}
                        </div>
                    </section>


            </div>
        </div>
        <Testimonialdl />                    
            </Layout> 
            
        </>
    )
}