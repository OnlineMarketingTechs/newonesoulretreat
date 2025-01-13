
"use client";
import { useEffect } from "react";
import Link from "next/link";

const BookingForm = () => {
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

    // Access form data and construct the bookingData object
    const formData = new FormData(event.target);
    const bookingData = Object.fromEntries(formData.entries()); // Convert to plain object

    try {
      const response = await fetch("/api/submitBooking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Set Content-Type to JSON
        },
        body: JSON.stringify(bookingData), // Stringify the data
      });

      if (response.ok) {
        // Handle success, such as redirecting to a thank you page
        const data = await response.json();
        console.log("Booking submitted successfully");
        window.location.href = data.redirectUrl;
      } else {
        // Handle errors
        console.error("Error submitting booking");
      }
    } catch (error) {
      // Handle network or other errors
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
            <span className="btn-title">Book Now</span>
          </button>
        </div>
        <div className="mt-2 ml-3">
          <Link className="mr-2" href="/privacy_LP">Privacy Policy</Link> <Link href="/terms-lp">Terms & Conditions</Link>
        </div>
      </div>
    </form>
  );
};

export default BookingForm;