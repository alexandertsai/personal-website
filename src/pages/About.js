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
      source: image1,
      caption: 'An arrangement I made!',
      position: '50% 40%'
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
          This is my website for everything and anything.
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
            I'm a student at SMU and currently an intern at Tradeweb in New York! 
            My main interest lies in conversational AI for behavioural change. 
            My current project centers around creating chatbots for migrant workers in Singapore to enhance their financial literacy.
          </p>
          <p>
            During my free time, I enjoy reading (see Books section) or going for a run. I also create floral arrangements during special occasions &#45; concerts, mother's day etc.
          </p>
          <p>
            Please feel free to reach out at alexandertsaiyihrae@gmail.com. I will talk to you I promise!.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;