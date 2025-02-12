import './App.css';
// import aboutIcon from './icons/aboutme0.png';
// import aboutIcon1 from './icons/aboutme1.png';
import eyeIcon from './icons/eye0.png';
import eyeIcon1 from './icons/eye2.png';
import mouthIcon from './icons/mouth0.png';
import mouthIcon1 from './icons/mouth2.png';
import handIcon from './icons/hand0.png';
import handIcon1 from './icons/hand1.png';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import EpPage from './components/EpPage';
import engineeringProjects from './data/engineeringProjects';

function NavContent() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <div className="nav-container">
        <div className="nav-item" onClick={() => navigate('/about')}>
          <img src={eyeIcon} alt="about" className="icon-default" />
          <img src={eyeIcon1} alt="about" className="icon-hover" />
          <span className="nav-text">about</span>
        </div>
        <div className="nav-item" onClick={() => navigate('/projects')}>
          <img src={mouthIcon} alt="projects" className="icon-default"/>
          <img src={mouthIcon1} alt="projects" className="icon-hover"/>
          <span className="nav-text">projects</span>
        </div>
        <div className="nav-item" onClick={() => navigate('/contact')}>
          <img src={handIcon} alt="contact" className="icon-default"/>
          <img src={handIcon1} alt="contact" className="icon-hover"/>
          <span className="nav-text">contact</span>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<NavContent />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/ep/:id" element={<EpPage projects={engineeringProjects} />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;