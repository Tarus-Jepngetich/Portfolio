// src/journal/data/galleryData.js

// Tabs along the top
export const TABS = [
  { id: "software development", label: "Software Development" },
  { id: "data analysis", label: "Data Analysis" },
  { id: "graphic", label: "Graphic Design" },
  { id: "uiux", label: "UI/UX" },
  { id: "art", label: "Art" },
];

// Groups of project "categories" inside each tab
export const PROJECT_GROUPS = {
  // ✅ Documentation-first Software Development
  "software development": [
    {
      id: "dev-journal",
      title: "Development Journal",
      description:
        "Ongoing notes that capture how ideas evolve—questions, decisions, missteps, and small breakthroughs.",
      kind: "Journal",
    },
    {
      id: "process-docs",
      title: "Process & Documentation",
      description:
        "How I break problems down, document assumptions, and move from thought to structure.",
      kind: "Process",
    },
    {
      id: "learning-notes",
      title: "Learning Notes",
      description:
        "Short, honest write-ups on what I’m learning—concepts, patterns, and things I wish I knew earlier.",
      kind: "Notes",
    },
  ],

  // ✅ Data Analysis tab
  "data analysis": [
    {
      id: "eda-notebooks",
      title: "EDA Notebooks",
      description:
        "Exploratory data analysis: cleaning, inspecting patterns, and finding meaningful signals.",
      kind: "EDA",
    },
    {
      id: "data-cleaning",
      title: "Data Cleaning & Preparation",
      description:
        "Transforming raw data into usable datasets—handling missing values, formatting, and consistency.",
      kind: "Prep",
    },
    {
      id: "insights-storytelling",
      title: "Insights & Storytelling",
      description:
        "Turning analysis into decisions: summaries, visuals, and takeaways that are easy to understand.",
      kind: "Insights",
    },
  ],

  graphic: [
    {
      id: "illustrator",
      title: "Adobe Illustrator Projects",
      description: "Logos, branding systems, icons and vector illustration work.",
      kind: "Illustrator",
    },
    {
      id: "photoshop",
      title: "Photoshop Projects",
      description: "Posters, photo manipulation, composites and digital collages.",
      kind: "Photoshop",
    },
  ],

  uiux: [
    {
      id: "ui-design",
      title: "User Interface",
      description: "High-fidelity UI designs for web and mobile experiences.",
      kind: "UI Design",
    },
    {
      id: "ux-case-studies",
      title: "UX Case Studies",
      description: "Problem framing, research, insight mapping, and UX outcomes.",
      kind: "Case Studies",
    },
    {
      id: "wireframes",
      title: "Wireframes",
      description: "Low-fidelity flows, layout explorations, and interaction sketches.",
      kind: "Wireframes",
    },
  ],

  art: [
    {
      id: "digital-art",
      title: "Digital Art",
      description: "Procreate and tablet illustrations, character art, and paintings.",
      kind: "Digital",
    },
    {
      id: "traditional-art",
      title: "Traditional Art",
      description: "Pencil, ink, and mixed-media sketches from your sketchbooks.",
      kind: "Traditional",
    },
    {
      id: "seamless-files",
      title: "Seamless Files",
      description: "Repeating patterns and textures prepared as seamless tiles.",
      kind: "Patterns",
    },
    {
      id: "doodle-art",
      title: "Doodle Art",
      description: "Playful doodles, visual notes, and spontaneous line drawings.",
      kind: "Doodles",
    },
  ],
};

// Detail page content per category card
export const CATEGORY_PAGES = {
  // ✅ Documentation-first Software Development pages
  "dev-journal": {
    title: "Development Journal",
    intro:
      "A running record of how my software ideas take shape. This space captures thought process, uncertainty, and progress—without polishing the edges.",
    sections: [
      {
        heading: "What Gets Documented",
        items: [
          "Initial ideas and problem framing",
          "Questions I’m still figuring out",
          "Small decisions and their reasoning",
          "Reflections after building or refactoring",
        ],
      },
      {
        heading: "Why I Keep This",
        items: [
          "To slow down and think clearly",
          "To make learning visible",
          "To remember why choices were made",
        ],
      },
    ],
    tools: ["Draw.io","Figma", "Markdown", "Git"],
    docs: [
      {
        id: "Personal-Portfolio",
        title: "Portfolio Website Documentation",
        date: "2026-02-15",
        readTime: "3 min read",
        excerpt:
          "My first documentation entry — which is obviously this website.",
        to: "/Project Documentation/PERSONAL PORTFOLIO.pdf",
      },
    ],
  },


  // ✅ Data Analysis pages
  "eda-notebooks": {
    title: "EDA Notebooks",
    intro:
      "Exploratory notebooks where I inspect datasets, test assumptions, and discover patterns before making conclusions.",
    sections: [
      {
        heading: "Typical Workflow",
        items: [
          "Dataset overview + questions",
          "Missing values + data types check",
          "Distribution and correlation checks",
          "Early insights and next steps",
        ],
      },
      {
        heading: "What You’ll See",
        items: [
          "Clean summaries (not noise)",
          "Simple visuals to support insights",
          "Short reflections on what the data suggests",
        ],
      },
    ],
    tools: ["Python", "Pandas", "NumPy", "Jupyter Notebook"],
  },

  "data-cleaning": {
    title: "Data Cleaning & Preparation",
    intro:
      "Turning raw, messy data into something consistent and usable—so analysis becomes reliable.",
    sections: [
      {
        heading: "Cleaning Tasks",
        items: [
          "Handling missing values",
          "Fixing inconsistent formats",
          "Removing duplicates / invalid entries",
          "Feature extraction (creating useful columns)",
        ],
      },
      {
        heading: "Outputs",
        items: [
          "Cleaned datasets ready for analysis",
          "Notes on assumptions and changes made",
        ],
      },
    ],
    tools: ["Python", "Pandas", "NumPy"],
  },

  "insights-storytelling": {
    title: "Insights & Storytelling",
    intro:
      "Where analysis becomes communication—turning findings into clear takeaways, decisions, and next steps.",
    sections: [
      {
        heading: "Focus Areas",
        items: [
          "Clear, human-readable summaries",
          "Key metrics and what they mean",
          "Visuals that support the point (not decoration)",
          "Recommendations and follow-up questions",
        ],
      },
      {
        heading: "Formats",
        items: [
          "Notebook summaries",
          "Mini reports and slide-style write-ups",
          "Dashboards and simple charts",
        ],
      },
    ],
    tools: ["Jupyter Notebook", "Pandas", "NumPy"],
  },

  // Existing pages (unchanged)
  illustrator: {
    title: "Adobe Illustrator Projects",
    intro:
      "This collection gathers logo designs, branding suites, icons, and vector illustration work created in Adobe Illustrator.",
    sections: [
      {
        heading: "Branding & Logos",
        items: [
          "Café brand logo set (primary, secondary, and icon mark).",
          "Minimalist monogram logo concepts.",
          "Bold wordmark explorations for small businesses.",
        ],
      },
      {
        heading: "Illustrations & Icons",
        items: [
          "Flat illustration sets for social media posts.",
          "Custom icon pack for UI dashboards.",
          "Vector character illustrations and avatar sets.",
        ],
      },
    ],
    tools: ["Adobe Illustrator"],
  },

  photoshop: {
    title: "Photoshop Projects",
    intro:
      "Posters, photo manipulation, composites, and promotional artwork created in Adobe Photoshop.",
    sections: [
      {
        heading: "Posters & Covers",
        items: [
          "Event poster layouts with typography-focused design.",
          "Album/playlist cover concepts.",
        ],
      },
      {
        heading: "Photo Manipulation & Composites",
        items: [
          "Surreal composite scenes combining multiple photos.",
          "Color-grading explorations and before/after edits.",
        ],
      },
    ],
    tools: ["Adobe Photoshop"],
  },

  "ui-design": {
    title: "User Interface",
    intro:
      "Pixel-perfect UI screens for mobile and web apps, focusing on hierarchy, layout, and visual clarity.",
    sections: [
      {
        heading: "Mobile UI",
        items: [
          "Coffee ordering app screens (home, menu, cart, checkout).",
          "Habit tracker or productivity app layouts.",
        ],
      },
      {
        heading: "Web UI",
        items: [
          "Landing page hero sections.",
          "Dashboard layouts with charts and metrics.",
        ],
      },
    ],
    tools: ["Figma", "Adobe XD", "React", "Tailwind CSS"],
  },

  "ux-case-studies": {
    title: "UX Case Studies",
    intro:
      "End-to-end UX stories showing how you move from problem → research → insights → design solutions.",
    sections: [
      {
        heading: "Example Case Studies",
        items: [
          "Redesigning a sign-up flow to reduce drop-off.",
          "Improving navigation for an information-heavy website.",
        ],
      },
      {
        heading: "Deliverables",
        items: [
          "Problem statements and user goals.",
          "Journey maps, personas, and insight summaries.",
          "Before/after comparisons and reflections.",
        ],
      },
    ],
    tools: ["Figma", "Miro", "Notion"],
  },

  wireframes: {
    title: "Wireframes",
    intro:
      "Low-fidelity wireframes for flows, screens, and interaction ideas before visual design.",
    sections: [
      {
        heading: "Lo-fi Flows",
        items: [
          "Onboarding flow wireframes.",
          "Checkout process and cart editing flow.",
        ],
      },
      {
        heading: "Layouts & Structure",
        items: [
          "Dashboard content hierarchy.",
          "Responsive layout explorations (mobile, tablet, desktop).",
        ],
      },
    ],
    tools: ["Figma", "Pen & Paper"],
  },

  "digital-art": {
    title: "Digital Art",
    intro:
      "Digital illustrations, character art, and concept pieces created in tools like Procreate or Photoshop.",
    sections: [
      {
        heading: "Character & Portraits",
        items: [
          "Portrait studies with different lighting and moods.",
          "Stylised character designs or OCs.",
        ],
      },
      {
        heading: "Concept Art",
        items: [
          "Environment sketches and color studies.",
          "Mood pieces inspired by music, films, or emotions.",
        ],
      },
    ],
    tools: ["Procreate", "Photoshop"],
  },

  "traditional-art": {
    title: "Traditional Art",
    intro:
      "Sketchbook pages, ink drawings, and mixed-media pieces that show your hand-drawn style.",
    sections: [
      {
        heading: "Sketchbook",
        items: [
          "Pencil gesture drawings and anatomy practice.",
          "Ink linework and hatching experiments.",
        ],
      },
      {
        heading: "Mixed Media",
        items: [
          "Marker + pen illustrations.",
          "Collage or textured paper explorations.",
        ],
      },
    ],
    tools: ["Pencil", "Ink", "Markers"],
  },

  "seamless-files": {
    title: "Seamless Files",
    intro:
      "Patterns and textures designed to tile seamlessly for backgrounds, textiles, or digital products.",
    sections: [
      {
        heading: "Pattern Types",
        items: [
          "Floral and botanical patterns.",
          "Geometric and abstract repeat tiles.",
        ],
      },
      {
        heading: "Usage Ideas",
        items: [
          "Wallpaper or fabric mockups.",
          "Backgrounds for websites and social posts.",
        ],
      },
    ],
    tools: ["Illustrator", "Procreate", "Photoshop"],
  },

  "doodle-art": {
    title: "Doodle Art",
    intro:
      "Playful doodles, visual notes, and stream-of-consciousness drawings that capture your spontaneous side.",
    sections: [
      {
        heading: "Pages & Spreads",
        items: [
          "Dense doodle pages filled edge-to-edge.",
          "Visual note-taking from podcasts, talks, or lectures.",
        ],
      },
      {
        heading: "Fun Experiments",
        items: [
          "Character doodle sheets.",
          "Pattern and shape repetition exercises.",
        ],
      },
    ],
    tools: ["Pen", "Tablet", "Any scrap of paper"],
  },
};
