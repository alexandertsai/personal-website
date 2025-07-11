import React from 'react';
import { Link } from 'react-router-dom';
import { bookReviews } from '../data/bookReviews';

function Books() {
  return (
    <div className="books-page">
      <div className="book-reviews">
        {bookReviews.map((review) => (
          <Link to={`/books/${review.slug}`} key={review.id} className="book-review-link">
            <article className="book-review-preview">
              <div className="review-meta">
                <span className="date">{review.date}</span>
              </div>
              <h2>{review.title}</h2>
              <p className="preview-text">{review.preview}</p>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Books;