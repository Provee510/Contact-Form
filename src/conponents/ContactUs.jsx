import React, { useState } from 'react';
import ratio from '../assets/icons/icon-radio-selected.svg';
import { IoIosCheckmark } from "react-icons/io";
import Success from './Success';

const ContactUs = () => {
  const [selected, setSelected] = useState(null); 
  const [submitted, setSubmitted] = useState(false);
  const [agree, setAgree] = useState(false); 
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({}); 

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCheckClick = () => {
    setAgree(!agree);
  };

  const validateForm = () => {
    let formErrors = {};

    
    if (!formData.firstName) {
      formErrors.firstName = 'This field is required';
    } else if (formData.firstName.length < 3) {
      formErrors.firstName = 'First Name must be at least 3 characters long';
    }

   
    if (!formData.lastName) {
      formErrors.lastName = 'This field is required';
    } else if (formData.lastName.length < 3) {
      formErrors.lastName = 'Last Name must be at least 3 characters long';
    }

    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      formErrors.email = 'This field is required';
    } else if (!emailRegex.test(formData.email)) {
      formErrors.email = 'Please enter a valid email address';
    }

    
    if (!selected) {
      formErrors.queryType = 'Please select a query type';
    }

   
    if (!formData.message) {
      formErrors.message = 'This field is required';
    }

    
    if (!agree) {
      formErrors.agree = 'To submit this form, please consent to being contacted';
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0; 
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
    if (validateForm()) { 
      setSubmitted(true); 
      setTimeout(() => {
        window.location.reload(); 
      }, 10000);
    }
  };

  return (
    <div className="bg-white min-h-[700px] lg:w-[670px] h-auto rounded-xl p-4 lg:p-8 transition-all duration-300 overflow-hidden lg:overflow-visible">
      
      {submitted && (
        <div className="flex justify-center relative lg:bottom-28">
          <Success />
        </div>
      )}

      <h1 className="text-3xl font-semibold text-gray-700 mb-8 text-center lg:text-left relative lg:left-0 right-[85px]">Contact Us</h1>

      <form onSubmit={handleSubmit}>
        {/* First and Last Name Inputs */}
        <div className="flex flex-col lg:flex-row mb-6 gap-5">
          {/* First Name */}
          <div className={`w-full lg:w-[50%] transition-all duration-300`}>
            <p className="text-gray-600">First Name <span className="text-green-600">*</span></p>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="John"
              className={`border p-3 mt-2 ${errors.firstName ? 'border-red-500' : 'border-gray-300'} hover:border-green-500 rounded-lg w-full`}
            />
            {errors.firstName && <p className="text-red-500 mt-1">{errors.firstName}</p>}
          </div>

          {/* Last Name */}
          <div className={`w-full lg:w-[50%] transition-all duration-300`}>
            <p className="text-gray-600">Last Name <span className="text-green-600">*</span></p>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Appleseed"
              className={`border p-3 mt-2 ${errors.lastName ? 'border-red-500' : 'border-gray-300'} hover:border-green-500 rounded-lg w-full`}
            />
            {errors.lastName && <p className="text-red-500 mt-1">{errors.lastName}</p>}
          </div>
        </div>

        {/* Email Input */}
        <div className={`mb-6 transition-all duration-300`}>
          <p className="text-gray-600">Email Address <span className="text-green-600">*</span></p>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="email@example.com"
            className={`border p-3 mt-2 ${errors.email ? 'border-red-500' : 'border-gray-300'} hover:border-green-500 rounded-lg w-full`}
          />
          {errors.email && <p className="text-red-500 mt-1">{errors.email}</p>}
        </div>

        {/* Query Type */}
        <p className="text-gray-600 mb-[2px]">Query Type</p>
        <div className="flex flex-col lg:flex-row mb-6 gap-5">
          <div
            className={`w-full flex items-center gap-3 cursor-pointer rounded-lg border p-3 hover:border-green-600 ${selected === 'general' ? 'bg-green-100 border-green-700' : 'bg-white border-gray-300'}`}
            onClick={() => setSelected('general')}
          >
            <div className="w-5 h-5 rounded-full border-2 border-gray-300 flex items-center justify-center">
              {selected === 'general' && (
                <img src={ratio} alt="selected" className="w-4 h-4" />
              )}
            </div>
            <p className="text-gray-500">General Enquiry</p>
          </div>

          <div
            className={`w-full flex items-center gap-3 cursor-pointer rounded-lg border p-3 hover:border-green-600 ${selected === 'support' ? 'bg-green-100 border-green-700' : 'bg-white border-gray-300'}`}
            onClick={() => setSelected('support')}
          >
            <div className="w-5 h-5 rounded-full border-2 border-gray-300 flex items-center justify-center">
              {selected === 'support' && (
                <img src={ratio} alt="selected" className="w-4 h-4" />
              )}
            </div>
            <p className="text-gray-500">Support Request</p>
          </div>
        </div>
        {errors.queryType && <p className="text-red-500 mt-1 ">{errors.queryType}</p>}

       
        <div className={`mb-6 transition-all duration-300`}>
          <p className="text-gray-600">Message <span className="text-green-600">*</span></p>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Write your message here..."
            className={`border outline-none p-3 mt-2 ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-lg hover:border-green-500 w-full`}
          />
          {errors.message && <p className="text-red-500 mt-1">{errors.message}</p>}
        </div>

        
        <div className="flex items-center mb-5 relative ">
          <div
            className={`relative w-4 h-4 border shadow-slate-500 flex items-center justify-center cursor-pointer ${agree ? 'bg-green-900' : 'bg-white'}`}
            onClick={handleCheckClick}
          >
            {agree && <IoIosCheckmark className="text-white" />}
          </div>
          <p className="ml-3 text-gray-600">
            I consent to being contacted by the team <span className="text-green-600">*</span>
          </p>
        </div>
        {errors.agree && <p className="text-red-500 mt-1">{errors.agree}</p>}

        {/* Submit Button */}
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="w-full lg:w-[50%] h-[45px] text-white font-semibold rounded-md bg-green-900 hover:bg-green-950 transition-all duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
