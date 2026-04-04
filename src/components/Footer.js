import "./Footer.css";
import { useLocation, useNavigate } from "react-router-dom";
import qr from '../pages/img/qr.jpeg';

function Footer({ onOpenEnquiry }) {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    if (location.pathname !== "/") {
      navigate(`/#${sectionId}`);
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  return (
    <footer className="footer">
      <div className="footer-overlay">
        <div className="footer-container">

          {/* ABOUT */}
          <div className="footer-box">
            <h3>About us</h3>
            <p>
              Champions International is an educational establishment
              situated in Othakadai, Madurai. It serves as a play school,
              day care, and activity center, offering a range of services
              for children.
            </p>

            <div className="social-icons">
              <button onClick={() => window.open('https://www.facebook.com/share/1AbgKg4YKs/', '_blank')} aria-label="Facebook"><i className="fab fa-facebook-f contact-icon"></i></button>
              <button onClick={() => window.open('https://www.instagram.com/cis_mdu?igsh=MTVnMXl6anlneGtzcQ==', '_blank')} aria-label="Instagram"><i className="fab fa-instagram contact-icon"></i></button>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="footer-box">
            <h3>Quick Links</h3>
            <ul>
              <li className="contact-list"><button onClick={() => scrollToSection('home')} className="link-btn">Home</button></li>
              
              <li className="contact-list"><button onClick={() => scrollToSection('about')} className="link-btn">About us</button></li>
              <li className="contact-list"><button onClick={() => scrollToSection('services')} className="link-btn">Facilities</button></li>
              <li className="contact-list"><button onClick={() => scrollToSection('classes')} className="link-btn">Admissions</button></li>
              <li className="contact-list"><button onClick={() => scrollToSection('gallery')} className="link-btn">Gallery</button></li>
              <li className="contact-list"><button onClick={() => scrollToSection('curriculum')} className="link-btn">Curriculum</button></li>
              <li className="contact-list"><button onClick={() => scrollToSection('testimonials')} className="link-btn">Reviews</button></li>
              <li className="contact-list"><button onClick={onOpenEnquiry} className="link-btn">Contact us</button></li>
            </ul>
          </div>

          {/* CLASSES */}
          <div className="footer-box">
            <h3>Classes</h3>
            <ul>
              <li className="contact-list">Day Care</li>
              <li className="contact-list">Play Group</li>
              <li className="contact-list">Junior KG</li>
              <li className="contact-list">Senior KG</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="footer-box">
            <h3>Contact Us</h3>

            <div className="contact-item">
              <i className="fas fa-phone contact-icon"></i>
              <span>+91 8870070243</span>
            </div>


            <div className="contact-item">
              <i className="fas fa-envelope contact-icon"></i>
              <span>cidmdu@zohomail.in</span>
            </div>

            <div className="contact-item contact-icon" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                <i className="fas fa-map-marker-alt"></i>
                <span>Scan to locate us</span>
              </div>
              <img
                src={qr}
                alt="QR code to locate Champions International School"
                style={{ width: '120px', height: '120px', borderRadius: '8px', border: '2px solid #fff' }}
              />
            </div>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="footer-bottom">
          <p>
            Copyright © 2026 Champions. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
