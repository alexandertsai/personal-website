import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

// insert your posts here!!
import letterboxed from '../posts/letterboxed/index.js';
import cjc from '../posts/cjc/index.js';
import tradeweb from '../posts/tradeweb/index.js';
import xgboost from '../posts/xgboost/index.js';

export const blogPosts = [
  xgboost,
  tradeweb,   // Add new posts from the top
  cjc,
  letterboxed

];

function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find(post => post.slug === slug);

  if (!post) {
    return <Navigate to="/blog" />;
  }

  return (
    <div className="blog-post-page">
      <h1>{post.title}</h1>
      <div className="blog-post-meta">
        <span className="date">{post.date}</span>
      </div>
      <div className="blog-post-content">
        <ReactMarkdown
          components={{
            code({node, inline, className, children, ...props}) {
              const match = /language-(\w+)/.exec(className || '');
              return !inline && match ? (
                <SyntaxHighlighter
                  style={prism} // style
                  language={match[1]}
                  PreTag="div"
                  customStyle={{
                    backgroundColor: '#f6f8fa',  // Light gray background
                    borderRadius: '6px',
                    padding: '16px'
                  }}
                  {...props}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            }
          }}
        >
          {post.content}
        </ReactMarkdown>
      </div>
    </div>
  );
}

export default BlogPost;