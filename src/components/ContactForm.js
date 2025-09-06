import React, { useState } from 'react';
import '../styles/ContactForm.css';

const ContactForm = () => {
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formsubmit.co/ajax/admin@viwebsync.com', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      const result = await response.json();
      if (result.success) {
        setStatus('Message sent successfully!');
        form.reset();
      } else {
        setStatus('Error sending message. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('Error sending message. Please check your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input type="text" name="name" placeholder="Full Name" required />
        <input type="email" name="email" placeholder="Email Address" required />
        <input type="tel" name="phone" placeholder="Phone Number (Optional)" />
        <input type="text" name="subject" placeholder="Subject" required />
        <textarea name="message" placeholder="Your Message" rows="6" required></textarea>
        {/* Formsubmit.co special fields */}
        <input type="hidden" name="_next" value="https://www.viwebsync.com/contact-success" />
        <input type="hidden" name="_template" value="box" />
        <input type="hidden" name="_subject" value="New Contact Form Submission" />

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
      {status && <p className="form-status">{status}</p>}
    </div>
  );
};

export default ContactForm;