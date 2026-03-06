import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Header.css'
import Champ from '../pages/img/champion.png'
import EnquiryModal from "./EnquiryModal";

function Header() {

    const [menuOpen, setMenuOpen] = useState(false);
  const [showEnquiry, setShowEnquiry] = useState(false);

  // 🔥 AUTO OPEN WHEN HOME LOADS
  useEffect(() => {
    setShowEnquiry(true);
  }, []);

  // 🔥 PAGE SCROLL AAGUMBOTHU MENU AUTO CLOSE
  useEffect(() => {
    const handleScroll = () => {
      if (menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuOpen]);

  return (


    <>

     {/* ===================== NAV 1 ===================== */}
            <nav className='nav-container'>
              <div className='time-box'>
                <i className="fa-regular fa-clock"></i>
                <p className='time'>9:30 am - 5:30 pm Monday - Friday</p>
              </div>
    
              <div className='contact'>
                <div className='time-box'>
                  <i className="fa-solid fa-phone"></i>
                  <p className='con1'>+91 95669 67669</p>
                </div>
    
                <div className='time-box'>
                  
                  <p className='con1'>|</p>
                </div>            
    
                <div className='time-box'>
                  <i className="fa-solid fa-envelope"></i>
                  <p className='con1'>vinoth@gmail.com</p>
                </div>
              </div>
    
              <div className="social-icon ">
                <a href="#" className="social-color"><i className="fa-brands fa-facebook-f con1"></i></a>
                <a href="#" className="social-color"><i className="fa-brands fa-instagram con1"></i></a>
              </div>
            </nav>
    
            {/* ===================== NAV 2 ===================== */}

    <nav className='contain-box'>
  <div className='title'>
    <img src={Champ} className='logo-img' alt="champion" />
<span className="enquire">
  <Link to="/" className='enquire-modal'>Enquire</Link>
</span>
  </div>

  {/* ☰ Menu Icon */}
  <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
    <i className="fa-solid fa-bars"></i>
  </div>

  {/* MENU */}
  <div className={`title-list ${menuOpen ? "active" : ""}`}>
    <ul className="nav-menu">

      <li><a href="#" className="li-color">Home</a></li>
      <li><a href="#" className="li-color">About Us</a></li>

      <li className="dropdown">
        <a href="#" className="li-color">Classes ▾</a>
        <ul className="dropdown-menu">
          <li><a href="#" className="li-color">Play Group</a></li>
          <li><a href="#" className="li-color">Nursery</a></li>
          <li><a href="#" className="li-color">Junior KG</a></li>
          <li><a href="#" className="li-color">Senior KG</a></li>
        </ul>
      </li>

      <li><a href="#" className="li-color">Facilities</a></li>
      <li><a href="#" className="li-color">Admissions</a></li>

      <li className="dropdown">
        <a href="#" className="li-color">Gallery ▾</a>
        <ul className="dropdown-menu">
          <li><a href="#" className="li-color">Photos</a></li>
          <li><a href="#" className="li-color">Videos</a></li>
        </ul>
      </li>

      <li><a href="#" className="li-color">Curriculum</a></li>

      <li className="dropdown">
        <a href="#" className="li-color">Login ▾</a>
        <ul className="dropdown-menu">
          <li><Link to="/admin-login" className="li-color">Admin</Link></li>
          <li><Link to="/staff-login" className="li-color">Staff</Link></li>
          <li><Link to="/student-login" className="li-color">Student</Link></li>
        </ul>
      </li>

    </ul>
  </div>
</nav>


        {showEnquiry && (
        <EnquiryModal onClose={() => setShowEnquiry(false)} />
      )}
        </>
  )
}

export default Header