import React, { useState } from 'react';
import PizzaLeft from "../assets/pizzaLeft.jpg";
import "../styles/Contact.css";

function Contact() {


    const [formData, setFormData] = useState({ fullname: '', email: '', message:'' });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch('http://localhost:3001/contacts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        if (response.status === 201) {
          console.log('Post created successfully');
          // Optionally, you can reset the form here
          setFormData({ fullname: '', email: '' , message:'' });
        } else {
          console.error('Failed to create post');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div>
      <div className="rightSide">
        <h1> Feedback</h1>
          
          <form onSubmit={handleSubmit}>
           
          <label htmlFor="fullname">Full Name</label>
          <input  type="text"  id="fullname" name="fullname" value={formData.fullname} onChange={handleInputChange} />
          <label htmlFor="email">Email</label>
          <input   type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            id="messsage"
            value={formData.message}
            onChange={handleInputChange}
            required
          ></textarea>
       
          <button type="submit"> Send Message</button>
        </form>
      </div>
    </div>
  );
}


export default Contact;