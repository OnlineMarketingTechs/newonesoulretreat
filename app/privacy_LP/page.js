
import CounterUp from "@/components/elements/CounterUp"
import Layout from "@/components/layout/Layout"
import Testimonial from "@/components/sections/home8/Testimonial"
import Testimonialdl from "@/components/sections/home8/Testimonialdl"
import Link from "next/link"
import Breadcrumb_Services from "@/components/layout/Breadcrumb_Services"
export default function Home() {

    return (
        <>
            <Layout headerStyle={7} footerStyle={7} wrapperCls="home_8">
            <Breadcrumb_Services breadcrumbTitle="privacy policy" pageTitle="Privacy Policy" pageImage="/assets/images/background/Colorado-SEO-Company.jpg" />
                <div>
               
<section className="privacy-policy-section">
    <div className="auto-container">
        <div className="sec-title mt-5 pt-5">
            <h2>Privacy Policy</h2>
            <div className="text-decoration">
                <span className="left" />
                <span className="right" />
            </div>
        </div>
        <div className="content">
            <p>
                At One Soul Retreats, we prioritize the security and confidentiality of your personal information. This policy outlines how we collect, use, and protect your data. If you have any questions, please don't hesitate to contact us.
            </p>

            <h4 className="mt-5 mb-3">Information Collection</h4>
            <p>
                We collect personal information you voluntarily provide when using our services, booking reservations, ordering products, subscribing to our newsletter, or filling out forms. This may include your name, email address, phone number, and payment information. You can visit our website anonymously.
            </p>

            <h4 className="mt-5 mb-3">How We Use Your Information</h4>
            <p>
                We may use your information for the following purposes:
                <ul>
                    <li>Completing and managing your online reservations</li>
                    <li>Processing product orders</li>
                    <li>Providing requested information</li>
                    <li>Improving our website and services based on your feedback</li>
                    <li>Enhancing customer service</li>
                    <li>Storing your information for future reference</li>
                </ul>
            </p>

            <h4 className="mt-5 mb-3">Your Rights</h4>
            <p>
                You have the right to correct any inaccurate or unclear information. You can also opt out of receiving promotional emails or SMS messages by contacting us.
            </p>

            <h4 className="mt-5 mb-3">Data Security</h4>
            <p>
                We implement robust security measures to protect your personal information. We do not sell, trade, or transfer your data to outside parties, except as necessary for our operations or to comply with legal requirements.
            </p>

            <h4 className="mt-5 mb-3">Third-Party Services</h4>
            <p>
                We may use third-party service providers to help us analyze website traffic and improve our services. These providers are not permitted to use your information for any other purpose.
            </p>

            <h4 className="mt-5 mb-3">Cookies and IP Addresses</h4>
            <p>
                We may use cookies to track advertisements and gather aggregate data about website usage. Our web server automatically collects IP addresses, which are not personally identifiable. We use this information to understand how our website is used and improve our services.
            </p>

            <h4 className="mt-5 mb-3">Changes to This Policy</h4>
            <p>
                We may update this privacy policy from time to time. Any changes will be posted on this page, and the modification date will be updated.
            </p>

            <h4 className="mt-5 mb-3">Contact Us</h4>
            <p>
                If you have any questions about our privacy policy, please contact us at info@onesoulretreats.com
            </p>

            <p className="mb-5 pb-5">Last Updated: [Date]</p>
        </div>
    </div>
</section>

<Testimonialdl />


                </div>

            </Layout>
        </>
    )
}