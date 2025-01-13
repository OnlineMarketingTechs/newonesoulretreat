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
                    <div className="text">Thank you for your intreste in Ayahuasca for Real People!</div> 
                    <div className="text">Your submission has been received . Please check your email you should have a message from us to confirm your email.</div>
                    <div className="text">Your free book download will be emailed to you once you confirm your email address.</div>
                    <div className="text">Talk to you soon, <br /> One Soul Retreats</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
            </div>
                <div>
                   
                </div>

            </Layout>
        </>
    )
}