import { motion } from "framer-motion";



const Hero =()=>{
    return (
        <>
        <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
>

        <section id="Home">
        <div className="div">
<div className="text-section">
    <h2>
        Your Personality is
What Makes You
Character
    </h2>
    <p>
        Loetm ipsu dolor sit amet, cansectetur adipiscing elit. Ut elit tetlus, luctus nec
ullamcorper mattis, pulvinar dapibus leo,
    </p>
        <button>
            Click Here!
        </button>
</div>
<div className="img-section">
    <img src="/images/download.jpg" />

</div>
        </div>
        </section>
        </motion.div>

        </>
    )
}
export default Hero;