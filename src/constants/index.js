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
    title: "Web/Mobile Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Object Oriented Programmer",
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Python",
    icon: docker, //i kept the original docker png file and just renamed the imported file to the docker original file, and renamed the original one to my imported file which would be python.png, this is where the docker icon is located. it saved me from debugging issues
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Kotlin",
    icon: typescript, //i kept the original typescript png file and just renamed the imported file to the typescript original file, and renamed the original one to my imported file which would be typecriptkotlin.png, this is where the typescript icon is located. it saved me from debugging issues
  },
  {
    name: "Java", 
    icon: redux,  //i kept the original redux png file and just renamed the imported file to the redux original file, and renamed the original one to my imported file which would be java.png, this is where the redux icon is located. it saved me from debugging issues
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
    name: "git",
    icon: git,
  },
  {
    name: "SQL",
    icon: figma,
  },
  {
    name: "Docker",
    icon: meta, // i didnt want to re-route the file paths while adding new imports, so i changed the imported newly icons names to the old names.
  },
 
];

const experiences = [
  {
    title: "Computer Programming Diploma",
    company_name: "Algonquin College",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Sep 2021 - Dec 2023",
    points: [
      "Learned the fundamentals of computer programming, including programming concepts and syntax, algorithms, and data structures.",
      "Gain experience working with programming languages such as Java, C++, and Python.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Developed skills in software development methodologies, including Agile and Waterfall.",
      "Learned to design and develop software applications working in teams, using various technologies, including databases, web development, and mobile app development.",
      "Participate in hands-on programming projects and assignments to gain practical experience and develop a portfolio of work.",
      "Work collaboratively in teams to develop software applications and troubleshoot issues.",
      "Have access to industry-standard software development tools and technologies, including integrated development environments (IDEs) and version control systems.",
      "Have opportunities to network with industry professionals and attend events hosted by the college's industry partners.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "Haru Izakaya",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Nov 2022",
    points: [
      "Designed and developed a responsive website for a restaurant, optimizing it for both desktop and mobile devices to enhance the user experience.",
      "Collaborating with cross-functional teams including a designer, a product manager to create a high-quality product.",
      "Utilized search engine optimization (SEO) techniques to improve the website's visibility on search engines, driving more traffic to the site and increasing the restaurant's online presence.",
      "Created a user-friendly menu system that is easy to navigate and features high-quality images of the restaurant's dishes, enticing customers to visit and order.",
      "Ensured the website was secure and met industry standards for data protection and privacy, before finalizing the product and completing the product.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "Obsidian Contracting Corp.",
    icon: shopify,
    iconBg: "#383E56", 
    date: "Sep 2022 - Jan 2023",
    points: [
      "Designed and developed a modern, mobile-responsive website showcasing the company's services, portfolio, and team, with a custom CMS for easy content updates.",
      "Built a project management system with online quotation requests and customer feedback collection to streamline lead generation and monitor customer satisfaction.",
      "Designed and developed a modern, mobile-responsive website using HTML, CSS, and JavaScript React with a custom CMS and project management system.",
      "Ensured website security and data protection met industry standards, protecting sensitive information and customer data.",
      "Integrated an online quotation system and social media integration, implemented SEO techniques, and created a system for collecting customer feedback and reviews.",
       "Utilized Node.js to develop a scalable and efficient backend for the website, including database management and API integration.",
       "Ensured website security and met industry standards for data protection and privacy using HTTPS, SSL, and server-side security measures.",
       "Developed a custom reporting system that provided the client with detailed analytics on website traffic, user engagement, and lead generation.",
    ],
  },

];

const testimonials = [
  {
    testimonial:
      "Working with Shakir was a pleasure. Their expertise in web development and attention to detail helped bring our project to life. The final product exceeded our expectations and we are thrilled with the results.",
    name: "Mister Gerro",
    designation: "Hiring Manager",
    company: "Obsidian Contracting Corp.",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I highly recommend Shakir for any web development needs. His technical skills and professionalism are unparalleled. He took the time to understand our vision and delivered a website that perfectly captured our brand.",
    name: "Mister Brett",
    designation: "COO",
    company: "Obsidian Contracting Corp.",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "I have worked with many web developers in the past, but none have been as knowledgeable and efficient as Shakir. He went above and beyond to ensure that our website was not only aesthetically pleasing but also met all of our technical requirements. I look forward to working with them again in the future.",
    name: "Miss Brousseau",
    designation: "Hiring Manager",
    company: "Haru Izakaya",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Javascript A.I Chatbot",
    description:
      "I developed customizable chatbots using JavaScript and Python, with NLP and machine learning capabilities respectively. These user-friendly solutions can be easily deployed to provide businesses with automated customer support or engagement.",
    tags: [
      {
        name: "vanillajs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "expressjs",
        color: "pink-text-gradient",
      },
      {
        name: "python",
        color: "blue-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/SevTekky/talkbot",
  },
  {
    name: "Job Finder",
    description:
      "The web application provides users with the ability to search for job opportunities, access estimated salary ranges for specific positions, and locate available jobs in close proximity to their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/SevTekky",
  },
  {
    name: "A.I Image Generation App",
    description:
      "My A.I image generation app uses deep learning algorithms to create customizable and unique images, with a user-friendly interface.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "expressjs",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "blue-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/SevTekky",
  },
];

export { services, technologies, experiences, testimonials, projects };