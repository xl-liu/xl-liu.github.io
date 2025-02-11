import './App.css';
import aboutIcon from './icons/aboutme0.png';
import aboutIcon1 from './icons/aboutme1.png';
import eyeIcon from './icons/eye0.png';
import eyeIcon1 from './icons/eye2.png';
import mouthIcon from './icons/mouth0.png';
import mouthIcon1 from './icons/mouth2.png';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import About from './components/About';

function NavContent() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <div className="nav-container">
        <div className="nav-item" onClick={() => navigate('/about')}>
          <img src={aboutIcon} alt="about" className="icon-default" />
          <img src={aboutIcon1} alt="about" className="icon-hover" />
          <span className="nav-text">about</span>
        </div>
        <div className="nav-item">
          <img src={eyeIcon} alt="projects" className="icon-default"/>
          <img src={eyeIcon1} alt="projects" className="icon-hover"/>
          <span className="nav-text">projects</span>
        </div>
        <div className="nav-item">
          <img src={mouthIcon} alt="contact" className="icon-default"/>
          <img src={mouthIcon1} alt="contact" className="icon-hover"/>
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
        </Routes>
      </div>
    </Router>
  );
}


export default App;