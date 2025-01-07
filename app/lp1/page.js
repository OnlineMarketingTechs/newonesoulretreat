
import Layout from "@/components/layout/Layout"
import Lp2 from "@/components/sections/home8/Lp2"
import Choose from "@/components/sections/home8/Choose"
import Funfacts from "@/components/sections/home8/Funfacts"
import Service from "@/components/sections/home8/Service"
import TestimonialLP from "@/components/sections/home8/TestimonialLP"
import Welcome from "@/components/sections/home8/Welcome"

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
<TestimonialLP />
                    <Funfacts />
                    
                    
                    
            </Layout>
        </>
    )
}