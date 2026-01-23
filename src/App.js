import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Projects from "./pages/Projects";
import Learning from "./pages/Learnings";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">

        {/* Hero / Home */}
        <header className="hero">
          <h1>UI/UX Enthusiast & Front-End Developer</h1>
          <p>
            I am a UI/UX enthusiast and front-end developer focused on building
            clean, user-friendly interfaces while continuously learning modern
            web technologies.
          </p>

          <div className="hero-buttons">
            <Link to="/projects" className="btn">Projects</Link>
            <Link to="/learning" className="btn">Learning</Link>
            <Link to="/contact" className="btn">Contact</Link>
          </div>
        </header>

        {/* Routes */}
        <main>
          <Routes>
            <Route path="/projects" element={<Projects />} />
            <Route path="/learning" element={<Learning />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

      </div>
    </Router>
  );
}

export default App;
