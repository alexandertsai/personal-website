import React, { useState, useEffect } from 'react';
import snowboarding from '../assets/snowboard.mp4';
import image1 from '../assets/flowers.jpg';
import image2 from '../assets/utoronto.jpg';
import image3 from '../assets/celesteandi.jpg';
import image4 from '../assets/grad.png';
import wuxi from '../assets/wuxi.png';
import scenic from '../assets/scenic.png'

function About() {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  
  const mediaContent = [
    {
      type: 'image',
      source: wuxi,
      caption: 'One of the temples in Wuxi'
    },
    {
      type: 'image',
      source: scenic,
      caption: 'Something I took near my old school'
    },
    {
      type: 'video',
      source: snowboarding,
      caption: 'Snowboarding in Niseko, Japan'
    },
    {
      type: 'image',
      source: image2,
      caption: 'My journey to UofT!'
    },
    {
      type: 'image',
      source: image4,
      caption: 'My sister\'s graduation'
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
    }, 7000);
  
    return () => clearInterval(timer);
  }, [mediaContent.length]);

  return (
    <div className="about-page">
      <div className="hero-section">
        <h1>Alexander Tsai</h1>
        <p className="hero-subtitle">
          This is my website where I post writings and other projects!
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
            One of my previous projects centered around creating chatbots for migrant workers in Singapore to enhance their financial literacy.
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