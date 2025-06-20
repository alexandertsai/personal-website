// Utility function to calculate reading time
export function calculateReadingTime(content) {
  if (!content) return 0;
  
  // Remove markdown formatting and HTML tags
  const plainText = content
    .replace(/[#*`_~[\]()]/g, '') // Remove markdown symbols
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/!\[.*?\]\(.*?\)/g, '') // Remove images
    .replace(/\[.*?\]\(.*?\)/g, '') // Remove links
    .trim();
  
  // Count words (split by whitespace and filter empty strings)
  const words = plainText.split(/\s+/).filter(word => word.length > 0);
  const wordCount = words.length;
  
  // Average reading speed is 200-250 words per minute
  // Using 225 as a middle ground
  const readingSpeedWPM = 225;
  const minutes = Math.ceil(wordCount / readingSpeedWPM);
  
  return minutes;
}

// Format reading time for display
export function formatReadingTime(minutes) {
  if (minutes < 1) return 'Less than 1 min read';
  if (minutes === 1) return '1 min read';
  return `${minutes} min read`;
}