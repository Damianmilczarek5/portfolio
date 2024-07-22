"use client"

import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_vgrdr7p', // Replace with your EmailJS service ID
      'template_ipuz6bh', // Replace with your EmailJS template ID
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message
      },
      'zTD8UH0wwaY068whi' // Replace with your EmailJS user ID
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        // Optionally, reset the form or show a success message
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      })
      .catch((error) => {
        console.error('FAILED...', error);
      });
  };

  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl">
        Get in touch
      </motion.h2>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4">
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4">
          {CONTACT.phoneNo}
        </motion.p>
        <a href={`mailto:${CONTACT.email}`} className="my-4">{CONTACT.email}</a>
      </div>
      <form className="text-center" onSubmit={handleSubmit}>
        <div className="my-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="border p-2 w-1/2"
            required
          />
        </div>
        <div className="my-4">
          <input
            type="text"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="border p-2 w-1/2"
            required
          />
        </div>
        <div className="my-4">
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="border p-2 w-1/2"
            required
          ></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
