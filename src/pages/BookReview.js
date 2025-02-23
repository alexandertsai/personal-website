import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { bookReviews } from '../data/bookReviews';
import ReactMarkdown from 'react-markdown';

function BookReview() {
  const { id } = useParams();
  const review = bookReviews.find(review => review.id === parseInt(id));

  if (!review) {
    return <Navigate to="/books" />;
  }

  return (
    <div className="book-review-page">
      <h1>{review.title}</h1>
      <div className="book-review-meta">
        <span className="date">{review.date}</span>
        <span className="category">{review.category}</span>
        {review.rating && <span className="rating">{review.rating}</span>}
      </div>
      <div className="book-review-content">
        <ReactMarkdown>{review.content}</ReactMarkdown>
      </div>
    </div>
  );
}

export default BookReview;