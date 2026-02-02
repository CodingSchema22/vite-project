      import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="About">
      <div className="div" id="div1">
        
        {/* Text Section */}
        <motion.div
          className="text-section"
          id="About-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h1>Welcome To Feminine</h1>
          <p>
            Lorem psum dolor sit amet consectetur adipiscing eut. sed do elusmod tempor
            incididunt ut tabore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation uilamco laboris nisi ut aliquip ex ea commedo consequat.
            Duis aute rurr dolor in reprshenderit in voluptate velit esse cillum,
          </p>

          <div className="info">
            <div className="box1">
              <h3>32</h3>
              <p>Experience</p>
            </div>
            <div className="box1">
              <h3>32</h3>
              <p>Experience</p>
            </div>
            <div className="box1">
              <h3>32</h3>
              <p>Experience</p>
            </div>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="img-section"
          id="img-part"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <img src="/images/download.jpg" alt="About Image" />
        </motion.div>

      </div>
    </section>
  );
};

export default About;
