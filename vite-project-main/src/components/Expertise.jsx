import { motion } from "framer-motion";

const levels = [
  { id: "b1", label: "React", value: 80, color: "#f1cfb2" },
  { id: "b2", label: "Node.js", value: 70, color: "#f0872b" },
{ id: "b3", label: "Mongo DB", value: 60, color: "#c80b7c" },
{ id: "b4", label: "Next.js", value: 50, color: "#6c63ff" }
];

const Expertise = () => {
  return (
    <section id="Expertise">
      <div className="div" id="div2">
        
        {/* Text Section */}
        <div className="text-section">
          <h2>Proving Our Expertise</h2>
          <div className="levels">
            {levels.map((level, index) => (
              <div className="level-container" key={level.id}>
                <span className="level-label">{level.label}</span>
                <div className="level-bar-bg">
                <motion.div
  className="level-bar-fill"
  style={{ backgroundColor: level.color }}
  initial={{ width: 0 }}
  whileInView={{ width: `${level.value}%` }}
  viewport={{ once: true }}
  transition={{ duration: 1, delay: index * 0.3 }}
>
  <span className="level-value">{level.value}%</span>
</motion.div>
                </div>
              </div>
            ))}
          </div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Check !
          </motion.button>
        </div>

        {/* Image Section */}
        <motion.div
          className="img-section"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <img src="/images/download-_3__1.jpg" alt="Expertise Image" />
        </motion.div>
      </div>
    </section>
  );
};

export default Expertise;

