import React from 'react';
import profilePic from '../assets/profile.jpg'; // Make sure you have your photo in this path

function About() {
  return (
    <div className="about-container">
      <div className="profile-section">
        <img src={profilePic} alt="Profile" className="profile-image" />
        <h1>About Me</h1>
      </div>
      <p>I'm Alex! In my spare time I enjoy baking and floral arrangements.</p>
    </div>
  );
}

export default About;