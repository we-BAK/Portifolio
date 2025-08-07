import React from 'react';
import '../App.css'; // Import the consolidated CSS file

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>

        <div className="contact-content">
          <p className="contact-intro">
            I'm always open to new opportunities, collaborations, and interesting discussions. Whether you have a question, a project idea, or just want to say hi, feel free to reach out!
          </p>

          <div className="contact-details-grid">
            <div className="detail-item">
              <i className="fas fa-map-marker-alt detail-icon"></i>
              <h3>Location</h3>
              <p>Hawassa, Ethiopia</p>
            </div>
            <div className="detail-item">
              <i className="fas fa-envelope detail-icon"></i>
              <h3>Email</h3>
              <p><a href="mailto:hailemichaelkidist@gmail.com">hailemichaelkidist@gmail.com</a></p> 
            </div>
            <div className="detail-item">
              <i className="fas fa-phone-alt detail-icon"></i>
              <h3>Phone</h3>
              <p><a href="tel:+251984180404">+251 984180404</a></p> 
            </div>
            <div className="detail-item">
              <i className="fab fa-linkedin detail-icon"></i>
              <h3>LinkedIn</h3>
              <p><a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">Your LinkedIn Profile</a></p> {/* Replace with your LinkedIn */}
            </div>
          </div>

          <div className="contact-form-container">
            <h3>Send Me a Message</h3>
            <form className="contact-form" action="YOUR_FORM_SUBMISSION_ENDPOINT" method="POST">
              {/* Replace YOUR_FORM_SUBMISSION_ENDPOINT with a service like Formspree, Netlify Forms, or your own backend */}
              
              {/* New: Group Name and Email for horizontal layout */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="Your Email" required />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" placeholder="Subject of your message" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="6" placeholder="Your message..." required></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message <i className="fas fa-paper-plane"></i></button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;