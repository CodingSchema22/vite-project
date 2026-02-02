import { motion } from "framer-motion";


import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav
  initial={{ y: -100 }}
  animate={{ y: 0 }}
  transition={{ duration: 0.6 }}
>

<section className="Navbar">
  <div className="main">
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="logo">MySite</h1>

        {/* Hamburger menu for mobile */}
        <button className="menu-toggle" onClick={toggleMenu}>
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Links */}
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><a href="#Home">Home</a></li>
          <li><a href="#About">About</a></li>
          <li><a href="#Habits">Habits</a></li>
          <li><a href="#Expertise">Experstise</a></li>
          <li><a href="#Contact">Contact-us</a></li>
        </ul>
      </div>
    </nav>
    </div>
    </section>
    </motion.nav>
  );
}

export default Navbar;
