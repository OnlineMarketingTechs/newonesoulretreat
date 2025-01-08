'use client';
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import Breadcrumb_Services from "@/components/layout/Breadcrumb_Services";
import ContactForm from "@/components/contact/ContactForm";
import Testimonialdl from "@/components/sections/home8/Testimonialdl";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const form = document.querySelector(".contact-form-h8");
    if (form) {
      form.addEventListener("submit", handleSubmit);
    }

    return () => {
      if (form) {
        form.removeEventListener("submit", handleSubmit);
      }
    };
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formDataObject = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/submitAyafRP", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataObject),
      });

      if (response.ok) {
        const data = await response.json();
        window.location.href = data.redirectUrl;
      } else {
        console.error("Form submission error:", response.status);
        // Consider adding more user-friendly error handling here
      }
    } catch (error) {
      console.error("Form submission error:", error);
      // Consider adding more user-friendly error handling here
    }
  };

  return (
    <>
      <Layout headerStyle={8} footerStyle={8} wrapperCls="home_8">
        {/* <Breadcrumb_Services  pageImage="assets/images/online_maarketing_services_g.jpg" /> */}
        <div className="bookingTOp">
          <div className="bumper111">
            <section className="contact-form-faq-section-eight">
              <div className="auto-container">
                <div className="row pb-5">
                  <div className="col-xl-6">
                    <div className="faq-content-eight">
                      <div className="sec-title style-eight">
                        <h5 className="baseC3">Interested in attending an</h5>
                        <h2 className="pb-3">Ayahuasca Retreat?</h2>
                        <h4> This Book Covers Everything You Need To Know</h4>
                      </div>
                      <img
                        className="mb-3 aFrPDL"
                        src="/assets/images/background/ayahuasca-for-the-people-book-dl-page.webp"
                        width="220px"
                        alt="happy-people-at-ayahuasca-retreat-in-Costa-Rica"
                      />
                      <div className="text">
                        Ayahuasca for Real People, covers everything you need to
                        know about Ayahuasca and how it works. What to consider
                        before attending an ayahuasca retreat.
                      </div>
                      <div className="pb-3">You will learn:</div>
                      <div className="pl-3 bC3">
                        <span className="flaticon-check bC4 pr-2" />
                        The benefits of Ayahuasca?
                      </div>
                      <div className="pl-3 bC3">
                        <span className="flaticon-check bC4 pr-2" />
                        Is Ayahuasca Right for You?
                      </div>
                      <div className="pl-3 bC3">
                        <span className="flaticon-check bC4 pr-2" />
                        What is Ayahuasca?
                      </div>
                      <div className="pl-3 bC3">
                        <span className="flaticon-check bC4 pr-2" />
                        What will Happen When I take Ayahuasca?
                      </div>

                      <div className="pt-4">
                        Download the book today and get a much more complete
                        understanding of Ayahuasca.
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="contact-form-eight-b">
                      <div className="title">
                        <h2 className="text-center">
                          Get Your Free Copy Now!
                        </h2>
                        <p className="pt-3 mb-3">
                          Find out everything about Ayahuasca
                        </p>
                      </div>
                      <form className="contact-form-h8"> 
      <div className="row clearfix">
        <div className="col-md-12 form-group">
          <input type="text" name="firstName" placeholder="Your First Name " required />
        </div>
        <div className="col-md-12 form-group">
          <input type="text" name="lastName" placeholder="Your Last Name" required />
        </div>
        <div className="col-md-12 form-group">
          <input type="email" name="email" placeholder="Email Address" required />
        </div>
        <div className="col-md-12 form-group">
          <input type="text" name="phone" placeholder="Phone" required />
        </div>
        <div className="col-md-12">
          <button type="submit" className="theme-btn btn-style-eight" name="submit-form">
            <span className="btn-title">Get Your Free Copy</span>
          </button>
        </div>
        <div className="mt-2 ml-3">
          <Link className="mr-2" href="/privacy">Privacy Policy</Link> <Link href="/terms">Terms & Conditions</Link>
        </div>
      </div>
    </form>
                     
                    </div>
                  </div>
                </div>
                {/* end row */}
              </div>
            </section>
          </div>
        </div>
        <Testimonialdl />
      </Layout>
    </>
  );
}