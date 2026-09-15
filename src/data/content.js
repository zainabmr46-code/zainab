// ────────────────────────────────────────────────────────────
// EDIT THIS FILE to make the site yours. Every section on the
// site pulls its copy from here — nothing else needs to change.
// ────────────────────────────────────────────────────────────


export const profile = {
  name: "Zainab Mujeebur Rahman",

  title:
    "Aspiring Software Developer | UI/UX & Graphic Designer",

  tagline:
    "HND IT student and Aspiring Software Developer with experience in Full-Stack, MERN, Laravel, and WordPress. Focused on building responsive, user-friendly web applications.",

  location: "Nawalapitiya, Sri Lanka",

  email: "zainabmr46@gmail.com",

  resumeUrl: `${import.meta.env.BASE_URL}resume.pdf`,

  photoUrl: `${import.meta.env.BASE_URL}zainab.jpeg`,

  status:
    "Open to Internship & Entry-Level Opportunities",

  currentlyLine:
    "Currently pursuing a Higher National Diploma in Information Technology at SLIATE",
};


// ────────────────────────────────────────────────────────────
// BIO
// ────────────────────────────────────────────────────────────

export const bio = `
I'm an aspiring software developer and UI/UX designer currently pursuing a Higher National Diploma in Information Technology at SLIATE. I have hands-on experience developing full-stack web applications using React, Laravel, Node.js, PHP, Java, MySQL, and MongoDB.

I enjoy building secure, responsive, and user-friendly applications that solve practical problems. Through academic and personal projects, I have developed experience in web development, REST APIs, authentication, database management, WordPress, UI/UX design, and graphic design.

I am passionate about continuously improving my technical skills, exploring modern technologies, and creating meaningful digital experiences.
`;


// ────────────────────────────────────────────────────────────
// SKILLS
// ────────────────────────────────────────────────────────────

export const skills = [
  {
    name: "JavaScript / React.js",
    level: 82,
  },

  {
    name: "HTML5 / CSS3 / Tailwind CSS",
    level: 88,
  },

  {
    name: "PHP / Laravel",
    level: 75,
  },

  {
    name: "Node.js / Express.js",
    level: 72,
  },

  {
    name: "MongoDB / MySQL",
    level: 78,
  },

  {
    name: "Java / OOP",
    level: 70,
  },

  {
    name: "REST API / JWT",
    level: 75,
  },

  {
    name: "Git / GitHub",
    level: 80,
  },

  {
    name: "UI/UX Design",
    level: 82,
  },

  {
    name: "Graphic Design",
    level: 78,
  },

  {
    name: "Figma / Canva / Photopea",
    level: 80,
  },

  {
    name: "WordPress",
    level: 78,
  },
];


// ────────────────────────────────────────────────────────────
// HERO STATS
// ────────────────────────────────────────────────────────────

export const heroStats = [
  {
    value: 8,
    suffix: "+",
    label: "Projects Built",
  },

  {
    value: 10,
    suffix: "+",
    label: "Technologies",
  },

  {
    value: 3,
    suffix: "",
    label: "Areas of Expertise",
  },
];


// ────────────────────────────────────────────────────────────
// SERVICES
// ────────────────────────────────────────────────────────────

export const services = [
  {
    title: "Frontend Development",

    description:
      "Creating responsive and user-friendly interfaces using React.js, Tailwind CSS, HTML, CSS, and JavaScript.",

    icon: "Code2",
  },

  {
    title: "Backend & APIs",

    description:
      "Developing REST APIs and server-side applications using Laravel, PHP, Node.js, Express.js, MySQL, and JWT authentication.",

    icon: "Server",
  },

  {
    title: "UI/UX & Digital Design",

    description:
      "Designing clean, intuitive, and visually engaging digital experiences using Figma, Canva, Photopea, and modern design principles.",

    icon: "Palette",
  },
];


// ────────────────────────────────────────────────────────────
// PROJECTS
// ────────────────────────────────────────────────────────────

