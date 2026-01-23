function Learning() {
  return (
    <div className="container">
      <section className="learning">
        <h2>Currently Learning</h2>

        <p className="learning-description">
          I am constantly sharpening my skills to build modern, 
          responsive, and accessible web applications. Currently, I am 
          focusing on these essential topics to enhance my frontend 
          development and design expertise:
        </p>

        <ul className="learning-list">
          <li data-tooltip="React is used for building interactive UIs and managing state efficiently.">
            React fundamentals
          </li>
          <li data-tooltip="Learn to design interfaces that are intuitive and user-friendly.">
            UI/UX design principles
          </li>
          <li data-tooltip="Creating layouts that work perfectly on all screen sizes.">
            Responsive web design
          </li>
          <li data-tooltip="Mastering Flexbox & Grid to build complex layouts with ease.">
            CSS Flexbox & Grid
          </li>
          <li data-tooltip="Making websites accessible to all users, including those with disabilities.">
            Basic web accessibility
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Learning;
