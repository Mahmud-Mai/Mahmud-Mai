import {
  admin_dashboard,
  chakraui,
  cvas,
  pers_portfolio,
  greenby,
  tailwind,
  zelo,
} from "../assets";
import {
  express,
  mongodb,
  wordpress,
  css,
  git,
  html,
  javascript,
  mui,
  node,
  react,
  redux,
  sass,
} from "../assets/index.js";

export const resumeData = [
  {
    index: 0,
    companyName: "Greenby International",
    companyLink: "greenby.ng",
    startYear: 2019,
    endYear: "",
    role: "Frontend Developer",
  },
  // {
  //   index: 1,
  //   companyName: "NgSoft Services limited",
  //   companyLink: "https://greenby.ng",
  //   startYear: 2020,
  //   endYear: 2020,
  //   role: "Fullstack Developer",
  // },
  {
    index: 2,
    companyName: "Artex",
    companyLink: "https://twitter.com/art_ex_shop",
    startYear: "June 2023",
    endYear: "Augugst 2023",
    role: "Fullstack Developer (contract)",
  },
  {
    index: 4,
    companyName: "ALX",
    companyLink: "https://www.alxafrica.com/",
    startYear: 2022,
    endYear: "",
    role: "Software Engineer (student)",
  },
  {
    index: 5,
    companyName: "Zelo Integrated Global Synergy",
    companyLink: "https://zelogroup.ng",
    startYear: 2019,
    endYear: 2019,
    role: "Website Development (contract)",
  },
  {
    index: 6,
    companyName: "ABU Zaria",
    companyLink: "https://www.abu.edu.ng",
    startYear: 2017,
    endYear: "2023",
    role: "BSc Computer Science",
  },
];

export const skillData = [
  { index: 0, imgSrc: react, skillName: "React" },
  { index: 1, imgSrc: express, skillName: "express" },
  { index: 2, imgSrc: node, skillName: "Node" },
  { index: 3, imgSrc: mongodb, skillName: "mongodb" },
  { index: 4, imgSrc: wordpress, skillName: "wordpress" },
  { index: 5, imgSrc: html, skillName: "html" },
  { index: 6, imgSrc: css, skillName: "css" },
  { index: 7, imgSrc: javascript, skillName: "Javascript" },
  { index: 8, imgSrc: mui, skillName: "MUI" },
  { index: 9, imgSrc: chakraui, skillName: "chakra Ui" },
  { index: 10, imgSrc: tailwind, skillName: "tailwind" },
  { index: 11, imgSrc: redux, skillName: "redux" },
  { index: 12, imgSrc: sass, skillName: "sass" },
  { index: 13, imgSrc: git, skillName: "git" },
];

export const projectData = [
  {
    index: 0,
    imgSrc: cvas,
    siteLink: "https://http://abu-campus-vehicle-access.onrender.com/",
    codeLink: "https://github.com/Mahmud-Mai/abu-campus-vehicle-access",
    altText: "ABU Campus Vehicle Access System",
    heading: "ABU Campus Vehicle Access System",
    details:
      "Still a work in progress...  A web app that uses computer vision to detect vehicle plate numbers and grant entry to the university premises.",
    techUsed:
      "React, MongoDB, Express, Node, Tesseract, React-Webcam, Redux toolkit, react-qrcode, AG grid, Chakra UI",
  },
  {
    index: 1,
    imgSrc: greenby,
    siteLink: "https://greenby.ng",
    codeLink: "#",
    altText: "Greenby Website",
    heading: "Greenby Website",
    details:
      "I have been actively involved in the full lifecycle of the website's rebranding, from development and maintenance to consultation.",
    techUsed: "Wordpress, Figma",
  },
  {
    index: 2,
    imgSrc: zelo,
    siteLink: "https://zelogroup.ng",
    codeLink: "#",
    altText: "Zelo group",
    heading: "Zelo group",
    details:
      "This project was to build a website for Zelo Group Integrated Global Synergy Ltd. It features a responsive design",
    techUsed: "Wordpress, Elementor",
  },
  {
    index: 3,
    imgSrc: admin_dashboard,
    siteLink: "https://admin-dashboard-client-p07m.onrender.com",
    codeLink: "https://github.com/Mahmud-Mai/admin-dashboard-client",
    altText: "Admin Dashboard",
    heading: "Admin Dashboard",
    details:
      "This project was to create a full-stack admin dashboard that features the display of data using Nivo Charts, Redux Toolkit, and MUI",
    techUsed:
      "React, MongoDB, Express, Node, Material UI, RTK Query, MUI data Grid, Nivo Charts",
  },
  {
    index: 4,
    imgSrc: pers_portfolio,
    altText: "Developer Portfolio",
    siteLink: "#",
    codeLink: "https://github.com/Mahmud-Mai/portfolio-mahmud-01",
    heading: "Personal Portfolio Website",
    details:
      "A personal portfolio website to showcase my skills and experience as a web developer. It features a responsive design that is optimized for mobile devices",
    techUsed: "React, Tailwind CSS",
  },
];
