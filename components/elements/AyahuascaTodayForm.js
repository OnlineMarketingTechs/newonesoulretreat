// components/AyahuascaTodayForm.js
"use client";
import Link from "next/link";
import { useEffect } from "react";

const AyahuascaTodayForm = () => {
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
    <div className=""> {/* Added a container div */}
      <div className="contact-form-eight-c">
        <div className="title">
          <h2 className="text-center">Get Your Free Copy Now!</h2>
          <p className="pt-3 mb-3">Find out everything about Ayahuasca</p>
        </div>
        <form className="contact-form-h8">
          <div className="row clearfix">
            <div className="col-md-12 form-group">
              <input
                type="text"
                name="firstName"
                placeholder="Your First Name "
                required
              />
            </div>
            <div className="col-md-12 form-group">
              <input
                type="text"
                name="lastName"
                placeholder="Your Last Name"
                required
              />
            </div>
            <div className="col-md-12 form-group">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
              />
            </div>
            <div className="col-md-12 form-group">
              <input type="text" name="phone" placeholder="Phone" required />
            </div>
            <div className="col-md-12">
              <button
                type="submit"
                className="theme-btn btn-style-eight"
                name="submit-form"
              >
                <span className="btn-title">Get Your Free Copy</span>
              </button>
            </div>
            <div className="mt-2 ml-3">
              <Link className="mr-2" href="/privacy_LP">
                Privacy Policy
              </Link>{" "}
              <Link href="/terms-lp">Terms & Conditions</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AyahuascaTodayForm;