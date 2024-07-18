import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am an aspiring full-stack developer with a passion for creating efficient and user-friendly web applications. I have honed my skills in front-end technologies using ReactJS, as well as back-end technologies like Node/Express.js, MySQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am an aspiring full-stack developer with a passion for creating efficient and user-friendly web applications. I have gained skills working with a variety of technologies, including React, Tailwind CSS, Node.js, MySQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges.\nI thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, surfing, skating, wall climbing, running, basketball, and playing instruments.`;

export const EXPERIENCES = [
  {
    year: "Jun 2021 - Present",
    role: "Front-end Developer",
    company: "Infor PSSC, Inc",
    // description: `Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum`,
    technologies: ["React.js", "JavaScript", "HTML", "CSS"],
  },
  {
    year: "Nov 2017 - Jun 2021",
    role: "Technical Support Engineer",
    company: "Oracle Inc",
    // description: `Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum`,
    technologies: ["Oracle Taleo", "Netsuite"],
  },
  {
    year: "May 2016 - Sep 2017",
    role: "HR Talent & Engagement",
    company: "Mondelēz International",
    // description: `Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum`,
    technologies: ["SAP HCM", "SuccessFactors"],
  },
  {
    year: "Feb 2014 - Apr 2016",
    role: "HR Administrator Specialist",
    company: "Ericsson Telecommunications Inc",
    // description: `Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum`,
    technologies: ["SAP HCM", "SuccessFactors"],
  },
];

export const PROJECTS = [
  {
    title: "Coffee E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
    url: "https://gitlab.com/uplift-code-camp/students/batch-19/group-1/fs-mern-app",
    demoUrl: " https://kahpehbini.vercel.app/",
  },

  {
    title: "Quiz App Game",
    image: project2,
    description:
      "Fun trivia quiz game using public API and stores user high score",
    technologies: ["HTML", "CSS", "JavaScript"],
    url: "https://gitlab.com/uplift-code-camp/students/batch-19/nathaniel-melendrez/projects/-/merge_requests/2",
    demoUrl:
      "https://661b28e5adfe09ff374afc0e--sprightly-crumble-e463a2.netlify.app/",
  },
  {
    title: "Pixel Art Maker",
    image: project3,
    description:
      "Practice project to showcase DOM Manipulation by creating boxes as canvass and allowing users to create a pixel art",
    technologies: ["HTML", "CSS", "JavaScript"],
    url: "https://github.com/NateMelendrez/Pixel-Art-Maker",
    demoUrl: "https://natemelendrez.github.io/Pixel-Art-Maker/",
  },
  // {
  //   title: "What Country is this?",
  //   image: project4,
  //   description:
  //     "Quiz page to play country guess game, riddle me, and words scrammble",
  //   technologies: ["React", "Tailwind CSS"],
  // },
];

export const CONTACT = {
  address: "Quezon City, Manila, The Philippines",
  phoneNo: "+63 977 811 6509 ",
  email: "nathaniel.melendrez@gmail.com",
};
