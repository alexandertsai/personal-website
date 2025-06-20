/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { essays } from '../data/essays';
import ReactMarkdown from 'react-markdown';
import { calculateReadingTime, formatReadingTime } from '../utils/readingTime';

function Essay() {
  const { slug } = useParams();
  const essay = essays.find(essay => essay.slug === slug);

  if (!essay) {
    return <Navigate to="/essays" />;
  }

  // Custom components for ReactMarkdown
  const components = {
    p: ({ children }) => {
      // Skip processing if there are no children
      if (!children) return <p></p>;
      
      // Convert children array to string for processing
      const childrenArray = React.Children.toArray(children);
      const stringContent = childrenArray
        .map(child => (typeof child === 'string' ? child : ''))
        .join('');
      
      // Check for center marker
      if (stringContent.startsWith(':center:')) {
        const cleanContent = stringContent.replace(':center:', '');
        return <p style={{ textAlign: 'center' }}>{cleanContent}</p>;
      }
      
      // Check for h3-center marker
      if (stringContent.startsWith(':h3-center:')) {
        const cleanContent = stringContent.replace(':h3-center:', '');
        // Only render h3 if there's actual content after removing the marker
        if (cleanContent.trim()) {
          return <h3 style={{ textAlign: 'center' }}>{cleanContent}</h3>;
        } else {
          return <p></p>; // Fallback to empty paragraph if no content
        }
      }
      
      // Return the original children for normal paragraphs
      return <p>{children}</p>;
    },
    
    h2: ({ children }) => {
      // Skip processing if there are no children
      if (!children) return <h2></h2>;
      
      // Convert children array to string for processing
      const childrenArray = React.Children.toArray(children);
      const stringContent = childrenArray
        .map(child => (typeof child === 'string' ? child : ''))
        .join('');
      
      if (stringContent.startsWith(':center:')) {
        const cleanContent = stringContent.replace(':center:', '');
        // Only render if there's content
        if (cleanContent.trim()) {
          return <h2 style={{ textAlign: 'center' }}>{cleanContent}</h2>;
        }
      }
      
      // Return the original children for normal h2s
      return <h2>{children}</h2>;
    },
    
    h3: ({ children }) => {
      // Skip processing if there are no children
      if (!children) return <h3></h3>;
      
      // Convert children array to string for processing
      const childrenArray = React.Children.toArray(children);
      const stringContent = childrenArray
        .map(child => (typeof child === 'string' ? child : ''))
        .join('');
      
      if (stringContent.startsWith(':center:')) {
        const cleanContent = stringContent.replace(':center:', '');
        // Only render if there's content
        if (cleanContent.trim()) {
          return <h3 style={{ textAlign: 'center' }}>{cleanContent}</h3>;
        }
      }
      
      // Return the original children for normal h3s
      return <h3>{children}</h3>;
    }
  };

  return (
    <div className="essay-page">
      <h1>{essay.title}</h1>
      <div className="essay-meta">
        <span className="date">{essay.date}</span>
        <span className="category">{essay.category}</span>
        <span className="reading-time">{formatReadingTime(calculateReadingTime(essay.content))}</span>
      </div>
      <div className="essay-content">
        <ReactMarkdown components={components}>{essay.content}</ReactMarkdown>
      </div>
    </div>
  );
}

export default Essay;