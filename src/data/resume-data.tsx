import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Aneudy Abreu",
  initials: "AA",
  location: "Guadalajara, Jalisco, México",
  locationLink: "https://www.google.com/maps/place/Guadalajara,+Jal./@20.6740118,-103.4177991,12z/data=!3m1!4b1!4m6!3m5!1s0x8428b18cb52fd39b:0xd63d9302bf865750!8m2!3d20.6751707!4d-103.3473385!16zL20vMGpwMjY?entry=ttu",
  about:
    "Versatile Full Stack Engineer dedicated to crafting high-quality products with meticulous attention to detail, ensuring seamless user experiences and robust functionality",
  summary:
    "As a Full Stack Engineer, I've been instrumental in guiding multiple products from ideation to implementation. With over 10 years experience, I excel in leadership, fostering an environment conducive to optimal performance. Currently, my focus lies in leveraging technologies such as C#, SQL Server, JavaScript, and Vue.js to drive innovation and deliver robust solutions.",
  avatarUrl: "https://avatars.githubusercontent.com/u/7201782?v=4",
  personalWebsiteUrl: "https://aneudyac.com",
  contact: {
    email: "aneudy91@gmail.com",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/aneudyac",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/aneudyabreu/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/aneudyac",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "UNIVERSIDAD ADVENTISTA DOMINICANA",
      degree: "Information systems engineering",
      start: "2004",
      end: "2009",
    },
  ],
  work: [
    {
      company: "ADAGIO",
      link: "https://adagio.com.mx",
      badges: [],
      title: "Software Development Manager",
      logo: null,
      start: "2012",
      end: "present",
      description: "Manage and coordinate the necessary resources related to the development and implementation of information systems.",
    },
    {
      company: "ADAGIO",
      link: "https://adagio.com.mx",
      badges: [],
      title: "Software development consultant and support",
      logo: null,
      start: "2012",
      end: "2022",
      description: "Manage and coordinate the necessary resources related to the development and implementation of information systems.",
    },
    {
      company: "Flex",
      link: "https://flex.com/",
      badges: [],
      title: "It Project Manager",
      logo: null,
      start: "2015",
      end: "2017",
      description:
        "This role focuses on delivering projects within our Strategic Programmes portfolio, which spans various enterprise technologies. These projects encompass end-user-facing solutions as well as the toolsets necessary for securing our infrastructure and facilitating IT operations.",
    },
    {
      company: "Flex",
      link: "https://flex.com/",
      badges: [],
      title: "Business Systems Analyst 2",
      logo: null,
      start: "2015",
      end: "2016",
      description:
        "The business analyst is responsible to work together with the business owner to gather and document their requirements, design process flows, software functionality and user interfaces. He/she needs to communicate with the technical team to develop the software, test it accordingly and then also help to implement it at one of Flex’ site world-wide.",
    },
    {
      company: "Publiplas",
      link: "https://www.publiplas.com/",
      badges: [],
      title: "Desktop Software Development",
      logo: null,
      start: "2011",
      end: "2012",
      description:
        "Develop new application for the company and Manage the IT Department.",
    },
   
    {
      company: "UNAD",
      link: "https://www.unad.edu.do/",
      badges: [],
      title: "Network and IT Manager",
      logo: null,
      start: "2007",
      end: "2009",
      description:
        "As the Network Administrator, I oversee the institution's network infrastructure, managing design, implementation, maintenance, and security. Additionally, I lead the IT department, coordinating efforts to ensure smooth operation of all systems and services, aligning with organizational goals for performance and security.",
    },
   
    // {
    //   company: "INSITY",
    //   link: "https://www.insity.org/",
    //   badges: [],
    //   title: "Nodejs backend developer",
    //   logo: null,
    //   start: "2020",
    //   end: "2023",
    //   description: "Create and maintain Restful API. Collaborate with Reactjs/Nextjs frontend team.",
    // },
    // {
    //   company: "Terraquo Foods",
    //   link: "https://foods.terraquo.com/",
    //   badges: [],
    //   title: "Chief Technology Officer",
    //   logo: null,
    //   start: "2020",
    //   end: "present",
    //   description: "Manage and coordinate the necessary resources related to the development and implementation of information systems.",
    // },
  ],
  skills: [
    "C#",
    "MSSQLServer",
    "JavaScript",
    "TypeScript",
    "VueJS/Nuxt",
    "Node.js",
    "React/Next.js",
    "Azure cloud",
  ],
  projects: [
    {
      title: "ADAGIO-RH",
      techStack: [
        "C#",
        "MSSQLServer",
        "Razor",
        "Telerik",
        "jQuery"
      ],
      description: "We provide innovative solutions that exceed your needs in the Human Resources sector",
      logo: null,
      link: {
        label: "adagio.com.mx",
        href: "https://adagio.com.mx/",
      },
    },
    {
      title: "INSITY",
      techStack: ["Nodejs", "MSSQLServer"],
      description:
        "Web application or platform used by organizations, schools, or institutions to manage, deliver, and track educational courses and training programs.",
      logo: MonitoLogo,
      link: {
        label: "https://www.insity.org/",
        href: "https://www.insity.org/",
      },
    },
    {
      title: "Terraquo Foods",
      techStack: ["Side Project", "Vuejs", "Firebase", "Nodejs"],
      description:
        "Your Room Service with the best restaurants in the city",
      logo: null,
      link: {
        label: "https://foods.terraquo.com",
        href: "https://foods.terraquo.com",
      },
    },
  ],
} as const;
