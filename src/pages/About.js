import React, { useState, useEffect } from 'react';
import snowboarding from '../assets/snowboard.mp4';
import image1 from '../assets/flowers.jpg';
import image2 from '../assets/utoronto.jpg';
import image3 from '../assets/celesteandi.jpg';
import image4 from '../assets/reach.jpg';
import piano from '../assets/piano.mp4';

function About() {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  
  const mediaContent = [
    {
      type: 'video',
      source: snowboarding,
      caption: 'Snowboarding in Niseko, Japan'
    },
    {
      type: 'image',
      source: image1,
      caption: 'Flowers I made <3',
      position: '50% 40%'
    },
    {
      type: 'video',
      source: piano,
      caption: 'My rendition of Traumerei by Schumann'
    },
    {
      type: 'image',
      source: image2,
      caption: 'My journey to UofT!'
    },
    {
      type: 'image',
      source: image4,
      caption: 'My Reach Alliance team'
    },
    {
      type: 'image',
      source: image3,
      caption: 'My friend and I at Kada, Singapore',
      position: '50% 70%'
    }
  ];

  useEffect(() => {
  
    const timer = setInterval(() => {
      setCurrentMediaIndex((prevIndex) => 
        (prevIndex + 1) % mediaContent.length
      );
    }, 6000); // Keep this at 6000 (6 seconds) or adjust if you want longer/shorter intervals
  
    // Reset the timer when component unmounts
    return () => clearInterval(timer);
  }, [mediaContent.length]); // Add mediaContent.length as a dependency

  return (
    <div className="about-page">
      <div className="hero-section">
        <h1>Hi, I'm Alex :&#41;</h1>
        <p className="hero-subtitle">
          I like watermelons. I also like to code (sometimes).
        </p>
        
        <div className="hero-media-container">
          <div className="hero-media">
            {mediaContent.map((media, index) => (
              <div
                key={index}
                className={`media-item ${index === currentMediaIndex ? 'active' : ''}`}
              >
                {media.type === 'video' ? (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="hero-video"
                    style={{ objectPosition: media.position }}
                  >
                    <source src={media.source} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    src={media.source}
                    alt={media.caption}
                    className="hero-image"
                    style={{ objectPosition: media.position }}
                  />
                )}
              </div>
            ))}
          </div>
          
          <div className="media-caption">
            {mediaContent[currentMediaIndex].caption}
          </div>
          
          <div className="media-dots">
            {mediaContent.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentMediaIndex ? 'active' : ''}`}
                onClick={() => setCurrentMediaIndex(index)}
                aria-label={`Show media ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="about-container">
        <div className="about-content">
          <p>
            I'm a student at SMU and a researcher at Reach Alliance. My main interest lies in conversational AI for behavioural change. One of my current projects centers around creating chatbots for migrant workers to enhance their financial literacy.
          </p>
          <p>
            During my free time, I bake chocolate chip cookies! I also create floral arrangements for various occasions - mother's day, valentines day, concert day and so on.
          </p>
          <p>
            Please feel free to reach out. I will talk to you I promise!.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;