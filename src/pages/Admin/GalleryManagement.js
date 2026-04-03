import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/management.css';

const DEFAULT_IMAGES = [
  '/static/media/gal-img1.jpeg',
  '/static/media/gal-img2.jpeg',
  '/static/media/gal-img3.jpeg',
  '/static/media/gal-img4.jpeg',
];

export default function GalleryManagement() {
  const nav = useNavigate();
  const [images, setImages] = useState(['', '', '', '']);

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

  return (
    <div className="container">
      <div className="admin-container">
        <h2 className="admin">Gallery Management</h2>
        <div className="back-wrapper">
          <button className="back" onClick={() => nav('/admin-dashboard')}>Back</button>
        </div>

        <p>Use image upload or URL for gallery cards (4 items). If left empty default team images are used.</p>

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
                placeholder="https://..."
                onChange={(e) => {
                  const copied = [...images];
                  copied[index] = e.target.value;
                  setImages(copied);
                }}
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