import React from 'react';
import '../components/Footer.css'

const Footer = () => {
  return (
    <footer className="text-white" style={{ backgroundColor: '#06010C' }}>
      <div className="container">
        <div className="row align-items-start">
          <div className="col-md-3" id="div1">
            <h1 className='h1footer'>QUICKRENTZ</h1>
          </div>
          <div className="col-md-3" id="div2">
            <h2 style={{ marginBottom: '20px' }}>Explore</h2>
            <p>About Us</p>
            <p>My Account</p>
            <p>How it works</p>
            <p>Pricing Packages</p>
          </div>
          <div className="col-md-3" id="div3">
            <h2 style={{ marginBottom: '20px' }}>Contact</h2>
            <span className="contact-item">
              <i className="fa-solid fa-location-dot" style={{ color: '#806393' }}></i> Lorem ipsum dolor sit amet consectetur
            </span>
            <span className="contact-item">
              <i className="fa-solid fa-clock" style={{ color: '#806393' }}></i> Mon-Sat 8:00am to 11:00pm
            </span>
            <span className="contact-item">
              <i className="fa-solid fa-envelope" style={{ color: '#806393' }}></i> quickrentz.main@gmail.com
            </span>
            <span className="contact-item">
              <i className="fa-solid fa-phone" style={{ color: '#806393' }}></i> +63 9693568001 / 939-54-72
            </span>
          </div>
          <div className="col-md-3" id="div4">
            <h2 style={{ marginBottom: '20px' }}>Newsletter</h2>
            <input type="text" placeholder="Email Address" style={{ borderRadius: '10px', textAlign: 'center' }} />
          </div>
          <div className="col-md-12" id="div5">
            <hr />
            <div className="social-icon" style={{ backgroundColor: '#06010C' }}>
              <i className="fa-brands fa-facebook"></i>
            </div>
            <div className="social-icon" style={{ backgroundColor: '#06010C' }}>
              <i className="fa-brands fa-twitter"></i>
            </div>
            <div className="social-icon" style={{ backgroundColor: '#06010C' }}>
              <i className="fa-brands fa-instagram"></i>
            </div>
            <p style={{ marginTop: '20px' }}>&copy; 2023 QuickRentz. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
