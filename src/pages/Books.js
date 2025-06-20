import React from 'react';
import { Link } from 'react-router-dom';
import { bookReviews } from '../data/bookReviews';
import { calculateReadingTime, formatReadingTime } from '../utils/readingTime';

function Books() {
  return (
    <div className="books-page">
      <div className="book-reviews">
        {bookReviews.map((review) => (
          <Link to={`/books/${review.slug}`} key={review.id} className="book-review-link">
            <article className="book-review-preview">
              <div className="review-meta">
                <span className="date">{review.date}</span>
                <span className="category">{review.category}</span>
                {review.rating && <span className="rating">{review.rating}</span>}
                <span className="reading-time">{formatReadingTime(calculateReadingTime(review.content))}</span>
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