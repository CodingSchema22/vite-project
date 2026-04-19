import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Habits from './components/Habits'
import Expertise from './components/Expertise'
import Contact from './components/Contact'
import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";

import './App.css'
import './Navbar.css'
import './Hero.css'
import './Habits.css'
import './Expertise.css'
import './Contact.css'


const services = [
  {
    id: 1,
    heading: "Frontend Architecture",
    para: "Building scalable and maintainable frontend systems using React, Next.js, and TypeScript with clean architecture principles."
  },
  {
    id: 2,
    heading: "State Management",
    para: "Managing complex application state using Redux Toolkit, React Hooks, and modern patterns for predictable data flow."
  },
  {
    id: 3,
    heading: "API Integration & Data Fetching",
    para: "Integrating REST APIs efficiently using TanStack Query with caching, synchronization, and optimized performance."
  },
  
  {
    id: 5,
    heading: "Next.js Development",
    para: "Developing high-performance applications with SSR, SSG, and optimized routing using Next.js."
  }
];
const about = {
  heading: "About Me",
  para: "I’m a frontend developer specializing in React and Next.js, with experience in TypeScript, state management, and API integration. I build scalable, high-performance applications with clean and maintainable code."
};
const home1 = {
  heading1: "I'm Ghulam Fatima Frontend Developer"
};
const Connect = [
  { id: 1, icon: FaWhatsapp },
  { id: 2,  icon: FaInstagram },
  { id: 3,  icon: FaLinkedin }
];
function App() {
  return (
    <>
    <Navbar></Navbar>
    <Hero home1={home1}Connect = {Connect}/>
        <About about = {about} ></About>
          <Expertise></Expertise>
          <Habits habits={services}/>
    <Contact></Contact>
    </>
  )
}

export default App




























