"use client";
import Link from "next/link"
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const Popup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasSeenPopup = Cookies.get('popupSeen');

    const handleScroll = () => {
      if (!hasSeenPopup && window.scrollY > 0) { 
        setIsVisible(true);
        Cookies.set('popupSeen', 'true', { expires: 365 });
        window.removeEventListener('scroll', handleScroll); // Remove listener after popup is shown
      }
    };

    if (!hasSeenPopup) {
      window.addEventListener('scroll', handleScroll);
    }

    return () => window.removeEventListener('scroll', handleScroll); // Cleanup on unmount
  }, []);

  const closePopup = () => {
    setIsVisible(false);
  };


  return (
    <div className={`popup ${isVisible ? 'show' : ''}`}>
    <button onClick={closePopup}>Close</button>
      <div className="popup-content">
        {/* Your popup content here */}
        <h2>Your One Soul Path is Calling!</h2>
        <p>Our Step By Step Guide To Living Your Highest Potential, has been completed and is ready for download.</p>
        <p className="mt-3">Learn more about the One Soul Path and get your free copy of the new book.</p>

        <Link href="/one-soul-path/#welcome" className="theme-btn btn-style-eight mt-3 mb-3"><span className="btn-title">Download Your Free Copy Now !</span></Link>
       </div>
    </div>
  );
};

export default Popup; 