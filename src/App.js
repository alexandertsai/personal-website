import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MusicPlayer from './components/MusicPlayer';
import About from './pages/About';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import './App.css';
import Books from './pages/Books';
import BookReview from './pages/BookReview';
import Essays from './pages/Essays';
import Essay from './pages/Essay';

function App() {
  return (
    <Router>
      <div className="App">
        <MusicPlayer />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/books" element={<Books />} />
            <Route path="/books/:slug" element={<BookReview />} />
            <Route path="/essays" element={<Essays />} />
            <Route path="/essays/:slug" element={<Essay />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;