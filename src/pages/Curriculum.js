import React from 'react';
import '../styles/dashboard.css';

export default function Curriculum() {
  return (
    <div style={{ padding: '60px 8%', background: '#f7fbff', minHeight: '100vh' }}>
      <h1 style={{ color: '#0473ea', fontSize: '3rem', textAlign: 'center' }}>Curriculum Overview</h1>
      <p style={{ maxWidth: '900px', margin: '20px auto', fontSize: '1.1rem', color: '#333', lineHeight: '1.8' }}>
        Our curriculum is designed with a child-first approach, blending play-based learning, social skills, and academic readiness.
        Every student receives a customised pathway through interactive learning blocks: language discovery, maths fundamentals, creative arts,
        science exploration, physical fitness, and character development.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', marginTop: '40px' }}>
        <div style={{ background: '#ffffff', borderRadius: '20px', padding: '24px', boxShadow: '0 8px 20px rgba(0,0,0,0.08)' }}>
          <h3 style={{ color: '#029be5' }}>Early Literacy</h3>
          <p>Phonics, storytelling, vocabulary building, and confidence in early reading skills through games and group sessions.</p>
        </div>

        <div style={{ background: '#ffffff', borderRadius: '20px', padding: '24px', boxShadow: '0 8px 20px rgba(0,0,0,0.08)' }}>
          <h3 style={{ color: '#029be5' }}>Numeracy Foundations</h3>
          <p>Concepts include numbers, shapes, patterns, measurement, and logic with hands-on activities.</p>
        </div>

        <div style={{ background: '#ffffff', borderRadius: '20px', padding: '24px', boxShadow: '0 8px 20px rgba(0,0,0,0.08)' }}>
          <h3 style={{ color: '#029be5' }}>Creative Arts</h3>
          <p>Art, music, movement, and dramatic play support expression and creativity.</p>
        </div>

        <div style={{ background: '#ffffff', borderRadius: '20px', padding: '24px', boxShadow: '0 8px 20px rgba(0,0,0,0.08)' }}>
          <h3 style={{ color: '#029be5' }}>Life Skills & Values</h3>
          <p>Building community, discipline, empathy, and good habits that last a lifetime.</p>
        </div>
      </div>
    </div>
  );
}
