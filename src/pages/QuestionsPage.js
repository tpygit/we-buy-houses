import React from 'react';
import { useLocation } from 'react-router-dom';
import './QuestionsPage.css';

function QuestionsPage() {
  const location = useLocation();
  
  // Retrieve form data from localStorage
  const storedData = localStorage.getItem('contactFormData');
  const formData = storedData ? JSON.parse(storedData) : null;

  return (
    <div className="questions-page">
      <div className="questions-container">
        <h1>Additional Questions</h1>
        <p>Thank you for your submission! We'll be adding more questions here soon.</p>
        {formData && (
          <div className="submitted-data">
            <h2>Your Information:</h2>
            <p><strong>Name:</strong> {formData.name}</p>
            <p><strong>Property Address:</strong> {formData.propertyAddress}</p>
            <p><strong>Phone Number:</strong> {formData.phoneNumber}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default QuestionsPage;

