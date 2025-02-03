import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  comm,
  tbc,
  staycon,
  unspoken,
  adminka,
  concept,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Front-end Developer",
    icon: mobile,
  },
  {
    title: "JavaScript Developer",
    icon: backend,
  },
  {
    title: "React Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "React Accelerator: Fast-Track Your Web Development Career",
    company_name: "TBC IT Academy",
    icon: tbc,
    iconBg: "#E6DEDD",
    date: "Sep 2024 - Jan 2025",
    points: [
      "React/TypeScript",
      "React Hook Form",
      "React Query",
      "Tailwind.css",
      "Shadcn/ui",
      "Context API",
      "Jotai",
      "Supabase",
      "JWT authentication",
    ],
  },
  {
    title: "Front-End Development",
    company_name: "Tbilisi school of communication",
    icon: comm,
    iconBg: "#E6DEDD",
    date: "Sep 2023 - Feb 2024",
    points: ["CSS", "HTML", "JavaScript"],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Colaborative Project - Stayconnected",
    description:
      "StayConnected is a platform designed to foster knowledge sharing among developers. It enables developers to ask questions, provide answers, and exchange valuable experiences, creating a collaborative environment for learning and growth.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "shadcn/ui",
        color: "text-customOrange",
      },
    ],
    image: staycon,
    source_code_link:
      "https://github.com/TBC-CrossLab-Group-15/stayConnected-React",
  },
  {
    name: "Unspoken Words",
    description:
      "Unspoken Words is a platform for sharing messages—either anonymously or with attribution. Users can express their thoughts by posting messages for specific recipients while exploring messages shared by others. The application provides advanced features like search, filtering, pagination, and a highly personalized user experience. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "shadcn/ui",
        color: "text-customOrange",
      },
    ],
    image: unspoken,
    source_code_link: "https://github.com/Omiadze/unspoken-words-project",
  },
  {
    name: "Admin Panel",
    description:
      "This project is a fully responsive Admin Panel that implements basic CRUD functionalities and data visualization. The application includes user authentication, management, search functionality, pagination, theme switching, language translation, and a clean UI built with React, TypeScript, Tailwind CSS, and Shadcn UI.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "shadcn/ui",
        color: "text-customOrange",
      },
    ],
    image: adminka,
    source_code_link: "https://github.com/Omiadze/admin-panel-project",
  },
  {
    name: "TBC concept",
    description:
      "TBC Concept is a website developed using HTML, CSS, and JavaScript. This project aims to provide users with an interactive and visually appealing experience.",
    tags: [
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "text-customOrange",
      },
    ],
    image: concept,
    source_code_link: "https://github.com/Omiadze/TBC-x-USAID---React-----",
  },
];

export { services, technologies, experiences, testimonials, projects };
