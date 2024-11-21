import React from 'react';
import Script from 'next/script';
import aweberForm from './aweberForm'; // Assuming aweberForm.js is in the same directory

const BookingForm = () => {
    const aweberFormHtml = `
    `;
  
    return (
      <div dangerouslySetInnerHTML={{ __html: aweberFormHtml }} />
    );
  }; 

export default BookingForm;