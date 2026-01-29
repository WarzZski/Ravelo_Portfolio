import heroImage from "../Pictures/Killua.webp"; 


function Home() {
  return (
    <section className="hero-section modern-hero">
      <div className="hero-image">
        <img src={heroImage} alt="Hero Illustration" />
      </div>
      <div className="hero-text">
        <span className="hero-accent">Hi, I'm</span>
        <h1>Gerswin Ravelo</h1>
        <h2>Front-End Developer</h2>
        <p>
          I create clean, user-friendly interfaces while continuously learning modern web technologies.<br/>
          I love turning ideas into interactive web experiences.
        </p>
      </div>
    </section>
  );
}

export default Home;
