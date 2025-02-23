import React from 'react';

function BlogPost({ title, date, content }) {
  return (
    <article className="blog-post">
      <h2>{title}</h2>
      <div className="post-meta">
        <span className="date">{new Date(date).toLocaleDateString()}</span>
      </div>
      <div className="post-content">
        {content}
      </div>
    </article>
  );
}

export default BlogPost;