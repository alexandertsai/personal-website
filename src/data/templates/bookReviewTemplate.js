const bookReviewTemplate = {
    id: 0,
    title: "Book Title by Author",
    date: "February 9, 2024",
    category: "Category", // e.g., Fiction, Non-Fiction, Technical
    rating: "4.5/5", // Optional
    preview: "Brief thoughts about the book...",
    content: `
  February 9, 2024 | Category
  
  ![Book Cover](book-cover-url-here)
  
  ## Summary
  
  Brief overview of what the book is about and your main takeaways.
  
  ## Key Points
  
  - First major point or theme
  - Second major point
  - Third major point
  
  ## Favorite Quotes
  
  > "Insert memorable quote from the book here"
  
  > "Another impactful quote"
  
  ## Detailed Thoughts
  
  Expand on your thoughts about the book, what you learned, and how it impacted you.
  
  ## Who Should Read This?
  
  Describe the ideal reader for this book and what they might gain from it.
  
  ## Final Verdict
  
  Wrap up with your final thoughts and recommendations.
  `
  };
  
  export default bookReviewTemplate;