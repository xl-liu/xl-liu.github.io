import "./Projects.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import drawings from "../data/drawingDetails";
import engineeringProjects from "../data/engineeringProjects";
import photos from "../data/photoDetails";

function Projects() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - start;
      const newProgress = Math.min(100, (elapsed / 2000) * 100);
      setProgress(Math.floor(newProgress));
      if (newProgress >= 100) {
        clearInterval(timer);
        setLoading(false);
      }
    }, 30);
    return () => clearInterval(timer);
  }, []);

  const handleEpClick = (path) => {
    const id = path.replace("/", "");
    navigate(`/ep/${id}`);
  };

  const bgValue = 255 - Math.floor((progress / 100) * 255);
  const textValue = Math.floor((progress / 100) * 255);

  return (
    <div className="projects-container">
      {loading && (
        <div
          className="loader-overlay"
          style={{
            backgroundColor: `rgb(${bgValue}, ${bgValue}, ${bgValue})`
          }}
        >
          <span
            className="progress-text"
            style={{
              color: `rgb(${textValue}, ${textValue}, ${textValue})`
            }}
          >
            {progress}%
          </span>
        </div>
      )}
      <div className="title-banner">
        <div className="banner-content">
          {[...Array(20)].map((_, i) => (
            <span key={i} className="banner-text">
              ⋆ Drawing ⋆
            </span>
          ))}
        </div>
      </div>
      <div className="scroll-row">
        <div className="scroll-track">
          <div className="scroll-content">
          {drawings.map((img, index) => (
              <img 
                key={index} 
                src={img} 
                alt={`drawing ${index + 1}`} 
                className="drawing-item"
              />
            ))}
            {drawings.map((img, index) => (
              <img 
                key={`dup-${index}`} 
                src={img} 
                alt={`drawing ${index + 1}`} 
                className="drawing-item"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="title-banner ep-section">
        <div className="banner-content">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="banner-text">
              ⋆ SOFTWARE / HARDWARE ⋆
            </span>
          ))}
        </div>
      </div>
      <div className="scroll-row ep-section">
        <div className="scroll-track">
          <div className="scroll-content">
            {engineeringProjects.map((ep) => (
              <div 
                key={ep.id} 
                className="ep-item"
                onClick={() => handleEpClick(ep.path)}
              >
                <div className="ep-title">{ep.title}</div>
                <img 
                  src={ep.preview} 
                  alt={ep.title}
                  className="ep-image"
                />
              </div>
            ))}
            {engineeringProjects.map((ep) => (
              <div 
                key={`dup-${ep.id}`} 
                className="ep-item"
                onClick={() => handleEpClick(ep.path)}
              >
                <div className="ep-title">{ep.title}</div>
                <img 
                  src={ep.preview} 
                  alt={ep.title}
                  className="ep-image"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="title-banner">
        <div className="banner-content">
          {[...Array(20)].map((_, i) => (
            <span key={i} className="banner-text">
              ⋆ Photography ⋆
            </span>
          ))}
        </div>
      </div>
      <div className="scroll-row">
        <div className="scroll-track">
          <div className="scroll-content">
            {photos.map((img, index) => (
              <img 
                key={index} 
                src={img} 
                alt={`photo ${index + 1}`} 
                className="photo-item"
              />
            ))}
            {photos.map((img, index) => (
              <img 
                key={`dup-${index}`} 
                src={img} 
                alt={`photo ${index + 1}`} 
                className="photo-item"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
