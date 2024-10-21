
import Layout from "@/components/layout/Layout"

import Awards from "@/components/sections/home8/Awards"
import Banner from "@/components/sections/home8/Banner"
import Amenities from "@/components/sections/home8/Amenities"
import Blog from "@/components/sections/home8/Blog"
import Choose from "@/components/sections/home8/Choose"
import ContactFormFaq from "@/components/sections/home8/ContactFormFaq"
import ContactInfo from "@/components/sections/home8/ContactInfo"
import Funfacts from "@/components/sections/home8/Funfacts"
import PricingPlan from "@/components/sections/home8/PricingPlan"
import Service from "@/components/sections/home8/Service"
import OneSoulCostaRica from "@/components/sections/home8/OneSoulCostaRica"
import OneSoulColorado from "@/components/sections/home8/OneSoulColorado"
import Team from "@/components/sections/home8/Team"
import Testimonialdl from "@/components/sections/home8/Testimonialdl"
import WelcomeAmenities from "@/components/sections/home8/WelcomeAmenities"
import WelcomeAmenitiesTwo from "@/components/sections/home8/WelcomeAmenitiesTwo"
import WelcomeAmenitiesThree from "@/components/sections/home8/WelcomeAmenitiesThree"
import WorkingProcess from "@/components/sections/home8/WorkingProcess"

export const metadata = {
    title: 'The One Soul Path - Learn to walk the path to your highest potential',
    description: 'The One Soul Path is a comprehensive guide to creating a better existance and live your life to the fullest. One Soul Retreats is the #1 provider of Ayahuasca retreats and integration in the world. Our retreats provide safe & supportive containers to dive deeply into your healing.',
}

export default function Home() {

    return (
        <>
            <Layout headerStyle={8} footerStyle={8} wrapperCls="home_8">
            <Amenities />
                {/* <ContactInfo /> */}
                <WelcomeAmenities />
                <OneSoulCostaRica />
                <WelcomeAmenitiesTwo />
                <OneSoulColorado />
                <WelcomeAmenitiesThree />
                <Service />
                <Choose />
                {/* <WorkingProcess /> */}
                {/* <Team /> */}
                {/* <PricingPlan /> */}
                <Testimonialdl />
                {/* <Awards /> */}
                <Blog />
                
                {/* <ContactFormFaq /> */}
                <Funfacts />
            </Layout>
        </>
    )
}