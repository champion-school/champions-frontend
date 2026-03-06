import React, { useEffect, useRef, useState } from 'react'
import "./Home.css";
import child from './img/child.png'
import play from './img/play-ground.jpeg'
import nursery from './img/nursury.jpg'
import junior from './img/junior.jpg'
import senior from './img/senior.jpg'
import banner from './img/banner-1.jpg'
import banner4 from './img/banner-4.jpg'
import transport from './img/transport.png'
import learn from './img/learn.png'
import banner2 from './img/banner-3.jpg'
import banner1 from './img/banner-2.jpg'
import music from './img/music.png'
import teacher from './img/teacher.png'
import gallary1 from './img/gal-img1.jpeg'
import gallary2 from './img/gal-img2.jpeg'
import gallary3 from './img/gal-img3.jpeg'
import gallary4 from './img/gal-img4.jpeg'
import Footer from '../components/Footer';
import Header from '../components/Header';

function Home() {

  const [current, setCurrent] = useState(0);

  const images = [banner4, banner, banner2, banner1];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, []);


  return (
    <>
      <div className='body'>

       
        <Header />

        {/* ===================== BANNER ===================== */}
       <div className="home">

  {/* Slider Images */}
  {images.map((img, index) => (
    <img
      key={index}
      src={img}
      alt="banner"
      className={`home-image ${index === current ? "active" : ""}`}
    />
  ))}

  {/* ===== TEXT OVERLAY ===== */}
  <div className="home-overlay">
    <p className="home-sub">Play • Learn • Grow • Fly</p>

    <h1 className="home-title">
      Flying<br />
      <span>High on the wings of</span> <br />
      knowledge
    </h1>

    <button className="home-btn">Enquire</button>
  </div>

</div>


        {/* ===================== about start ========================== */}
          <section className="about-container">
      <div className="about-left">
        <p className="about-sub">About Champions</p>

        <h2 className="about-title">
          Special Care For Your <br /> Children
        </h2>

        <p className="about-text">
          Champions International is an educational establishment situated in
          Perumbakkam, Chennai. It serves as a play school, day care, and
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

        <button className="about-btn">Learn More</button>
      </div>

      <div className="about-right">
        <div className="img-shape">
          <img src={child} alt="child" />
        </div>

      </div>
    </section>

            {/* ========================= classes =========================== */}

        <div className='class-contain'>
            <div>
            <span className='sub-title'>On Going Classes</span>
            </div>
            <div>
            <h2 className='sec-title'>Take The Classes & Start </h2> <h2 className='sec-title'><span className='sec'>Learning From Today</span> </h2>
            </div>


            <div className='img-container'>
            <div className='img-contain'>
                <div className='card sub-card card-col1'>
                <div className='img-container-size'>
                <img src={play} alt="play" className="img-size1" />
                </div>
                <div>
                    <p className='head'>Play-Ground</p>
                </div>
                <div className='info'>
                    <div className='info1'>
                        <div>
                        <p> Years</p>
                        </div>
                        <div>
                        <span className='list'>1.5 - 2.5</span>
                        </div>
                    </div>
                    <div className='info1'>
                        <div>
                        <p>Time</p>
                        </div>
                        <div>
                        <span className='list'>9:30 - 11:30 am</span>
                        </div>
                    </div>
                    <div className='info1'>
                        <div>
                        <p> Kids</p>
                        </div>
                        <div>
                        <span className='list'>1 : 15</span>
                        </div>
                    </div>
                </div>
                <div className='read'>
                    <span>Read More</span>
                </div>
                </div>
            </div>

            <div className='img-contain'>
                <div className='card sub-card card-col2'>
                <div className='img-container-size'>
                <img src={nursery} alt="nursery" className="img-size1" />
                </div>
                <div>
                    <p className='head'>Nursery</p>
                </div>
                <div className='info'>
                    <div className='info1'>
                        <div>
                        <p>Years</p>
                        </div>
                        <div>
                        <span className='list'>2.5 - 3.5 </span>
                        </div>
                    </div>
                    <div className='info1'>
                        <div>
                        <p>Time</p>
                        </div>
                        <div>
                        <span className='list'>9:00 - 11:30 am</span>
                        </div>
                    </div>
                    <div className='info1'>
                        <div>
                        <p> Kids</p>
                        </div>
                        <div>
                        <span className='list'>1 : 15 </span>
                        </div>
                    </div>
                </div>
                <div className='read'>
                    <span>Read More</span>
                </div>
                </div>
            </div>

            <div className='img-contain'>
                <div className='card sub-card card-col3'>
                <div className='img-container-size'>
                <img src={junior} alt="junior" className="img-size1" />
                </div>
                <div>
                    <p className='head'>Junior</p>
                </div>
                <div className='info'>
                    <div className='info1'>
                        <div>
                        <p>Years</p>
                        </div>
                        <div>
                        <span className='list'>3.5 - 4.5 </span>
                        </div>
                    </div>
                    <div className='info1'>
                        <div>
                        <p>Time</p>
                        </div>
                        <div>
                        <span className='list'>9:00 - 1:00 am</span>
                        </div>
                    </div>
                    <div className='info1'>
                        <div>
                        <p> Kids</p>
                        </div>
                        <div>
                        <span className='list'>1 : 15 </span>
                        </div>
                    </div>
                </div>
                <div className='read'>
                    <span>Read More</span>
                </div>
                </div>
                
            </div>

            <div className='img-contain'>
                <div className='card sub-card card-col4'>
                <div className='img-container-size'>
                <img src={senior} alt="senior" className="img-size1" />
                </div>
                <div>
                    <p className='head'>Senior</p>
                </div>
                <div className='info'>
                    <div className='info1'>
                        <div>
                        <p>Years</p>
                        </div>
                        <div>
                        <span className='list'>4.5 - 5.5</span>
                        </div>
                    </div>
                    <div className='info1'>
                        <div>
                        <p>Time</p>
                        </div>
                        <div>
                        <span className='list'>9:00 - 1:00 am</span>
                        </div>
                    </div>
                    <div className='info1'>
                        <div>
                        <p> Kids</p>
                        </div>
                        <div>
                        <span className='list'>1 : 15</span>
                        </div>
                    </div>
                </div>
                <div className='read'>
                    <span>Read More</span>
                </div>
                </div>
            </div>
        </div>

      </div>
{/* ======================== service ====================== */}
      <div className='ser-contain'>
        <div></div>
            <div>
            <span className='service-title'>Service We Provide</span>
            </div>
            <div>
            <h2 className='ser-title'><span className='sec'>Providing Good Qualities </span></h2> 
            <h2 className='ser-title'><span className='sec'>For Your Loving Kids</span> </h2>
            </div>
            <div className='service-container'>
            <div className='service-contain'>
                <div className='card ser-card'>
                <div className='service-container-size'>
                <a href='#'><img src={transport} alt="play" className="img-size2" /></a>
                </div>
                <div>
                    <p className='service-list'>Transport</p>
                </div>
               
                </div>
            </div>

            <div className='service-contain1'>
                <div className='card ser-card'>
                <div className='service-container-size'>
                <a href='#'><img src={learn} alt="learn" className="img-size2" /></a>
                </div>
                <div>
                    <p className='service-list'>Learn & Play</p>
                </div>
               
                </div>
            </div>

            <div className='service-contain2'>
                <div className='card ser-card'>
                <div className='service-container-size'>
                <a href='#'><img src={music} alt="music" className="img-size2" /></a>
                </div>
                <div>
                    <p className='service-list'>Music Training</p>
                </div>
               
                </div>
            </div>

           <div className='service-contain3'>
                <div className='card ser-card'>
                <div className='service-container-size'>
                <a href='#'><img src={teacher} alt="teacher" className="img-size2" /></a>
                </div>
                <div>
                    <p className='service-list'>Best Teacher</p>
                </div>
               
                </div>
            </div>
        </div>
        <div className='learn-container'>
        <a href='#' className='learn'><span className='learn-More'>Learn More</span></a>
        </div>
      </div>

      {/* ===================== our flyer ========================== */}

      {/* ===================== our gallery ======================== */}

      <div className='gal-container'>
        <div className='our-gal'>
          <p className='txt-gal'>Our Gallery</p>
        </div>
        <div className='gal-contain'>
        <div className='card'>
          <div className='img-gal'>
            <img src={gallary1} alt='gal1' className='img-siz' />
          </div>
        </div>

        <div className='card'>
          <div className='img-gal'>
            <img src={gallary2} alt='gal1' className='img-siz' />
          </div>
        </div>

         <div className='card'>
          <div className='img-gal'>
            <img src={gallary3} alt='gal1' className='img-siz' />
          </div>
        </div>

         <div className='card'>
          <div className='img-gal'>
            <img src={gallary4} alt='gal1' className='img-siz' />
          </div>
        </div>

      </div>


        <div className='view-container'>
        <a href='#' className='view'><span className='view-more'>View More</span></a>
        </div>
      </div>

      {/* ======================== parent details ========================= */}

      <div className="test-container">
      {/* LEFT CONTENT */}
      <div className="test-left">
        <span className="test-sub">Parent Testimonial</span>
        <h2 className="test-title">
          Parents Review <br /> <span>Of Us</span>
        </h2>
        <p className="test-desc">
          Parents have given their reviews based on their child activities
          and satisfied service towards us.
        </p>
      </div>

      {/* RIGHT CARDS */}
      <div className="test-right">
        <div className="test-card">
          <div className="avatar">
            <span className="quote">“</span>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="parent"
            />
          </div>

          <p className="review">
            It’s really very good school. Teachers are very well trained to
            create a comfort zone to kids. There is a very good progress in
            my kid after joining this school.
          </p>

          <h4>Rahmathulla Sheik</h4>
          <span className="role">Parent</span>
        </div>

        <div className="test-card">
          <div className="avatar">
            <span className="quote">“</span>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="parent"
            />
          </div>

          <p className="review">
            It’s a very good school for the kids who want to have fun in
            learning. All the teachers and staffs are kind and focus on
            every kid individually.
          </p>

          <h4>Amrutha Vikky</h4>
          <span className="role">Parent</span>
        </div>
      </div>
    </div>

    <Footer/>

      </div>
    </>
  )
}

export default Home;
