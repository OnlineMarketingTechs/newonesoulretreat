
import Layout from "@/components/layout/Layout"

import Awards from "@/components/sections/home8/Awards"
import Banner from "@/components/sections/home8/Banner"
import Onesoul from "@/components/sections/home8/Onesoul"
import Blog from "@/components/sections/home8/Blog"
import OnesoulForm from "@/components/sections/home8/OnesoulForm"
import ContactFormFaq from "@/components/sections/home8/ContactFormFaq"
import ContactInfo from "@/components/sections/home8/ContactInfo"
import Funfacts from "@/components/sections/home8/Funfacts"
import PricingPlan from "@/components/sections/home8/PricingPlan"
import Service from "@/components/sections/home8/Service"
import Team from "@/components/sections/home8/Team"
import Testimonialdl from "@/components/sections/home8/Testimonialdl"
import WelcomeOnesoul from "@/components/sections/home8/WelcomeOnesoul"
import WorkingProcess from "@/components/sections/home8/WorkingProcess"
  

export const metadata = {
    title: 'The One Soul Path - Learn to walk the path to your highest potential',
    description: 'The One Soul Path is a comprehensive guide to creating a better existance and live your life to the fullest. One Soul Retreats is the #1 provider of Ayahuasca retreats and integration in the world. Our retreats provide safe & supportive containers to dive deeply into your healing.',
}

export default function Home() {

    return (
        <>
            <Layout headerStyle={8} footerStyle={8} wrapperCls="home_8">
            <Onesoul />
                
                <WelcomeOnesoul />
                <Service />
                <OnesoulForm />
                
                <Testimonialdl />
                
                <Blog />
                
                {/* <ContactFormFaq /> */}
                <Funfacts />
            </Layout>
        </>
    )
}