import "./Footer.css";

function Footer() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
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
              <button><i className="fab fa-facebook-f contact-icon"></i></button>
              <button><i className="fab fa-instagram contact-icon"></i></button>
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
              <li className="contact-list"><button onClick={() => window.dispatchEvent(new Event('openEnquiry'))} className="link-btn">Contact us</button></li>
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
              <span>+91 95669 67669</span>
            </div>


            <div className="contact-item">
              <i className="fas fa-envelope contact-icon"></i>
              <span>vinoth@gmail.com</span>
            </div>

            <div className="contact-item contact-icon">
              <i className="fas fa-map-marker-alt"></i>
              <span>
                The Champions International school,
                Othakadai,
                Madurai - 625007
              </span>
            </div>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="footer-bottom">
          <p>
            Copyright © 2026 Champions. All Rights Reserved.
            Developed by Harish.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
