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
  nextjs,bootstrap,mui,django,sc,
  juncture,cw,teenhug,
  unique,codeworms,hp, academic,
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
    title: "React.js Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Bootstrap CSS",
    icon: bootstrap,
  },
  {
    name: "Styled Components",
    icon: sc,
  },
  {
    name: "Material UI",
    icon: mui,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Django",
    icon: django,
  },

  {
    name: "git",
    icon: git,
  },

];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Juncture",
    icon: juncture,
    iconBg: "#383E56",
    date: "July 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and giving instructions to other developers.",
    ],
  },
  {
    title: "Next.js Developer",
    company_name: "Code-Worms",
    icon: cw,
    iconBg: "#E6DEDD",
    date: "March 2023 - April 2023",
    points: [
      "Implemented a search functionality for users to find movies by title, genre, or other criteria.",
      "Optimized the website for performance, including code splitting, lazy loading, and image optimization.",
      "Implemented responsive design principles to ensure the website looks great on different screen sizes.",
      "Collaborated with back-end developers to integrate the front-end with the server-side functionality.",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  {
    title: "Content-Writer",
    company_name: "Teen Hug",
    icon: teenhug,
    iconBg: "#E6DEDD",
    date: "June 2020 - January 2021",
    points: [
      'Successfully balanced volunteering with academic and family responsibilities, showcasing effective time management and discipline.',
      'Developed improved time management, prioritization, and communication skills through the volunteering experience.',
      'Gained practical experience in content creation and developed a better understanding of the challenges faced by youth.',
      'Produced consistent high-quality content and improved proficiency in writing for a specific audience.',
    ],
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
    name: "Code Worms",
    description:
      "As a user-friendly platform with an intuitive interface, CodeWorms provides seamless navigation and high-quality streaming, making it the go-to destination for film enthusiasts seeking top-notch entertainment.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "styled-components",
        color: "pink-text-gradient",
      },
    ],
    image: codeworms,
    source_code_link: "https://github.com/Ryan-100/code-worms",
    host_link:"https://code-worms-streaming.vercel.app/welcome",
  },
  {
    name: "Client's Portfolio",
    description:
      "A diverse portfolio showcasing academic achievements, language proficiency, and a dedication to empowering learners through engaging and interactive teaching methodologies and future creative routes showcase.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: hp,
    source_code_link: "https://github.com/Ryan-100/honey-portfolio",
    host_link:"https://honey-portfolio-beige.vercel.app/",
  },
  {
    name: "Unique Private School",
    description:
      "A private school with top-notch facilities and an IT training center which gives a professional and engaging experience for students, while also emphasizing the importance of innovation and growth in the field of technology.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: unique,
    source_code_link: "https://github.com/",
    host_link:"https://unique_school.vercel.app",
  },
  {
    name: "My Academic Portfolio",
    description:
      "Explore the exceptional portfolio of a passionate and outstanding student, showcasing remarkable achievements and impressive accomplishments. Powered by Wix.com, this website is a testament to dedication, talent, and boundless potential.",
    tags: [
      {
        name: "wix",
        color: "blue-text-gradient",
      },
      {
        name: "creativity",
        color: "green-text-gradient",
      },
      {
        name: "customize",
        color: "pink-text-gradient",
      },
    ],
    image: academic,
    source_code_link: "https://github.com/",
    host_link:"https://kyawzinhtet6388.wixsite.com/my-site-1",
  },
];

export { services, technologies, experiences, testimonials, projects };
