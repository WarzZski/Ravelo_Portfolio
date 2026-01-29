
function Projects() {
  return (
    <section className="projects modern-projects">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-list">
        <div className="project-card" data-tooltip="Built with React, responsive design, and modern CSS">
          <span className="project-icon">🌐</span>
          <div>
            <h3>Personal Portfolio Website</h3>
            <p>A responsive personal portfolio built with React to showcase my projects, skills, and learning journey.</p>
          </div>
        </div>
        <div className="project-card" data-tooltip="React app for managing tasks and learning state management">
          <span className="project-icon">📝</span>
          <div>
            <h3>To-Do List App</h3>
            <p>A simple to-do list application built with React to practice state management and user interaction.</p>
          </div>
        </div>
        <div className="project-card" data-tooltip="UI/UX focused, inspired by modern landing pages">
          <span className="project-icon">🎯</span>
          <div>
            <h3>Landing Page UI Clone</h3>
            <p>A UI-focused landing page inspired by modern websites to improve layout, visual hierarchy, and design consistency.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
