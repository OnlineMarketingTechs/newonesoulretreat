
import Layout from "@/components/layout/Layout"

import Awards from "@/components/sections/home8/Awards"
import Lp1 from "@/components/sections/home8/Lp1"
import Homeset from "@/components/sections/home8/Homeset"
import Blog from "@/components/sections/home8/Blog"
import Choose from "@/components/sections/home8/Choose"
import ContactFormFaq from "@/components/sections/home8/ContactFormFaq"
import RaffleForm from "@/components/sections/home8/RaffleForm"
import Funfacts from "@/components/sections/home8/Funfacts"
import PricingPlan from "@/components/sections/home8/PricingPlan"
import Service from "@/components/sections/home8/Service"
import Team from "@/components/sections/home8/Team"
import Testimonial from "@/components/sections/home8/Testimonial"
import Welcome from "@/components/sections/home8/Welcome"
import WorkingProcess from "@/components/sections/home8/WorkingProcess"

export const metadata = {
    title: 'One Soul Retreats - The #1 Provider of Ayahuasca Retreats in the World',
    description: 'One Soul Retreats is the #1 provider of Ayahuasca retreats in the world. Our retreats provide safe & supportive containers to dive deeply into your healing.',
}

export default function Home() {

    return (
        <>
            <Layout headerStyle={15} footerStyle={15} wrapperCls="home_8">

            <Lp1 />
                <RaffleForm />
                <Welcome />
                <Service />
                <Choose />
                <WorkingProcess />
                {/* <Team /> */}
                <PricingPlan />
                <Testimonial />
                {/* <Awards /> */}
                {/* <Blog /> */}
                
                {/* <ContactFormFaq /> */}
                <Funfacts />
            </Layout>
        </>
    )
}