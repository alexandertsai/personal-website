import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import { bookReviews } from '../data/bookReviews';
import { essays } from '../data/essays';
import { calculateReadingTime, formatReadingTime } from '../utils/readingTime';

function SearchBar({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  // Combine all content for searching - memoized to prevent recreation on every render
  const allContent = useMemo(() => [
    ...blogPosts.map(item => ({ ...item, type: 'blog', path: `/blog/${item.slug}` })),
    ...bookReviews.map(item => ({ ...item, type: 'book', path: `/books/${item.slug}` })),
    ...essays.map(item => ({ ...item, type: 'essay', path: `/essays/${item.slug}` }))
  ], []);

  useEffect(() => {
    if (query.length < 2) {
      setResults([]);
      return;
    }

    const searchQuery = query.toLowerCase();
    const filteredResults = allContent.filter(item => {
      const searchableText = `${item.title} ${item.preview} ${item.category} ${item.content}`.toLowerCase();
      return searchableText.includes(searchQuery);
    });

    setResults(filteredResults.slice(0, 8)); // Limit to 8 results
  }, [query, allContent]);

  // Reset search when component closes
  useEffect(() => {
    if (!isOpen) {
      setQuery('');
      setResults([]);
    }
  }, [isOpen]);

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  const handleSearchResultClick = () => {
    setQuery('');
    setResults([]);
    onClose();
  };

  const getTypeLabel = (type) => {
    switch (type) {
      case 'blog': return 'Blog Post';
      case 'book': return 'Book Review';
      case 'essay': return 'Essay';
      default: return '';
    }
  };

  if (!isOpen) return null;

  return (
    <div className="search-overlay" onClick={onClose}>
      <div className="search-container" onClick={(e) => e.stopPropagation()}>
        <div className="search-input-container">
          <input
            type="text"
            placeholder="Search posts, books, and essays..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
            className="search-input"
          />
          <button onClick={onClose} className="search-close">×</button>
        </div>
        
        {results.length > 0 && (
          <div className="search-results">
            {results.map((item) => (
              <Link
                key={`${item.type}-${item.id}`}
                to={item.path}
                className="search-result-item"
                onClick={handleSearchResultClick}
              >
                <div className="search-result-meta">
                  <span className="search-result-type">{getTypeLabel(item.type)}</span>
                  <span className="search-result-date">{item.date}</span>
                  <span className="search-result-reading-time">
                    {formatReadingTime(calculateReadingTime(item.content))}
                  </span>
                </div>
                <h3 className="search-result-title">{item.title}</h3>
                <p className="search-result-preview">{item.preview}</p>
              </Link>
            ))}
          </div>
        )}
        
        {query.length >= 2 && results.length === 0 && (
          <div className="search-no-results">
            <p>No results found for "{query}"</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchBar;