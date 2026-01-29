
function Learning() {
  return (
    <div className="container">
      <section className="learning modern-learning">
        <h2 className="learning-title">Currently Learning</h2>
        <p className="learning-description">
          <span className="learning-accent">Always Growing:</span> I am constantly sharpening my skills to build modern, responsive, and accessible web applications. Here are the topics I’m focused on right now:
        </p>
        <ul className="learning-list">
          <li data-tooltip="React is used for building interactive UIs and managing state efficiently.">
            <span className="learning-icon">⚛️</span> React fundamentals
          </li>
          <li data-tooltip="Learn to design interfaces that are intuitive and user-friendly.">
            <span className="learning-icon">🎨</span> UI/UX design principles
          </li>
          <li data-tooltip="Creating layouts that work perfectly on all screen sizes.">
            <span className="learning-icon">📱</span> Responsive web design
          </li>
          <li data-tooltip="Mastering Flexbox & Grid to build complex layouts with ease.">
            <span className="learning-icon">🧩</span> CSS Flexbox & Grid
          </li>
          <li data-tooltip="Making websites accessible to all users, including those with disabilities.">
            <span className="learning-icon">♿</span> Basic web accessibility
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Learning;
