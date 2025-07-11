import React from 'react';
import { Link } from 'react-router-dom';
import { essays } from '../data/essays';

function Essays() {
  return (
    <div className="essays-page">
      <div className="essays-list">
        {essays.map((essay) => (
          <Link to={`/essays/${essay.slug}`} key={essay.id} className="essay-link">
            <article className="essay-preview">
              <div className="essay-meta">
                <span className="date">{essay.date}</span>
              </div>
              <h2>{essay.title}</h2>
              <p className="preview-text">{essay.preview}</p>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Essays;