// components/OneSoulPathForm.js
"use client";
import { useEffect } from "react";
import Link from "next/link";

const OneSoulPathForm = () => {
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
    const bookingData = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/submitOneSoulPath", { 
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Booking submitted successfully");
        window.location.href = data.redirectUrl;
      } else {
        console.error("Error submitting booking");
      }
    } catch (error) {
      console.error("Error submitting booking:", error);
    }
  };

  return (
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
          <span className="btn-title">Get Your Copy Now</span>
        </button>
      </div>
      <div className="mt-2 ml-3">
        <Link className="mr-2" href="/privacy">Privacy Policy</Link> <Link href="/terms">Terms & Conditions</Link>
      </div>
    </div>
  </form>
  );
};

export default OneSoulPathForm;