export const projects = [

  // ─────────────────────────────────────────────────────────
  // ASWESUMA
  // ─────────────────────────────────────────────────────────

  {
    id: "aswesuma",

    title:
      "Aswesuma Benefits Application & Tracking System",

    description:
      "A full-stack welfare management system designed to streamline citizen registration, benefit applications, claims, objections, and application tracking. The system includes role-based access, JWT authentication, and an administrative dashboard for managing welfare requests.",

    tags: [
      "Laravel",
      "React",
      "MySQL",
      "REST API",
      "JWT",
    ],

    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",

    liveUrl:
      "https://github.com/zainabmr46-code/aswasuma_benefit",

    githubUrl:
      "https://github.com/zainabmr46-code/aswasuma_benefit",

    featured: true,
  },


  // ─────────────────────────────────────────────────────────
  // LEARNHUB
  // ─────────────────────────────────────────────────────────

  {
    id: "learnhub",

    title:
      "LearnHub — Online Learning Platform",

    description:
      "A full-stack MERN online learning platform inspired by modern e-learning systems. It includes secure authentication, role-based dashboards, online payments, video lectures, quizzes, automated certificates, and real-time communication.",

    tags: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "JWT",
      "Stripe",
      "Socket.io",
    ],

    image:
      `${import.meta.env.BASE_URL}learninghub.webp`,

    liveUrl:
      "https://github.com/zainabmr46-code/udemy-clone",

    githubUrl:
      "https://github.com/zainabmr46-code/udemy-clone",

    featured: true,
  },


  // ─────────────────────────────────────────────────────────
  // PLAYZONE ARENA
  // ─────────────────────────────────────────────────────────

  {
    id: "playzone-arena",

    title:
      "PlayZone Arena — Sports Ground Booking Website",

    description:
      "A modern responsive WordPress website designed for a sports ground booking service. It allows users to explore sports grounds, view facilities and pricing, check availability, and follow a convenient booking flow through a clean and user-friendly interface.",

    tags: [
      "WordPress",
      "UI/UX",
      "Responsive Design",
      "Astra",
      "Elementor",
    ],

    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1200&auto=format&fit=crop",

    liveUrl:
      "https://groundbookingdesignzain.unaux.com/ground",

    githubUrl:
      "",

    featured: true,
  },


  // ─────────────────────────────────────────────────────────
  // ZAIN CAFE HOUSE
  // ─────────────────────────────────────────────────────────

  {
    id: "zain-cafe-house",

    title:
      "Zain Cafe House — WordPress Café Website",

    description:
      "A responsive WordPress café website focused on clean visual presentation, custom branding, intuitive navigation, and a user-friendly experience. The website includes a welcoming hero section, café content, navigation, and clear call-to-action elements.",

    tags: [
      "WordPress",
      "UI/UX",
      "Responsive Design",
      "Astra",
      "Elementor",
    ],

    image:
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1200&auto=format&fit=crop",

    liveUrl:
      "https://zainshahdesign.unaux.com/",

    githubUrl:
      "",

    featured: true,
  },


  // ─────────────────────────────────────────────────────────
  // EVENT MANAGEMENT
  // ─────────────────────────────────────────────────────────

  {
    id: "event-management",

    title:
      "Event Management System",

    description:
      "A Java desktop application for managing events, customers, venues, bookings, payments, and reports. The application includes secure user authentication and demonstrates Object-Oriented Programming, database connectivity, and desktop application development.",

    tags: [
      "Java",
      "Swing",
      "MySQL",
      "JDBC",
      "OOP",
    ],

    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop",

    liveUrl:
      "https://github.com/zainabmr46-code/EventManagement",

    githubUrl:
      "https://github.com/zainabmr46-code/EventManagement",

    featured: true,
  },


  // ─────────────────────────────────────────────────────────
  // ENDANGERED SPECIES
  // ─────────────────────────────────────────────────────────

  {
    id: "endangered-species",

    title:
      "Endangered Species Website",

    description:
      "A responsive frontend website developed using HTML, CSS, and JavaScript to present information about endangered species through a clean, accessible, and user-friendly interface.",

    tags: [
      "HTML",
      "CSS",
      "JavaScript",
    ],

    image:
      "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?q=80&w=1200&auto=format&fit=crop",

    liveUrl:
      "https://zainabmr46-code.github.io/Endangered-Species_/",

    githubUrl:
      "https://github.com/zainabmr46-code/Endangered-Species_",

    featured: true,
  },


  // ─────────────────────────────────────────────────────────
  // JAVASCRIPT CALCULATOR
  // ─────────────────────────────────────────────────────────

  {
    id: "js-calculator",

    title:
      "JavaScript Calculator",

    description:
      "An interactive calculator developed using HTML, CSS, and JavaScript, supporting essential arithmetic operations through a simple, responsive, and user-friendly interface.",

    tags: [
      "HTML",
      "CSS",
      "JavaScript",
    ],

    image:
      "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?q=80&w=1200&auto=format&fit=crop",

    liveUrl:
      "https://zainabmr46-code.github.io/javascript-calculator/",

    githubUrl:
      "https://github.com/zainabmr46-code/javascript-calculator",

    featured: true,
  },


  // ─────────────────────────────────────────────────────────
  // PASSWORD GENERATOR
  // ─────────────────────────────────────────────────────────

  {
    id: "password-generator",

    title:
      "JavaScript Password Generator",

    description:
      "A web-based password generator developed using HTML, CSS, and JavaScript. It generates random passwords through JavaScript and provides a simple, user-friendly interface for quickly creating stronger passwords.",

    tags: [
      "HTML",
      "CSS",
      "JavaScript",
    ],

    image:
      `${import.meta.env.BASE_URL}laptop-strong-password-generator.avif`,

    liveUrl:
      "https://github.com/zainabmr46-code/JavaScript-Password-Generator",

    githubUrl:
      "https://github.com/zainabmr46-code/JavaScript-Password-Generator",

    featured: true,
  },
];


// ────────────────────────────────────────────────────────────
// ARTICLES
// ────────────────────────────────────────────────────────────

export const articles = [];


// ────────────────────────────────────────────────────────────
// CODING PROFILES
// ────────────────────────────────────────────────────────────

export const codingProfiles = [
  {
    platform: "GitHub",

    handle: "@zainabmr46-code",

    url: "https://github.com/zainabmr46-code",

    stat: "5+ public repositories",
  },
];


// ────────────────────────────────────────────────────────────
// SOCIAL LINKS
// ────────────────────────────────────────────────────────────

export const socialLinks = [
  {
    label: "GitHub",

    url: "https://github.com/zainabmr46-code",
  },

  {
    label: "LinkedIn",

    url:
      "https://www.linkedin.com/in/zainab-mujeebur-rahman15/",
  },
];