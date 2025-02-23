const blogPostTemplate = {
  id: 0,  // Remember to update this for each new post
  title: "Post Title Here",
  date: "February 9, 2024",
  category: "Category",
  preview: "First paragraph of your post will go here as a preview...",
  content: `
February 9, 2024 | Category

First paragraph of your post. This is where you introduce your topic and hook the reader.

Second paragraph builds on your introduction and provides more context.

## Section Title

You can create sections to organize your thoughts. Each section can have multiple paragraphs
that explore different aspects of your topic.

### Code Example
If you want to include code, use this format:

\`\`\`javascript
function example() {
  const data = "Your code here";
  console.log(data);
}
\`\`\`

## Another Section

- You can use bullet points
- To make lists of items
- And organize information

### Final Thoughts

Wrap up your post with concluding thoughts or a call to action.
`
};

export default blogPostTemplate;