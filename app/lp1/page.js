
import Layout from "@/components/layout/Layout"
import Popup from "@/components/elements/Popup";
import Awards from "@/components/sections/home8/Awards"
import Banner from "@/components/sections/home8/Banner"
import Lp2 from "@/components/sections/home8/Lp2"
import Blog from "@/components/sections/home8/Blog"
import Choose from "@/components/sections/home8/Choose"
import ContactFormFaq from "@/components/sections/home8/ContactFormFaq"
import ContactInfo from "@/components/sections/home8/ContactInfo"
import Funfacts from "@/components/sections/home8/Funfacts"
import PricingPlan from "@/components/sections/home8/PricingPlan"
import Service from "@/components/sections/home8/Service"
import Team from "@/components/sections/home8/Team"
import Testimonial from "@/components/sections/home8/Testimonial"
import Welcome from "@/components/sections/home8/Welcome"
import WorkingProcess from "@/components/sections/home8/WorkingProcess"
import LpAyaToday from "@/components/sections/home8/LpAyaToday"

export const metadata = {
    title: 'One Soul Retreats - The #1 Provider of Ayahuasca Retreats in the World',
    description: 'One Soul Retreats is the #1 provider of Ayahuasca retreats in the world. Our retreats provide safe & supportive containers to dive deeply into your healing.',
}

export default function Home() {

    return (
        <>
            <Layout headerStyle={7} footerStyle={8} wrapperCls="home_8">
            <Lp2 />
                <LpAyaToday /> 
                <Welcome />
                <Service />
                <Choose />
                <WorkingProcess />
                <PricingPlan />
                <Testimonial />
                <Blog />
                <Popup />
                
                <Funfacts />
            </Layout>
        </>
    )
}