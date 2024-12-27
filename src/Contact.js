import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Combine the message with contact details
    const formData = new FormData(form.current);
    const email = formData.get('from_email');
    const phone = formData.get('phone');
    const originalMessage = formData.get('message');
    
    // Update the message field with contact details
    formData.set('message', 
      `Email: ${email}\nPhone: ${phone}\n\nMessage:\n${originalMessage}`
    );
    
    // Convert FormData back to a format EmailJS can use
    const formElement = form.current;
    formElement.message.value = formData.get('message');

    // Replace these with your actual EmailJS service details
    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )
    .then((result) => {
      setSubmitStatus({ type: 'success', message: 'Message sent successfully!' });
      form.current.reset();
    })
    .catch((error) => {
      setSubmitStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <div className="contact-form-container">
      <h1 className="blue-text glow-text">Contact Me</h1>
      <form ref={form} onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <input
            type="text"
            name="from_name"
            placeholder="Full Name"
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="from_email"
            placeholder="Email Address"
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="form-input form-textarea"
          />
        </div>
        <button 
          type="submit" 
          className="btn-b btn-long btn-light"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Submit'}
        </button>
        {submitStatus && (
          <div className={`submit-status ${submitStatus.type}`}>
            {submitStatus.message}
          </div>
        )}
      </form>
    </div>
  );
}

export default Contact;
