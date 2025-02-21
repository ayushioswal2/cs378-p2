import React from 'react';
import '../App.css';


const PopUp = ({ isOpen, onClose, orderSummary }) => {
  if (!isOpen) return null; // Don't render the modal if it's not open

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h4>Order Summary</h4>
        <pre>{orderSummary || "No items in cart"}</pre>
        <button className="btn btn-secondary" onClick={onClose}>
          OK
        </button>
      </div>
    </div>
  );
};

export default PopUp;