import React from 'react';
import EducationPost from '../components/EducationPost';
import HobbiesPost from '../components/HobbiesPost';
import SpringQuarterPost from '../components/SpringQuarterPost';

export const blogPosts = {
  'education': {
    title: 'My Educational Journey',
    component: <EducationPost />
  },
  'hobbies': {
    title: 'My Hobbies & Interests',
    component: <HobbiesPost />
  },
  'spring-quarter': {
    title: '2025 Spring Quarter Course Reflections',
    component: <SpringQuarterPost />
  },
  'how-i-built': {
    title: 'How I Built This Website in One Afternoon',
    component: (
      <div style={{ padding: '3rem', maxWidth: '1000px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#333' }}>How I Built This Website in One Afternoon</h1>
        <p style={{ fontSize: '1.3rem', color: '#666', marginBottom: '3rem' }}>July 13, 2025</p>
        
        <h2 style={{ fontSize: '1.8rem', marginTop: '2.5rem', marginBottom: '1.5rem', color: '#444' }}>The Motivation</h2>
        <p style={{ fontSize: '1.15rem', lineHeight: '2', marginBottom: '2rem', letterSpacing: '0.02em' }}>I wanted a simple, fast, and personal space to share my thoughts and projects. After exploring various options, I decided to build something from scratch using React.</p>
        
        <h2 style={{ fontSize: '1.8rem', marginTop: '2.5rem', marginBottom: '1.5rem', color: '#444' }}>The Stack</h2>
        <ul style={{ marginLeft: '2.5rem', marginBottom: '2.5rem', lineHeight: '2.2', fontSize: '1.15rem' }}>
          <li>React for the UI components</li>
          <li>Custom CSS for styling</li>
          <li>GitHub Pages for hosting</li>
        </ul>
        
        <h2 style={{ fontSize: '1.8rem', marginTop: '2.5rem', marginBottom: '1.5rem', color: '#444' }}>The Process</h2>
        <p style={{ fontSize: '1.15rem', lineHeight: '2', marginBottom: '2rem', letterSpacing: '0.02em' }}>Starting with a basic HTML template, I gradually converted everything to React components. The modal system for blog posts was the trickiest part, but it provides a smooth reading experience.</p>
        
        <h2 style={{ fontSize: '1.8rem', marginTop: '2.5rem', marginBottom: '1.5rem', color: '#444' }}>What I Learned</h2>
        <p style={{ fontSize: '1.15rem', lineHeight: '2', marginBottom: '2rem', letterSpacing: '0.02em' }}>Sometimes the simplest solution is the best. By keeping dependencies minimal and focusing on content, I created something that loads fast and is easy to maintain.</p>
      </div>
    )
  },
  'internship-reflection': {
    title: 'What I Learned from My Computer Vision Internship',
    component: (
      <div style={{ padding: '3rem', maxWidth: '1000px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#333' }}>What I Learned from My Computer Vision Internship</h1>
        <p style={{ fontSize: '1.3rem', color: '#666', marginBottom: '3rem' }}>July 8, 2025</p>
        
        <h2 style={{ fontSize: '1.8rem', marginTop: '2.5rem', marginBottom: '1.5rem', color: '#444' }}>The Project</h2>
        <p style={{ fontSize: '1.15rem', lineHeight: '2', marginBottom: '2rem', letterSpacing: '0.02em' }}>During my internship, I worked on developing computer vision algorithms for object detection and distance measurement. This involved working with ARKit, CoreML, and various Python libraries.</p>
        
        <h2 style={{ fontSize: '1.8rem', marginTop: '2.5rem', marginBottom: '1.5rem', color: '#444' }}>Technical Skills Gained</h2>
        <ul style={{ marginLeft: '2.5rem', marginBottom: '2.5rem', lineHeight: '2.2', fontSize: '1.15rem' }}>
          <li>Deep understanding of convolutional neural networks</li>
          <li>Experience with model optimization for mobile devices</li>
          <li>Real-world application of computer vision techniques</li>
          <li>Collaborative development using Git and code reviews</li>
        </ul>
        
        <h2 style={{ fontSize: '1.8rem', marginTop: '2.5rem', marginBottom: '1.5rem', color: '#444' }}>Soft Skills Developed</h2>
        <p style={{ fontSize: '1.15rem', lineHeight: '2', marginBottom: '2rem', letterSpacing: '0.02em' }}>Beyond the technical aspects, I learned the importance of clear communication when explaining complex concepts to non-technical stakeholders. Weekly presentations helped me become more confident in sharing my work.</p>
        
        <h2 style={{ fontSize: '1.8rem', marginTop: '2.5rem', marginBottom: '1.5rem', color: '#444' }}>Key Takeaways</h2>
        <p style={{ fontSize: '1.15rem', lineHeight: '2', marginBottom: '2rem', letterSpacing: '0.02em' }}>The most valuable lesson was understanding the gap between academic knowledge and industry application. Real-world constraints like performance, battery life, and user experience shape how we implement solutions.</p>
      </div>
    )
  }
};