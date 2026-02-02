import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 }
};

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 }
  }
};

const Habits = () => {
  return (
    <section id="Habits">
      <h2>We Can Help Transform You</h2>

      {/* Wrap all cards in a motion.div container */}
      <motion.div
        className="tips"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div className="card" variants={cardVariants}>
          <h4>Problem Solving</h4>
          <p>
            Lorem ipsum dolor sit amet. Consectetur adipisicing.
          </p>
        </motion.div>

        <motion.div className="card" variants={cardVariants}>
          <h4>Problem Solving</h4>
          <p>
            Lorem ipsum dolor sit amet. Consectetur adipisicing.
          </p>
        </motion.div>

        <motion.div className="card" variants={cardVariants}>
          <h4>Problem Solving</h4>
          <p>
            Lorem ipsum dolor sit amet. Consectetur adipisicing.
          </p>
        </motion.div>

        <motion.div className="card" variants={cardVariants}>
          <h4>Problem Solving</h4>
          <p>
            Lorem ipsum dolor sit amet. Consectetur adipisicing.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Habits;
