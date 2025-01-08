// components/LpBooking.js
import React, { useState, useEffect } from 'react';

const LpBooking = ({ isOpen, onClose, children }) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = () => {
    setShowModal(false);
    onClose(); 
  };

  if (!showModal) {
    return null; 
  }

  return (
    <div className="modal-overlayLP">
      <div className="modalLP">
        <div className="modal-headerLP">
        
          <button onClick={handleClose}>Close</button>
        </div>
        <h3 className='modalHeadertitleLP'>Please complete the form below.</h3>
        <div className="modal-body">
        
        {children}</div> 
      </div>
    </div>
  );
};

export default LpBooking;