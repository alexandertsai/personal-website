import React, { useState, useEffect } from 'react';
import snowboarding from './images/snowboard.mp4';
import image1 from './images/flowers.jpg';
import image2 from './images/utoronto.jpg';
import image3 from './images/celesteandi.jpg';
import image4 from './images/grad.png';
import wuxi from './images/wuxi.png';
import scenic from './images/scenic.png'

function About() {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  
  const mediaContent = [
    {
      type: 'image',
      source: wuxi,
      caption: 'One of the temples in Wuxi'
    },
    {
      type: 'video',
      source: snowboarding,
      caption: 'Snowboarding in Niseko, Japan'
    },
    {
      type: 'image',
      source: scenic,
      caption: 'A grass field near Bukit Panjang'
    },
    {
      type: 'image',
      source: image2,
      caption: 'My journey to UofT!'
    },
    {
      type: 'image',
      source: image4,
      caption: 'My sister\'s graduation',
      position: '90% 80%'
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
            I'm a student at SMU and currently an intern at TikTok in Singapore! 
            My main interest lies in data science and machine learning. 
            During my free time, I enjoy reading or spending time with my friends and family. {/*I also create floral arrangements during special occasions &#45; concerts, mother's day etc. */}
          </p>
          <p>
            Please feel free to email <a href='mailto:alexandertsaiyihrae@gmail.com'>here</a>. I will respond I promise!.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;