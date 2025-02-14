import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './EpPage.css';
import mouthIcon from "../icons/mouth0.png";
import mouthIcon1 from "../icons/mouth2.png";
// import homeIcon from "../icons/donotdisturb.png";
import homeIcon from "../icons/tree.png";
import homeIcon1 from "../icons/tree1.png";

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
      <div className="nav-item-page">
        <div className="nav-item" onClick={() => navigate('/projects')}>
          <img src={mouthIcon} alt="projects" className="icon-default" />
          <img src={mouthIcon1} alt="projects" className="icon-hover" />
          <span className="nav-text">projects</span>
        </div>
        <div className="nav-item" onClick={() => navigate('/', { state: { skipAnimation: true } })}>
          <img src={homeIcon} alt="home" className="icon-default" />
          <img src={homeIcon1} alt="home" className="icon-hover" />
          <span className="nav-text">home</span>
        </div>
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