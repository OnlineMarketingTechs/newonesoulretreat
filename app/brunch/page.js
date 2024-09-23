
import Layout from "@/components/layout/Layout"

import About2 from "@/components/sections/home13/About2"
import Bannerbrunch from "@/components/sections/home13/Bannerbrunch"
import Chooseus from "@/components/sections/home13/Chooseus"
import Clients from "@/components/sections/home13/Clients"
import Faq from "@/components/sections/home13/Faq"
import News from "@/components/sections/home13/News"
import Project from "@/components/sections/home13/Project"
import Service2 from "@/components/sections/home13/Service2"
import Team from "@/components/sections/home13/Team"
import Testimonial from "@/components/sections/home13/Testimonial"
import Video from "@/components/sections/home13/Video"
import Video2 from "@/components/sections/home13/Video2"

export default function Home() {

    return (
        <>
            <Layout headerStyle={13} footerStyle={13} wrapperCls="home_13">
                <Bannerbrunch />
                <Chooseus />
                <Service2 />
                <Clients />
                <About2 />
               <Testimonial />
                <Faq /> 
            </Layout>
        </>
    )
}