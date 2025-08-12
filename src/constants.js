// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';
// Project Section Logo's
import foodDeliImg from './assets/Projects/foodDeli.png'
import animationimg from './assets/Projects/Animation-website.png'
import pastevaltimg from './assets/Projects/PasteVault.jpeg'
import BlinkitImg from "./assets/Projects/Blinkit.jpeg"
import JwtImg from "./assets/Projects/JWT.jpeg"
import Myntra from './assets/Projects/MYNTRA.jpeg'
import editorapp from "./assets/Projects/editorApp.jpeg"
import crudOperationImg from './assets/Projects/crud_operation.png'
// Education Section Logo'
import bwu from "./assets/education/bwu.jpeg"
import pit from "./assets/education/pit.jpeg"
import jharkand from "./assets/education/jharkand.avif"



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      // { name: 'Netlify', logo: netlifyLogo },
      // { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  
  export const projects = [
    {
      id: 0,
      title: "Animation-website",
      description:
        "A fun and lively Minion‑themed website built with React, styled using Tailwind CSS, and brought to life with smooth animations powered by Framer Motion. This interactive site captures the mischievous charm of the Minions, making it a delightful experience for visitors. Deployed on GitHub Pages, it’s easily accessible and showcases a modern A fun and lively Minion‑themed website built with React, styled using Tailwind CSS, and brought to life with smooth animations powered by Framer Motion. This interactive site captures the mischievous charm of the Minions, making it a delightful experience for visitors. Deployed on GitHub Pages, it’s easily accessible and showcases a modern",
      image: animationimg,
      tags: ["React JS", "TailwindCSS", "Framer-motion", "More"],
      github: "https://github.com/ashu1144/Animation-website",
      webapp: "https://ashu1144.github.io/Animation-website/",
    },
    {
      id: 1,
      title: "PasteVault",
      description:
        " Create, Store, Edit, and Delete Pastes: Allows users to manage pastes with options to create, store, edit, or delete.",
      image: pastevaltimg,
      tags: ["React JS", "Redux", "TailwindCSS", "JSX", "More"],
      github: "https://github.com/ashu1144/pasteVault",
      webapp: " ",
    },
    {
      id: 3,
      title: "User CRUD Application",
      description:
        "This project is a full-stack User Management Application that demonstrates CRUD (Create, Read, Update, Delete) operations using React, Express.js, and MongoDB",
      image: crudOperationImg,
      tags: ["Express.js", "MongoDB", "React.js ", "Tailwind CSS", "More"],
      github: "https://github.com/ashu1144/Crud-Operations",
      webapp: " ",
    },
    {
      id: 3,
      title: " Blinkit Web Clone",
      description:
        "I built a responsive Blinkit web clone using HTML, CSS, and JavaScript, designed to work seamlessly on 📱 mobile & 🖥️ PC and tablets ",
      image: BlinkitImg,
      tags: ["HTML", "CSS", "Javascript", "Responsible", "more"],
      github: "https://github.com/ashu1144/blinkit_clone",
      webapp: "https://ashu1144.github.io/blinkit_clone/",
    },
    {
      id: 4,
      title: "JWT Auth System",
      description:
        "A full-stack authentication system built from scratch using Express.js and React. It features secure user registration and login with JWT token handling, where passwords are securely hashed using bcrypt, and tokens are stored in HTTP-only cookies to enhance protection against XSS and CSRF attacks. The React frontend improves user experience with real-time toast notifications and a dynamic typewriter effect for engaging UI elements📝 User Registration: Register new users with hashed passwords",
      image: JwtImg,
      tags: ["Express.js", "React.js", "(JWT)", "Api", "MongoDB", "more"],
      github: "https://github.com/ashu1144/jwt",
      webapp: " ",
    },
    {
       id: 5,
      title: "Food Delivery App",
      description:
        "I developed a fully functional food delivery web application where users can browse restaurants, view menus, and place orders. This project enhanced my skills in building interactive user interfaces, managing state, and integrating APIs for real-time data handling.",
      image: foodDeliImg,
      tags: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "API Integration",
        "Responsive",
      ],
      github: "https://github.com/ashu1144/food-delivery-web-app",
      webapp: "https://food-delivery-web-app-navy.vercel.app/", 
    },
    {
      id: 6,
      title: "Text Editor",
      description:
        "I created a text editor web application using HTML, CSS, and JavaScript. This project allowed me to strengthen my understanding of DOM manipulation, event handling, and responsive UI design while providing users with a smooth and intuitive editing experience.",
      image: editorapp,
      tags: ["HTML", "CSS", "JavaScript", "Responsive"],
      github: "https://github.com/ashu1144/text_editor", // add your repo link
      webapp: " ", // add your live app link
    },
  ];  

export const education = [
    {
      id: 0,
      img: bwu,
      school: "Brainware University",
      date: "2022 - July 2025",
      grade: "7.74 SCGPA",
      desc: "I have completed my Btech's degree (CSE) from Brainware University. During my time at BWU, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at Brainware University has been instrumental in shaping my technical abilities and professional growth.",
      degree: "BTECH CSE",
    },
    {
      id: 1,
      img: pit,
      school: "paradise institute of technology ",
      date: "2022",
      grade: "78%",
      desc: "I completed my Diploma degree in Mechanical (ME) from PIT Throughout my studies, I developed a strong foundation in core mechanical subjects such as Thermodynamics, Fluid Mechanics, Strength of Materials, and Manufacturing Processes. These courses helped me understand how mechanical systems work and how engineering principles are applied in real-world scenarios.",
      degree: "Diploma Mechanical Engineering",
    },
    {
      id: 2,
      img: jharkand,
      school: "Jharkhand State Open School",
      date: "2018",
      grade: "65.33%",
      desc: "I completed my class 10 education from jharkhand State Open School, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science etc. ",
      degree: "Class(X)",
    },
    
  ];