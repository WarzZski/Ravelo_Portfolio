import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Learning from "./pages/Learning";
import Contact from "./pages/Contact";
import "./App.css";
import './Contact.css';
import './Learning.css';



function App() {
  return (
    <Router>
      <div className="App">

        {/* Top-right navigation */}
        <nav className="top-nav">
          <NavLink to="/" className={({ isActive }) => isActive ? 'btn active' : 'btn'}>Home</NavLink>
          <NavLink to="/projects" className={({ isActive }) => isActive ? 'btn active' : 'btn'}>Projects</NavLink>
          <NavLink to="/learning" className={({ isActive }) => isActive ? 'btn active' : 'btn'}>Learning</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'btn active' : 'btn'}>Contact</NavLink>
        </nav>

        
        {/* Routes */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
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
