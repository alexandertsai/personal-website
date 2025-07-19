import React from 'react';

export const projects = [
  {
      id: 5,
      title: "Footfall Analysis",
      description: "Counting the number of unique visitors in a mall via live surveillance tracking.",
      technologies: ["PyTorch","YOLOv8"],
      link: "https://github.com/alexandertsai/footfall-analysis"
    },
    {
      id: 4,
      title: "Telegram MCP",
      description: "Allows you to summarise unread Telegram messages and reply in your style from Claude Desktop.",
      technologies: ["Python", "MCP"],
      link: "https://github.com/alexandertsai/mcp-telegram"
    },
    {
      id: 3,
      title: "Invoice Automator",
      description: "Automating the generation and sending of invoices.",
      technologies: ["AppleScript", "Python"],
      link: "https://github.com/alexandertsai/invoice-automator"
    },
    {
      id: 2,
      title: "Company Website",
      description: "The official website for Kada at 5 Kadayanallur Street.",
      technologies: ["Next.js", "Javascript"],
      link: "https://kada.sg"
    },
    {
      id: 1,
      title: "Portfolio Website",
      description: "The website you are viewing now was built with React and hosted on GitHub Pages!",
      technologies: ["React.js", "Javascript"],
      link: "https://github.com/alexandertsai/personal-website"
    }
  ];

function Project({ title, description, technologies, link }) {
  const handleClick = () => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="project-card" onClick={handleClick}>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="technologies">
        {technologies.map((tech, index) => (
          <span key={index} className="tech-tag">{tech}</span>
        ))}
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div className="projects-page">
      <div className="projects-grid">
        {projects.map((project) => (
          <Project
            key={project.id}
            {...project}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;