import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import galImg1 from '../img/gal-img1.jpeg';
import galImg2 from '../img/gal-img2.jpeg';
import galImg3 from '../img/gal-img3.jpeg';
import galImg4 from '../img/gal-img4.jpeg';
import galImg5 from '../img/gal-img5.jpeg';
import galImg6 from '../img/gal-img6.jpeg';
import galImg7 from '../img/gal-img7.jpeg';
import galImg8 from '../img/gal-img8.jpeg';
import galImg9 from '../img/gal-img9.jpeg';
import galImg10 from '../img/gal-img10.jpeg';
import galImg11 from '../img/gal-img11.jpeg';
import '../../styles/management.css';

const DEFAULT_IMAGES = [
  galImg1,
  galImg2,
  galImg3,
  galImg4,
  galImg5,
  galImg6,
  galImg7,
  galImg8,
  galImg9,
  galImg10,
  galImg11,
];

export default function GalleryManagement() {
  const nav = useNavigate();
  const [images, setImages] = useState(['', '', '', '', '', '', '', '', '', '', '']);

  useEffect(() => {
    const saved = localStorage.getItem('galleryImages');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setImages(parsed);
          return;
        }
      } catch (err) {
        console.error(err);
      }
    }
    setImages(DEFAULT_IMAGES);
  }, []);

  const saveImages = () => {
    localStorage.setItem('galleryImages', JSON.stringify(images));
    alert('Gallery updated successfully');
  };

  const handleFileChange = (index, file) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const copied = [...images];
      copied[index] = e.target.result;
      setImages(copied);
    };
    reader.readAsDataURL(file);
  };

  const handleUrlChange = (index, value) => {
    // Convert Google Drive share links to direct links
    if (value.includes('drive.google.com/file/d/') && value.includes('/view')) {
      const match = value.match(/\/file\/d\/([a-zA-Z0-9-_]+)/);
      if (match) {
        value = `https://drive.google.com/uc?export=view&id=${match[1]}`;
      }
    }
    
    const copied = [...images];
    copied[index] = value;
    setImages(copied);
  };

  return (
    <div className="container">
      <div className="admin-container">
        <h2 className="admin">Gallery Management</h2>
        <div className="back-wrapper">
          <button className="back" onClick={() => nav('/admin-dashboard')}>Back</button>
        </div>

        <p>Use image upload or URL for gallery cards (11 items). If left empty default team images are used.</p>
        <p><strong>For Google Drive images:</strong> Share the image publicly, copy the file ID from the share link (the long string after /d/), and use URL format: <code>https://drive.google.com/uc?export=view&id=FILE_ID</code></p>

        {images.map((img, index) => (
          <div key={index} style={{ marginBottom: 16, border: '1px solid #e0e0e0', borderRadius: 10, padding: 12 }}>
            <label style={{ display: 'block', marginBottom: 6, fontWeight: 600 }}>Image {index + 1}</label>

            <div style={{ display: 'flex', gap: 8, marginBottom: 8, alignItems: 'center' }}>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileChange(index, e.target.files[0])}
                style={{ flex: 1 }}
              />
              <span style={{ fontSize: 12, color: '#666' }}>or</span>
              <input
                type="text"
                value={img}
                placeholder="https://... or Google Drive share link"
                onChange={(e) => handleUrlChange(index, e.target.value)}
                style={{ flex: 2, padding: '8px 10px', borderRadius: 8, border: '1px solid #ccc' }}
              />
            </div>

            {img ? (
              <img
                src={img}
                alt={`preview-${index}`}
                style={{ maxWidth: '100%', height: 'auto', borderRadius: 8, border: '1px solid #bbb' }}
              />
            ) : (
              <div style={{ color: '#999', fontSize: 13 }}>No image selected.</div>
            )}
          </div>
        ))}

        <button onClick={saveImages} className="manage" style={{ marginTop: 20 }}>
          Save Gallery Images
        </button>
      </div>
    </div>
  );
}