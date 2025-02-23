import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import ReactMarkdown from 'react-markdown';

function BlogPost() {
  const { id } = useParams();
  const post = blogPosts.find(post => post.id === parseInt(id));

  if (!post) {
    return <Navigate to="/blog" />;
  }

  return (
    <div className="blog-post-page">
      <h1>{post.title}</h1>
      <div className="blog-post-meta">
        <span className="date">{post.date}</span>
        <span className="category">{post.category}</span>
      </div>
      <div className="blog-post-content">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </div>
  );
}

export default BlogPost;