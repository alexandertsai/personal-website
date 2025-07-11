import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { bookReviews } from '../data/bookReviews';
import ReactMarkdown from 'react-markdown';

function BookReview() {
  const { slug } = useParams();
  const review = bookReviews.find(review => review.slug === slug);

  if (!review) {
    return <Navigate to="/books" />;
  }

  return (
    <div className="book-review-page">
      <h1>{review.title}</h1>
      <div className="book-review-meta">
        <span className="date">{review.date}</span>
      </div>
      <div className="book-review-content">
        <ReactMarkdown>{review.content}</ReactMarkdown>
      </div>
    </div>
  );
}

export default BookReview;