const collection = [
  {
    title: "Git-Mastery",
    description: "Git CLI-based learning tool",
    technologies: ["Python"],
    links: {
      "Organization": "https://github.com/git-mastery",
    }
  },
  {
    title: "BusWhere",
    description: "Simplistic Singapore public bus timing app",
    technologies: ["Elixir", "Docker", "Kotlin", "Android"],
    links: {
      "Android app": "https://github.com/woojiahao/bus-where",
      "API": "https://github.com/woojiahao/bus-where-api"
    }
  },
  {
    title: "scribner",
    description: "TUI to consolidate backup folders",
    technologies: ["Python", "Textual"],
    links: {
      "GitHub": "https://github.com/woojiahao/scribner"
    }
  },
  {
    title: "Daily Planet",
    description: "RSS feed manager Discord bot",
    technologies: ["Go", "Docker"],
    links: {
      "GitHub": "https://github.com/woojiahao/daily-planet"
    }
  },
  {
    title: "chirp",
    description: "CHIP-8 emulator",
    technologies: ["C", "Makefile", "SDL"],
    links: {
      "GitHub": "https://github.com/woojiahao/chirp",
      "Notes": "https://woojiahao.notion.site/chirp-2f9f881eda0580158a73f6a072d7453b?source=copy_link"
    }
  },
  {
    title: "dotfiles",
    description: "Dotfiles for my local machines",
    technologies: ["Bash"],
    links: {
      "GitHub": "https://github.com/woojiahao/dotfiles",
    }
  },
  {
    title: "aoc 🎄",
    description: "Advent of Code solutions",
    technologies: ["Elixir", "Python"],
    links: {
      "Elixir": "https://github.com/woojiahao/aoc",
      "Python": "https://github.com/woojiahao/aoc.py",
    }
  },
  {
    title: "interviews",
    description: "Technical interview guide for entry-level SWE/SREs",
    technologies: ["Markdown"],
    links: {
      "Website": "https://interviews.woojiahao.com",
    }
  },
  {
    title: "chris",
    description: "Pratt parser implementation in Go",
    technologies: ["Go"],
    links: {
      "GitHub": "https://github.com/woojiahao/chris",
      "Notes": "https://woojiahao.notion.site/Chris-s-Pratt-Parsing-Notes-a3ccdbc32a424be6bcf67f52769ebd94",
    }
  },
  {
    title: "life",
    description: "Conway's Game of Life Visualization",
    technologies: ["Elixir", "Scenic"],
    links: {
      "GitHub": "https://github.com/woojiahao/life",
    }
  },
  {
    title: "torrent.go",
    description: "Implementation of the BitTorrent protocol in Go",
    technologies: ["Go"],
    links: {
      "GitHub": "https://github.com/woojiahao/torrent.go",
    }
  },
  {
    title: "hermes",
    description: "Self-hosted web forum",
    technologies: ["Go", "React"],
    links: {
      "GitHub": "https://github.com/woojiahao/hermes",
    }
  },
  {
    title: "ldb",
    description: "Lightweight database wrapper around database/sql for Go",
    technologies: ["Go"],
    links: {
      "GitHub": "https://github.com/woojiahao/ldb",
    }
  },
  {
    title: "apollo",
    description: "Open-source RSS aggregator",
    technologies: ["Electron", "React", "Tailwind"],
    links: {
      "GitHub": "https://github.com/woojiahao/apollo",
    }
  },
  {
    title: "kobold",
    description: "URL shortening service",
    technologies: ["Elixir", "PostgreSQL", "Redis"],
    links: {
      "GitHub": "https://github.com/woojiahao/kobold",
    }
  },
  {
    title: "baleen",
    description: "Migration tool from Trello to Notion",
    technologies: ["Go"],
    links: {
      "GitHub": "https://github.com/woojiahao/baleen",
    }
  },
  {
    title: "gmail-filter-organiser",
    description: "CLI tool to organize Gmail filters",
    technologies: ["Go"],
    links: {
      "GitHub": "https://github.com/woojiahao/gmail-filter-organiser",
    }
  },
]

const projectsContainer = document.querySelector('div.projects');
const generateProjectLink = (projectName) => `https://github.com/woojiahao/${projectName}`;

for (const project of collection) {
  console.log(project)
  const {
    title,
    description,
    technologies,
    links
  } = project;

  const projectContainer = document.createElement('div');
  projectContainer.classList.add('project');

  // title
  const projectTitle = document.createElement('h2');
  projectTitle.textContent = title;
  projectContainer.append(projectTitle);

  // description
  const projectDescription = document.createElement('h3');
  projectDescription.textContent = description;
  projectContainer.append(projectDescription);

  // shared row
  const row = document.createElement('div')
  row.classList.add("project-row")

  // technologies
  const technologiesContainer = document.createElement('div');
  technologiesContainer.classList.add('technologies');
  const technologySpan = document.createElement('span');
  technologySpan.textContent = technologies.join(" | ");
  technologiesContainer.append(technologySpan);
  row.append(technologiesContainer);

  // links
  const linksContainer = document.createElement('div');
  linksContainer.classList.add('links');
  for (const [linkTitle, linkUrl] of Object.entries(links)) {
    const linkSpan = document.createElement('a');
    linkSpan.textContent = linkTitle;
    linkSpan.href = linkUrl
    linksContainer.append(linkSpan);
  }
  row.append(linksContainer);

  projectContainer.appendChild(row)
  projectsContainer.appendChild(projectContainer);
}
