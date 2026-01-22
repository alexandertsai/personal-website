import { useState } from 'react';
import { blogPosts, PostContent } from './pages/BlogPosts';
import sunrise from './pages/images/impression_sunrise.jpeg';
import profilePic from './pages/images/profile.jpg';
import './App.css';

function App() {
  const [selectedPost, setSelectedPost] = useState(blogPosts[0]);

  return (
    <div className="App">
      <div className="banner" style={{ backgroundImage: `url(${sunrise})` }} />

      <header className="site-header">
        <img src={profilePic} alt="Alexander Tsai" className="profile-pic" />
        <h1>Alexander Tsai</h1>
        <p>My website where I post writings and other projects!</p>
      </header>

      <div className="content-layout">
        <aside className="sidebar">
          {blogPosts.map(post => (
            <div
              key={post.id}
              className={`sidebar-item ${post.id === selectedPost.id ? 'active' : ''}`}
              onClick={() => setSelectedPost(post)}
            >
              {post.title}
            </div>
          ))}
        </aside>

        <main className="post-content">
          <PostContent post={selectedPost} />
        </main>
      </div>
    </div>
  );
}

export default App;
