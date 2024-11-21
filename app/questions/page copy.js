// pages/questions.js
'use client';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Link from "next/link"

export default function Questions() {
  const router = useRouter();
  const [answers, setAnswers] = useState({});
  const [contactId, setContactId] = useState(null);

  useEffect(() => {
    // Check if the router is ready and the id exists
    if (router.isReady && router.query.id) { 
      setContactId(router.query.id);
    }
  }, [router.isReady, router.query.id]); 

  const handleChange = (event) => {
    setAnswers({ ...answers, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/submitAnswers',
 {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ contactId: contactId, answers }), // Use contactId from state
      });

      if (response.ok) {
        console.log('Answers submitted');
      } else {
        console.error('Error submitting answers');
      }
    } catch (error) {
      console.error('Error submitting answers:', error);
    }
  };

  if (!contactId) {
    return <div>Loading...</div>;
  }

  return (
    <form method="post" action="/api/submitBooking" onSubmit={handleSubmit} className="contact-form-h8">
      <div className="row clearfix">
        <div className="col-md-12 form-group">
          <input type="text" name="question1" placeholder="Have you ingested ayahuasca before? " onChange={handleChange} />
        </div>
        <div className="col-md-12 form-group">
          <input type="text" name="question2" placeholder="Your First Name " onChange={handleChange} />
        </div>
        <div className="col-md-12 form-group">
          <input type="text" name="question3" placeholder="Your First Name " onChange={handleChange} />
        </div>
        <div className="col-md-12 form-group">
          <input type="text" name="question4" placeholder="Your First Name " onChange={handleChange} />
        </div>
        <div className="col-md-12">
          <button className="theme-btn btn-style-eight" type="submit" name="submit-form">
            <span className="btn-title">Submit</span>
          </button>
        </div>
        <div className="mt-2 ml-3">
          <Link className="mr-2" href="/privacy">Privacy Policy</Link> <Link href="/terms">Terms &amp; Conditions</Link>
        </div>
      </div>
    </form>
  );
}