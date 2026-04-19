import { motion } from "framer-motion";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Website",
      description:
        "A fully functional e-commerce website built with React, Context API, and cart system.",
      image: "/images/project1.jpg",
      live: "https://your-live-link.com",
      github: "https://github.com/your-repo"
    },
    {
      id: 2,
      title: "Portfolio Website",
      description:
        "Modern personal portfolio with smooth animations and responsive design.",
      image: "/images/project2.jpg",
      live: "https://your-live-link.com",
      github: "https://github.com/your-repo"
    },
    {
      id: 3,
      title: "Todo App",
      description:
        "Simple task management app with add, delete, and filter features.",
      image: "/images/project3.jpg",
      live: "https://your-live-link.com",
      github: "https://github.com/your-repo"
    },
    {
      id: 4,
      title: "Weather App",
      description:
        "Weather forecast app using API integration and real-time data.",
      image: "/images/project4.jpg",
      live: "https://your-live-link.com",
      github: "https://github.com/your-repo"
    },
    {
      id: 5,
      title: "Blog UI Design",
      description:
        "Clean blog interface design focusing on typography and layout.",
      image: "/images/project5.jpg",
      live: "https://your-live-link.com",
      github: "https://github.com/your-repo"
    },
    {
      id: 6,
      title: "Landing Page",
      description:
        "Responsive landing page for a startup with modern UI design.",
      image: "/images/project6.jpg",
      live: "https://your-live-link.com",
      github: "https://github.com/your-repo"
    }
  ];

  return (
    <section id="projects" className="projects-section">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="projects-heading"
      >
        <h2>My Projects</h2>
        <p>Some things I’ve built recently</p>
      </motion.div>

      {/* Grid */}
      <div className="projects-grid">
        {projects.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="project-card"
          >
            <img src={item.image} alt={item.title} />

            <div className="project-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>

              <div className="project-links">
                {item.live && (
                  <a href={item.live} target="_blank">
                    Live
                  </a>
                )}

                {item.github && (
                  <a href={item.github} target="_blank">
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;