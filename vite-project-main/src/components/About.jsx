const About = ({ about})=>{
  return(
    <>
                 <section id="About">
        <div className="div" id="div1">
<div className="img-section">
    <img src="/images/Hijaab-dpz.jpg" />

</div>
<div className="text-section" id="main-heading">
    <h2>
       {about.heading}
    </h2>
    <p>
{about.para}
    </p>
        <button>
            Click Here!
        </button>
</div>
        </div>

        </section>
    </>
  )
}
export default About;