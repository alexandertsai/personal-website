import React from 'react';
import { useParams } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

function BlogPost() {
  const { id } = useParams();
  const post = blogPosts.find(post => post.id === parseInt(id));

  if (!post) return <div>Post not found</div>;

  return (
    <div className="blog-post-page">
      <div className="blog-post-meta">
        <span className="date">{post.date}</span>
        <span className="category">{post.category}</span>
      </div>
      <h1>{post.title}</h1>
      <div className="blog-post-content">
        {post.content}
      </div>
    </div>
  );
}

export default BlogPost;