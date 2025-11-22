import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  const [formData, setFormData] = useState({
    name: '',
    propertyAddress: '',
    phoneNumber: ''
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.propertyAddress.trim()) {
      newErrors.propertyAddress = 'Property address is required';
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (!/^[\d\s\-\(\)]+$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Please enter a valid phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Store form data in localStorage to pass to next page
      localStorage.setItem('contactFormData', JSON.stringify(formData));
      // Navigate to questions page
      navigate('/questions');
    }
  };

  return (
    <div className="landing-page">
      <div className="landing-container">
        <div className="hero-section">
          <h1 className="hero-title">We Buy Houses</h1>
          <p className="hero-subtitle">Sell your house fast for cash. No repairs needed. No waiting.</p>
        </div>

        <div className="form-section">
          <h2 className="form-title">Get Your Cash Offer Today</h2>
          <p className="form-description">Fill out the form below and we'll contact you within 24 hours.</p>
          
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? 'input-error' : ''}
                placeholder="Enter your full name"
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="propertyAddress">Property Address *</label>
              <input
                type="text"
                id="propertyAddress"
                name="propertyAddress"
                value={formData.propertyAddress}
                onChange={handleChange}
                className={errors.propertyAddress ? 'input-error' : ''}
                placeholder="Enter your property address"
              />
              {errors.propertyAddress && <span className="error-message">{errors.propertyAddress}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number *</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className={errors.phoneNumber ? 'input-error' : ''}
                placeholder="(555) 123-4567"
              />
              {errors.phoneNumber && <span className="error-message">{errors.phoneNumber}</span>}
            </div>

            <button type="submit" className="submit-button">
              Get My Cash Offer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;

