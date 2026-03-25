import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import "../styles/EnquiryModal.css";
import api from "../api/api";

const EnquiryModal = ({ onClose }) => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    enquiry: ""
  });

  // 🔥 Page load aagum bodhu auto open
  useEffect(() => {
    setShow(true);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!formData.name || !formData.mobile || !formData.email || !formData.enquiry) {
    toast.error("Please fill all fields");
    return;
  }

  try {
    // 🔥 SEND DATA TO BACKEND
    await api.post("/enquiry", formData);

    toast.success("Enquiry submitted successfully! we will contact you soon.");
    setShow(false);

    if (onClose) onClose();
  } catch (error) {
    console.error(error);
    toast.error("Failed to submit enquiry");
  }
};

  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <div className="modal-header">
          <h2>Enquiry Form</h2>
          <button className="close-btn" onClick={() => setShow(false)}>
            ✕
          </button>
        </div>

        <form className="modal-form" onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="name"
            placeholder="Name" 
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input 
            type="text" 
            name="mobile"
            placeholder="Mobile Number" 
            value={formData.mobile}
            onChange={handleChange}
            required
          />
          <input 
            type="email" 
            name="email"
            placeholder="Email" 
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea 
            name="enquiry"
            placeholder="Enquire For" 
            rows="4"
            value={formData.enquiry}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnquiryModal;
