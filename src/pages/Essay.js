import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { essays } from '../data/essays';
import ReactMarkdown from 'react-markdown';

function Essay() {
  const { id } = useParams();
  const essay = essays.find(essay => essay.id === parseInt(id));

  if (!essay) {
    return <Navigate to="/essays" />;
  }

  return (
    <div className="essay-page">
      <h1>{essay.title}</h1>
      <div className="essay-meta">
        <span className="date">{essay.date}</span>
        <span className="category">{essay.category}</span>
      </div>
      <div className="essay-content">
        <ReactMarkdown>{essay.content}</ReactMarkdown>
      </div>
    </div>
  );
}

export default Essay;