import html from '../assets/html.png'
import css from '../assets/css.png'
import react from '../assets/react.png'
import js from '../assets/js.png'
import tailwind from '../assets/tailwind.png'
import redux from '../assets/redux.png'
import next from '../assets/next.png'
import firebaseNDnetlify from '../assets/firebaseNDnetlify.png'
import project1  from '../assets/project-1.png'
import project2 from '../assets/project-2.png'
import project3 from '../assets/project-3.png'
import project4 from '../assets/project-4.png'
import project5 from '../assets/project-5.png'
import project6 from '../assets/project-6.png'
import project7 from '../assets/project-7.png'



export const skillsarray = [
  {
    name: "Html",
    className :"h-1/3",
    hash :`${html}`,
    experiance: "2+ years experiance",
  },
  {
    name: "Css",
    className :"h-1/3 ",
    hash :`${css}`,
    experiance: "2+ years experiance",
  },
  {
    name: "JavaScript",
    className :"h-2/6 ",
    hash :`${js}`,
    experiance: "2+ year experiance",
  },
  {
    name: "React",
    className :"h-1/2",
    hash :`${react}`,
    experiance: "1+ year experiance",
  },
  {
    name: "Tailwind Css",
    className :"h-1/3 ",
    hash :`${tailwind}`,
    experiance: "1+ year experiance",
  },
  {
    name: "Redux",
    className :"h-1/3",
    hash :`${redux}`,
    experiance: "1+ year experiance ",
  },
  {
    name: "Next js ",
    className :"h-1/5",
    hash :`${next}`,
    experiance: "6+ months experiance ",
  },
  {
    name: "Firebase | Netlify",
    className :"h-1/2 ",
    hash :`${firebaseNDnetlify}`,
    experiance: "1+ year experiance ",
  },
  
  
]

export const links = [
    {
      name: "Home",
      hash: "",
    },
    {
      name: "About",
      hash: "about",
    },
    {
      name: "Skills",
      hash: "skills",
    },
    {
      name: "Projects",
      hash: "projects",
    },
    
    {
      name: "Contact",
      hash: "contact",
    },
  ] 
export const projects = [
  {
      name: "ecomerce | digital products",
      image : `${project1}`,
      link : 'https://ecomerce-dgital.vercel.app/',
      description: "Udemo presents online services and courses with a clean layout, featuring product images, brief descriptions, and purchase links with admin page allowing an easy addition, editing, and deletion of products.",
      technologies:'Next js | TypeScript | TailwindCSS | ShadCn | mongoDb | Prisma',
      id : 'project-1'
  },
    {
      name: "Image sharing | Social media app",
      image : `${project2}`,
      description: "ShareMe, built with React, Redux, TailwindCSS, Firebase, and Sanity CMS, features a Masonry layout, real-time updates, dynamic content discovery, and a seamless design for sharing and curating diverse content.",
      technologies:'React js | Redux | TailwindCSS | sanityCMS | Firebase',
      link : "https://sharememoh.netlify.app/",
      id : 'project-2'
    },
    {
      name: "ecomerce-app | GSAP animations ",
      image : `${project3}`,
      link : 'https://ecom-airjordan-mohsal.netlify.app',
      description: "the Air Jordan 01 sneakers on our React e-commerce app with GSAP animations, a curated collection, and seamless Stripe checkout.",
      technologies:'React js | TailwindCSS | Sanity CMS',
      id : 'project-3'
    },
    
    {
      name: "Product Management System",
      image : `${project4}`,
      link : 'https://productmanagementsystemm.netlify.app/',
      description: "Created a user-friendly CRUD and search application with HTML, CSS, and JavaScript, optimizing data management and for any products stock  ",
      technologies:'HTML | CSS | JavaScript',
      id : 'project-4'
  },
    {
      name: "Fivetek | Social Media download",
      image : `${project6}`,
      link : 'https://social-media-download-ujz3.vercel.app/',
      description: "Fivetek is a web application that allows users to download YouTube and Facebook videos , reel ,tiktok videos, with all the forms available in the API as well as mp3 form ",
      technologies:'Next js | TypeScript | TailwindCSS | ShadCn | Social media download API',
      id : 'project-6'
  },
    {
      name: "news.to |News Platform",
      image : `${project7}`,
      link : 'https://social-media-download-ujz3.vercel.app/',
      description: "news.to is a web application that gives you a large choices field of news categories with the ability to search a spicific topic and get endless news collection with the source article and news date",
      technologies:'Next js | TypeScript | TailwindCSS | ShadCn | News API',
      id : 'project-7'
    },
    {
      name: "Portfolio Website",
      image : `${project5}`,
      link : '',
      description: "Developed a dynamic React portfolio with Tailwind CSS for modern, responsive design, utilizing Redux for efficient state management and ensuring a seamless user experience.",
      technologies:'React js | TailwindCSS | Redux | Framer Motion',
      id : 'project-6'
    },
     
    
    
   
  ] 