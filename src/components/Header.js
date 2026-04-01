import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Header.css'
import NavLogo from '../pages/img/champion.png'

import EnquiryModal from "./EnquiryModal";

function Header({ showEnquiry, onOpenEnquiry, onCloseEnquiry }) {

  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false); // Close mobile menu
  };

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
            <p className='con1'>+91 8870070243</p>
          </div>

          <div className='time-box'>
            <p className='con1'>|</p>
          </div>

          <div className='time-box'>
            <i className="fa-solid fa-envelope"></i>
            <p className='con1'>cidmdu@zohomail.in</p>
          </div>
        </div>

        <div className="social-icon ">
          <button className="social-color" onClick={() => window.open('https://www.facebook.com/share/1AbgKg4YKs/', '_blank')}><i className="fa-brands fa-facebook-f con1"></i></button>
          <button className="social-color" onClick={() => window.open('https://www.instagram.com/cis_mdu?igsh=MTVnMXl6anlneGtzcQ==', '_blank')}><i className="fa-brands fa-instagram con1"></i></button>
          <button className="social-color" onClick={() => window.open('https://www.youtube.com/', '_blank')}><i className="fa-brands fa-youtube con1"></i></button>
        </div>
      </nav>

      {/* ===================== NAV 2 ===================== */}

      <nav className='contain-box'>
        <div className='title'>
          
          <img src={NavLogo} className='logo-img' alt="champion" />

          <span className="enquire">
            <button className='enquire-modal' onClick={onOpenEnquiry}>Enquire</button>
          </span>
        </div>

        {/* ☰ Menu Icon */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          <i className="fa-solid fa-bars"></i>
        </div>

        {/* MENU */}
        <div className={`title-list ${menuOpen ? "active" : ""}`}>
          <ul className="nav-menu">

            <li><button className="li-color" onClick={() => scrollToSection('home')}>Home</button></li>
            <li><button className="li-color" onClick={() => scrollToSection('about')}>About Us</button></li>

            <li className="dropdown">
              <button className="li-color" onClick={() => scrollToSection('classes')}>Classes ▾</button>
              <ul className="dropdown-menu">
                <li><button className="li-color" onClick={(e) => { e.stopPropagation(); scrollToSection('classes'); }}>Play Group</button></li>
                <li><button className="li-color" onClick={(e) => { e.stopPropagation(); scrollToSection('classes'); }}>Nursery</button></li>
                <li><button className="li-color" onClick={(e) => { e.stopPropagation(); scrollToSection('classes'); }}>Junior KG</button></li>
                <li><button className="li-color" onClick={(e) => { e.stopPropagation(); scrollToSection('classes'); }}>Senior KG</button></li>
              </ul>
            </li>

            <li><button className="li-color" onClick={() => scrollToSection('services')}>Facilities</button></li>
            <li><button className="li-color">Admissions</button></li>

            <li className="dropdown">
              <button className="li-color" onClick={() => scrollToSection('gallery')}>Gallery ▾</button>
              <ul className="dropdown-menu">
                <li><button className="li-color">Photos</button></li>
                <li><button className="li-color">Videos</button></li>
              </ul>
            </li>

            <li><button className="li-color" onClick={() => scrollToSection('curriculum')}>Curriculum</button></li>
            <li><Link to="/register" className="li-color">Registers</Link></li>
            <li className="dropdown">
              <button className="li-color">Login ▾</button>
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
        <EnquiryModal onClose={onCloseEnquiry} />
      )}
    </>
  )
}

export default Header;