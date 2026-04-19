const Habits = ({habits}) => {
  return (
    <section id="Services">
      <h2>We Can Help Transform You</h2>
      <div className="tips">
          {habits.map((item) => (
    <div className="card" key={item.id}>
      <h3>{item.heading}</h3>
      <p>{item.para}</p>
    </div>
  ))}
  </div>
    </section>
  );
};
export default Habits;
