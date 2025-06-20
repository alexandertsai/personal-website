import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import { calculateReadingTime, formatReadingTime } from '../utils/readingTime';

function Blog() {
  return (
    <div className="blog-page">
      <div className="blog-posts">
        {blogPosts.map((post) => (
          <Link to={`/blog/${post.slug}`} key={post.id} className="blog-post-link">
            <article className="blog-post-preview">
              <div className="post-meta">
                <span className="date">{post.date}</span>
                <span className="category">{post.category}</span>
                <span className="reading-time">{formatReadingTime(calculateReadingTime(post.content))}</span>
              </div>
              <h2>{post.title}</h2>
              <p className="preview-text">{post.preview}</p>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Blog;