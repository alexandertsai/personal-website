import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

import letterboxed from '../posts/letterboxed/index.js';
import cjc from '../posts/cjc/index.js';
import tradeweb from '../posts/tradeweb/index.js';

export const blogPosts = [
  tradeweb,
  cjc,
  letterboxed
];

export function PostContent({ post }) {
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
                  style={prism}
                  language={match[1]}
                  PreTag="div"
                  customStyle={{
                    backgroundColor: '#f6f8fa',
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

export default PostContent;
