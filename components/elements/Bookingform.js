// components/BookingForm.js
'use client';
import Link from "next/link";

const BookingForm = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const bookingData = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/submitBooking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });

      if (response.ok) {
        console.log('Booking submitted');
        // Optionally, display a success message to the user
      } else {
        console.error('Error submitting booking');
        // Optionally, display an error message to the user
      }
    } catch (error) {
      console.error('Error submitting booking:', error);
    }
  };

  return (
    <form method="post" action="/api/submitBooking" onSubmit={handleSubmit} className="contact-form-h8">
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
          <button className="theme-btn btn-style-eight" type="submit" name="submit-form">
            <span className="btn-title">Book Now</span>
          </button>
        </div>
        <div className="mt-2 ml-3">
          <Link className="mr-2" href="/privacy">Privacy Policy</Link> <Link href="/terms">Terms &amp; Conditions</Link>
        </div>
      </div>
    </form>
  );
};

export default BookingForm;