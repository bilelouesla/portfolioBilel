import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  GreetingsType,
  ProjectType,
  SEODataType,
  SkillBarsType,
  SkillsSectionType,
  SocialLinksType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Bilel Oueslati",
  title: "Hi all, I'm Bilel",
  description:
    "With a robust 12-year tenure on Information Technology Project Management teams, I have honed my leadership abilities and fortified my reputation through effective communication. My journey in the dynamic realm of IT has ingrained in me the essence of adaptability, a trait that is indispensable in this ever-changing industry. I am enthusiastic about the prospect of bringing my deep-seated expertise and fervor for IT and Web Development to a forward-thinking company. I welcome the chance to connect regarding potential opportunities and engage in meaningful dialogue. Please do not hesitate to contact me.",
  resumeLink: "#",
};

export const openSource = {
  githubUserName: "",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:bileloueslati07@gmail.com",
  linkedin: "https://www.linkedin.com/in/oueslati-bilel-71143071/",
  github: "https://github.com/bilelouesla",
  instagram: "https://www.instagram.com/oueslati2461/",
  // facebook: 'https://www.facebook.com/1hanzla100',
  // twitter: 'https://twitter.com/1hanzla100',
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"),
        emoji("⚡ Building responsive static websites using Next.js"),
        emoji("⚡ Building RESTful APIs in Springboot & Angular  Framework"),
      ],
      softwareSkills: [
        
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        /*
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },*/

        {
          skillName: "TypeScript",
          iconifyTag: "vscode-icons:file-type-typescript",
        },
        {
          skillName: "HTML5",
          iconifyTag: "vscode-icons:file-type-html",
        },
        
        
        {
          skillName: "Netlify",
          iconifyTag: "vscode-icons:file-type-netlify",
        },
        
        {
          skillName: "Nextjs",
          iconifyTag: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "Angular",
          iconifyTag: "vscode-icons:file-type-angular",
        },
       
        {
          skillName: "AWS",
          iconifyTag: "logos:aws",
        },
        {
          skillName: "CSS3",
          iconifyTag: "vscode-icons:file-type-css",
        },
        {
          skillName: "Flutter",
          iconifyTag: "vscode-icons:file-type-flutter",
        },      
        
        {
          skillName: "Heroku",
          iconifyTag: "logos:heroku-icon",
        },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
        {
          skillName: "Docker",
          iconifyTag: "logos:docker-icon",
        },
        {
          skillName: "Node",
          iconifyTag: "logos:nodejs",
        },
        {
          skillName: "Express",
          iconifyTag: "logos:express",
        },
        {
          skillName: "MySQL",
          iconifyTag: "logos:mysql",
        },
        {
          skillName: "MongoDB",
          iconifyTag: "logos:mongodb",
        },
        {
          skillName: "Redux",
          iconifyTag: "logos:redux",
        },
        {
          skillName: "Tailwind CSS",
          iconifyTag: "vscode-icons:file-type-tailwind",
        },
        {
          skillName: "Bootstrap",
          iconifyTag: "logos:bootstrap",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "85", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "90",
  },
  {
    Stack: "Programming",
    progressPercentage: "95",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "ESPRIT",
    subHeader: "IT-Engineer",
    duration: "September 2012 - decembre 2016",
    desc: "",
    grade: "Engineer",
    descBullets: [], // Array of Strings
  },
  {
    schoolName: "ISET'COM",
    subHeader: "Telecommunication Technician",
    duration: "FEB 2008 - Juin 2010",
    desc: "",
    grade: "Telecommunication Technician ",
    descBullets: [], // Array of Strings
  },
];

export const experience: ExperienceType[] = [
  {
    role: "IT Analyst",
    company: "CIFODE'COM",
    companyLogo: "data:image/jpeg;base64,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",
    date: "Aug 2022 - Present",
    desc: "In my role, I conducted a comprehensive needs analysis, meticulously crafting detailed technical specifications to provide clear guidance for project development. I assumed responsibility for managing and administering the local network infrastructure, diligently ensuring robust connectivity and system integrity. Regular execution of data backups, ERP system administration, and various software installations became integral tasks in maintaining operational efficiency. Additionally, I took charge of overseeing domain administration and conducted routine system updates to ensure both security and up-to-date functionality within the organization.",
  },
 
  {
    role: "Full Stack Developer",
    company: "Smart Tunisian Technoparks S2T",
    companyLogo: "https://www.mtc.gov.tn/uploads/pics/s2t.jpg",
    date: "FEB 2017 - Today",
    desc: "My expertise extends to the proficient configuration, installation, and administration of the Moodle 4.2.1 Learning Management System, facilitating seamless remote education delivery. I took the lead in internship initiatives, offering mentorship in ReactJS to foster the development of web projects, including portfolios and e-commerce sites. Utilizing in-depth user needs assessments, I crafted precise technical specifications to guide project development. Taking charge of the end-to-end development process, I successfully directed the creation of the Eshop website for Fablab S2T, employing both front-end and back-end technologies. Additionally, I innovated dynamic web-based event spaces using a range of technologies such as VanillaJS, CSS3, PHP, MEAN Stack, MERN Stack, and Nextjs. Concurrently, I managed domain name registrations and coordinated web hosting solutions to ensure a seamless online presence.",
  },
 
];

export const projects: ProjectType[] = [
  {
    name: "developer-portfolio",
    desc: "Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.",
    github: "https://github.com/1hanzla100/developer-portfolio",
    link: "https://developer-portfolio-1hanzla100.vercel.app/",
  },
  {
    name: "Giebo",
    desc: "A Podcast Platform where creators can easily publish and sell their podcasts, and users can purchase with Handcash BitcoinSV, the future of fast and secure transactions.",
    link: "https://gibeo.io/",
  },
  {
    name: "O Mejor Oferta",
    desc: "O Mejor Oferta is a mobile marketplace for buying and selling items nearby, helping users find deals on things they want and make money from items they no longer need.",
    link: "https://play.google.com/store/apps/details?id=com.duseca.mejor_oferta",
  },
  {
    name: "Hooligan Culture",
    desc: "A Ecommerce Platform, where shopping meets the future! With HandCash BitcoinSV integration, you can authenticate and purchase products with ease and confidence.",
    link: "https://hooliganculture.com/",
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: "Amine Hmadi",
    role: "Frontend Developer at Meganos Software",
    feedback:
      "You were a wonderful addition to our team, alhumdulillah. I'm quite impressed with your abilities and professional practices. You approach problems from a unique perspective and always ask the right question. Finding a good teammate like Hanzla is extremely difficult. He has contributed to the growth of our organization and continues to do so. May Allah bless you with everything you desire.",
  },
  {
    name: "Sofiene Hemissi",
    role: "PDG at S2T",
    feedback:
      "Bilel has a deep understanding of web development technologies and is adept at using them to build scalable, robust, and secure web applications. He has worked on various projects, ranging from small-scale to large-scale, and has shown his ability to work collaboratively with others while maintaining a high level of productivity and quality. Bilel is a pleasure to work with, and I have no doubt that he will be an asset to any team or organization. I highly recommend Bilel for any Full Stack Development, React.js, or Blockchain development projects, and I wish him all the best in his future endeavors.",
  },

];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Bilel Oueslati",
  description: greetings.description,
  author: "Bilel Oueslati",
  image: "",
  url: "https://developer-portfolio-1hanzla100.vercel.app",
  keywords: [
    "Bilel",
    "Bilel Oueslati",
    "@1hanzla100",
    "",
    "Portfolio",
    "Bilel Portfolio ",
    "Bilel Oueslati Portfolio",
  ],
};
