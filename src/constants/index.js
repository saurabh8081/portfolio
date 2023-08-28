import {
  mobile,
  backend,
  programmer,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  cpp,
  wictronix,
  vf,
  crypt,
  netflix,
  threejs,
  adobe,
  sql,
  dashboard,
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
    title: "React Js Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Cpp Programmer",
    icon: programmer,
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
    name: "React JS",
    icon: reactjs,
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
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
    name: "sql",
    icon: sql,
  },
  {
    name: "cpp",
    icon: cpp,
  },
  {
    name: "adobe",
    icon: adobe,
  },
];

const experiences = [
  {
    title: "Youth Ambassador",
    company_name: "Viral Fission",
    icon: vf,
    iconBg: "#383E56",
    date: "September 2021 - March 2022",
    points: [
      "Role and Duration: Served as a Youth Ambassador at Viral Fission from September 2021 to March 2022, effectively bridging the gap between India's talented youth and beloved brands through impactful engagements.",
      "Quick Integration and Work Ethic: Demonstrated remarkable adaptability and strong work ethics during a short tenure, swiftly comprehending the organizational demands and seamlessly integrating into the team.",
      "Effective Communication and Coordination: Exhibited excellent communication and social skills, facilitating the smooth execution of campaigns by fostering collaboration across diverse departments. Skillful coordination contributed to campaign success.",
      "Insights-Driven Campaigns and Skill Development: Leveraged insightful analysis to enhance campaigns, elevating their impact and effectiveness. Contributed to enhancing the skill sets and experiences of India's Gen Z by partnering with brands to deliver innovative solutions.",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company_name: "Wictronix",
    icon: wictronix,
    iconBg: "#E6DEDD",
    date: "June 2022 - July 2022",
    points: [
      "Played a pivotal role as a Full Stack Developer within the dynamic team at Wictronix, contributing to the development and enhancement of web applications.",
      "Leveraged the MERN (MongoDB, Express.js, React, Node.js) stack to create robust and responsive user interfaces while ensuring seamless backend functionality.",
      "Collaborated closely with cross-functional teams to translate project requirements into efficient code and intuitive user experiences.",
      "Successfully delivered high-quality code, demonstrating proficiency in both front-end and back-end development, and contributing to the overall growth of the company's technical capabilities.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Saurabh proved me wrong.",
    name: "Srijan Gupta",
    designation: "CFO",
    company: "WIctronix",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Saurabh does.",
    name: "Dev Chaudhary",
    designation: "COO",
    company: "LCP ltd",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Saurabh optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Shambhavi Singh",
    designation: "CTO",
    company: "ABC Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Crypto Currency Tracker",
    description:
      "Designed and developed a dynamic cryptocurrency tracker using React.js, empowering users to effortlessly monitor real-time crypto prices and trends. The user-friendly interface offers a seamless experience for staying updated on the ever-changing world of cryptocurrencies.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "chartjs",
        color: "green-text-gradient",
      },
      {
        name: "materialui",
        color: "pink-text-gradient",
      },
    ],
    image: crypt,
    source_code_link: "https://github.com/saurabh8081/crypto-currency-tracker",
  },
  {
    name: "Cine Stream",
    description:
      " Created a netflix clone Cinestream that offers a wide selection of movies and TV shows that users can stream online.It also offer features such as personalized recommendations, the ability to create and share playlists, and the option to download content for offline viewing.",
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
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: netflix,
    source_code_link: "https://github.com/saurabh8081/cine-stream",
  },
  {
    name: "Dashboard App",
    description:
      "Presenting the Student-Teacher Dashboard App: A dynamic solution crafted to elevate the education experience. This project encapsulates a platform where teachers can effortlessly input and manage student marks across subjects, while also facilitating the swift generation of comprehensive digital report cards.",
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
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: dashboard,
    source_code_link:
      "https://github.com/saurabh8081/scaler-assignment-dashboard",
  },
];

export { services, technologies, experiences, testimonials, projects };
