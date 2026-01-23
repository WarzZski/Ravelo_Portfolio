import heroImage from "../Pictures/Comp.png"; 

function Home() {
  return (
    <section className="hero-section">
      <div className="hero-text">
        <h1>Hi, I'm Gerswin Ravelo</h1>
        <h2>Front-End Developer</h2>
        <p>
          I create clean, user-friendly interfaces while continuously
          learning modern web technologies. I love turning ideas into
          interactive web experiences.
        </p>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Hero Illustration" />
      </div>
    </section>
  );
}

export default Home;
