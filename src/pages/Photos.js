import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import "../styles/photos.css";

function Photos() {
  const [showEnquiry, setShowEnquiry] = React.useState(false);
  
  const openEnquiry = () => setShowEnquiry(true);
  const closeEnquiry = () => setShowEnquiry(false);

  // Load gallery images from localStorage or use defaults
  const [galleryImages, setGalleryImages] = React.useState([]);

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    const saved = localStorage.getItem('galleryImages');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setGalleryImages(parsed);
          return;
        }
      } catch (err) {
        console.error('Error loading gallery images:', err);
      }
    }
    
    // Default images if none saved
    const defaultImages = [
      require('./img/gal-img1.jpeg'),
      require('./img/gal-img2.jpeg'),
      require('./img/gal-img3.jpeg'),
      require('./img/gal-img4.jpeg'),
      require('./img/gal-img5.jpeg'),
      require('./img/gal-img6.jpeg'),
      require('./img/gal-img7.jpeg'),
      require('./img/gal-img8.jpeg'),
      require('./img/gal-img9.jpeg'),
      require('./img/gal-img10.jpeg'),
      require('./img/gal-img11.jpeg')
    ];
    setGalleryImages(defaultImages);
  }, []);

  return (
    <div className="photos-page">
      <Header showEnquiry={showEnquiry} onOpenEnquiry={openEnquiry} onCloseEnquiry={closeEnquiry} />
      
      <div className="photos-container">
        <div className="photos-header">
          <h1>Our Gallery</h1>
          <p>Explore moments from our school</p>
        </div>

        <div className="photos-grid">
          {galleryImages.map((img, index) => (
            <div key={index} className="photo-card">
              <img src={img} alt={`gallery-${index}`} className="photo-image" />
            </div>
          ))}
        </div>
      </div>

      <Footer onOpenEnquiry={openEnquiry} />
    </div>
  );
}

export default Photos;
