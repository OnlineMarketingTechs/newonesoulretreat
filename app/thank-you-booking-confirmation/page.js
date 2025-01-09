'use client';
import { useSearchParams } from 'next/navigation'; 
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import Breadcrumb_Services from "@/components/layout/Breadcrumb_Services"

export default function Home() {
  const searchParams = useSearchParams();
  const firstName = searchParams.get('firstName'); 

  return (
    <>
      <Layout headerStyle={8} footerStyle={8} wrapperCls="home_8">
        <div>
          <section className="thankYouTopper">
            <div className="auto-container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="sec-title style-eight">
                    <h2>Thank You, {firstName}</h2>
                    {/* Added personalized welcome message */}
                    <div className="text">Welcome, to the One Soul Retreats family!</div> 
                    <div className="text">Your appointment has been scheduled . Please check your email you should have a message from us.</div>
                    <div className="text">Talk to you soon, <br /> One Soul Retreats</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
            </div>
                <div>
                    {/* Meet Up Section */}

                </div>

            </Layout>
        </>
    )
}