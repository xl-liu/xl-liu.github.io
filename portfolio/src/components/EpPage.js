import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './EpPage.css';

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
      <button className="back-button" onClick={() => navigate('/')}>
        ← Back
      </button>
      
      <div className="ep-content">
        <h1>{project.title}</h1>
        <img 
          src={project.image} 
          alt={project.title} 
          className="ep-hero-image"
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