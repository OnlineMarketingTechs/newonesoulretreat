
import CounterUp from "@/components/elements/CounterUp"
import Layout from "@/components/layout/Layout"
import Testimonial from "@/components/sections/home8/Testimonial"
import Testimonialdl from "@/components/sections/home8/Testimonialdl"
import Link from "next/link"
import Breadcrumb_Services from "@/components/layout/Breadcrumb_Services"
export default function Home() {

    return (
        <>
            <Layout headerStyle={8} footerStyle={8} wrapperCls="home_8">
            <Breadcrumb_Services breadcrumbTitle="terms" pageTitle="Terms & Conditions" pageImage="/assets/images/background/Colorado-SEO-Company.jpg" />
                <div>
               
                <section className="terms-conditions-section">
    <div className="auto-container">
        <div className="sec-title mt-5 pt-5">
            <h2>Terms and Conditions</h2>
            <div className="text-decoration">
                <span className="left" />
                <span className="right" />
            </div>
        </div>
        <div className="content">
            <p className="mb-5">
                One Soul Retreats is responsible for collecting payment for all services included in your stay, including medical supervision, program fees, food, accommodations, and other non-medicine expenses. If you are participating in the Herbal Support Therapy program, there is a $250 ceremony fee payable in cash to a third-party on-site medicine company. Credit or debit cards cannot be used for this charge.
            </p>

            <p className="mb-5">
                Our website is intended for educational and informational purposes only and does not provide medical advice. The information provided is not intended to diagnose or treat health problems or illnesses. Our website is not a substitute for professional healthcare and is designed to support your relationship with your healthcare provider. If you have or suspect you may have a health problem, please consult with your healthcare provider. If you believe you have a medical emergency, call your doctor or emergency medical services immediately.
            </p>

            <p className="mb-5 pb-5">
                Please note that these terms and conditions may change from time to time. It is recommended to review the most recent version before booking your retreat.
            </p>
        </div>
    </div>
</section>

<Testimonialdl />


                </div>

            </Layout>
        </>
    )
}