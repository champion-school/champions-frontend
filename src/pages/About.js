import React, { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import child from './img/child.png'
import './Home.css'

function About() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <>
      <Header />
      
      <section className="about-container" style={{ paddingTop: '100px' }}>
        <div className="about-left">
          <p className="about-sub">About Champions</p>

          <h2 className="about-title">
            Special Care For Your <br /> Children
          </h2>

          <p className="about-text">
            Champions International is an educational establishment situated in
            Othakadai, Madurai. It serves as a play school, day care, and
            activity center, offering a range of services for children.
          </p>

          <p className="about-text">
            The facility boasts well-appointed classrooms, a dedicated wall
            climbing area, a dance floor, and an expansive activity area.
          </p>

          <p className="about-text">
            At Champions, we believe that every child deserves to embark on their
            educational journey by acquiring foundational knowledge through play.
            Our goal is to nurture and guide each child towards becoming shining
            STARS.
          </p>

          <p className="about-text">
            Our dedicated team of experienced educators is committed to creating
            a nurturing and stimulating environment where children can thrive.
            We focus on developing each child's cognitive, social, emotional, and
            physical skills through carefully designed activities and programs.
          </p>

          <p className="about-text">
            We believe in open communication with parents and regularly share
            updates about your child's progress and development. Your child's
            safety, happiness, and growth are our top priorities.
          </p>
        </div>

        <div className="about-right">
          <div className="img-shape">
            <img src={child} alt="child" />
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default About
