import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Signup.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await fetch("http://localhost:5000/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setSuccessMessage("Signup successful!");
        setFormData({ name: "", email: "", password: "" }); // Reset form
      } else {
        setErrorMessage(data.message || "Signup failed. Please try again.");
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="container">
      <div className="icon">
        <img src="./logo.png" alt="Icon" />
      </div>
      <h2>Create a free account</h2>
      <p className="description">Provide your name, email, and choose a password.</p>
      {successMessage && <p className="alert alert-success">{successMessage}</p>}
      {errorMessage && <p className="alert alert-danger">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name*</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email*</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password*</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Choose a password"
            required
          />
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
