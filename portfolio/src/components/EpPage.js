import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './EpPage.css';
import mouthIcon from "../icons/mouth0.png";
import mouthIcon1 from "../icons/mouth2.png";
import homeIcon from "../icons/donotdisturb.png";

const EpPage = ({ projects }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Find the project that matches the URL parameter
  const project = projects.find(p => p.path === `/${id}`);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="ep-page">
      {/* <div className="nav-container.ep-page">
        <div className="nav-item" onClick={() => navigate('/projects')}>
          <img src={mouthIcon} alt="Projects" className="icon-default" style={{ width: '48px', height: '48px' }} />
          <img src={mouthIcon1} alt="Projects" className="icon-hover" style={{ width: '48px', height: '48px' }} />
          <span className="nav-text">Projects</span>
        </div>
        <div className="nav-item" onClick={() => navigate('/', { state: { skipAnimation: true } })}>
          <img src={homeIcon} alt="Home" className="icon-default" style={{ width: '40px', height: '40px' }} />
          <img src={homeIcon} alt="Home" className="icon-hover" style={{ width: '40px', height: '40px' }} />
          <span className="nav-text">Home</span>
        </div>
      </div> */}
        <div className="ep-nav-icons">
          <a href="/projects" className="home-link">
            <img src={mouthIcon} alt="Projects" className="home-icon"/>
          </a>
          <a href="/" className="home-link" onClick={() => navigate('/', { state: { skipAnimation: true } })}>
            <img src={homeIcon} alt="home" className="home-icon" />
          </a>          
        </div>
      <div className="ep-content">
        <h1>{project.title}</h1>
        {/* <h2>{project.subtitle}</h2> */}
        <div className="ep-subtitle">{project.subtitle}</div>
        <img 
          src={project.teaser} 
          alt={project.title} 
          className="ep-teaser"
        />
        <div className="ep-description">
          <p>{project.description}</p>
          {/* Add more project details here */}
        </div>
      </div>
    </div>
  );
};

export default EpPage;