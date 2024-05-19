import React, { useState } from "react";
import "./styles.css";

const User = ({ closeModal }) => {
  // Function to validate email
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  // Function to validate phone number
  const validatePhone = (phone) => {
    return phone.length === 10 && !isNaN(phone);
  };

  // Function to validate date of birth
  const validateDOB = (dob) => {
    const today = new Date();
    const birthDate = new Date(dob);
    return birthDate < today;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const email = formData.get("email");
    const phone = formData.get("phone");
    const dob = formData.get("dob");

    if (!validateEmail(email)) {
      alert("Invalid email. Please check your email address.");
      return;
    }

    if (!validatePhone(phone)) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return;
    }

    if (!validateDOB(dob)) {
      alert("Invalid date of birth. Date of birth cannot be in the future.");
      return;
    }

    closeModal(true);
  };

  const handleOutsideClick = (event) => {
    if (event.target.className === "modal") {
      closeModal();
    }
  };

  return (
    <div className="modal" onClick={handleOutsideClick}>
      <div className="modal-content">
        <h2>Fill Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              required
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label htmlFor="dob">Date of Birth:</label>
            <input
              type="date"
              id="dob"
              name="dob"
              required
              className="input-field"
            />
          </div>
          <div className="form-group">
            <button type="submit" className="submit-button">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="App">
      <h1>User Details Modal</h1>
      <button onClick={openModal} className="submit-button">
        Open Form
      </button>
      {isOpen && <User closeModal={closeModal} />}
    </div>
  );
};

export default App;
