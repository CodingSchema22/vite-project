import { motion } from "framer-motion";



const Hero =({home1, about,Connect})=>{
    return (
        <>
        <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
>

        <section id="Home">
        <div className="div">
<div className="text-section" id="main-heading">
    <h2>Hi,</h2>
    <h2>
       {home1.heading1} 
    </h2>    
        <button>
            Join from
        </button>
        
<div className="info">
  {Connect.map((item) => {
    const Icon = item.icon;

    return (
      <div id="cards" key={item.id}>
        <Icon className="icon" />
        <h3>{item.name}</h3>
      </div>
    );
  })}
</div>

</div>
<div className="img-section">
    <img src="/images/download-_3_.jpg" />

</div>

        </div>
        

        </section>
        </motion.div>

        </>
    )
}
export default Hero;