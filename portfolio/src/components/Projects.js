import './Projects.css';
import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';


import drawings from '../data/drawingDetails';
import engineeringProjects from '../data/engineeringProjects';
import photos from '../data/photoDetails';

function Projects() {
  const navigate = useNavigate();

  const handleEpClick = (path) => {
    const id = path.replace('/', '');
    navigate(`/ep/${id}`);
  };

  return (
    <div className="projects-container">

      {/* drawings Title Banner */}
      <div className="title-banner">
        <div className="banner-content">
          {/* Repeat text multiple times for continuous scroll */}
          {[...Array(20)].map((_, i) => (
            <span key={i} className="banner-text">
              ⋆ Drawing ⋆
            </span>
          ))}
        </div>
      </div>

      {/* drawings row */}
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
            {/* Duplicate for seamless scrolling */}
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

      {/* engineering projects Title Banner */}
      <div className="title-banner ep-section">
        <div className="banner-content">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="banner-text">
              ⋆ SOFTWARE / HARDWARE ⋆
            </span>
          ))}
        </div>
      </div>

      {/* engineering projects row */}
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
                  src={ep.image} 
                  alt={ep.title}
                  className="ep-image"
                />
              </div>
            ))}
            {/* Duplicate for seamless scrolling */}
            {engineeringProjects.map((ep) => (
              <div 
                key={`dup-${ep.id}`} 
                className="ep-item"
                onClick={() => handleEpClick(ep.path)}
              >
                <div className="ep-title">{ep.title}</div>
                <img 
                  src={ep.image} 
                  alt={ep.title}
                  className="ep-image"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* photos Title Banner */}
      <div className="title-banner">
        <div className="banner-content">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="banner-text">
              ⋆ Photography ⋆
            </span>
          ))}
        </div>
      </div>

      {/* photos row */}    
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
            {/* Duplicate for seamless scrolling */}
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

// for troubleshooting
// function Projects() {
//     return (
//       <div className="projects-container">
//         {/* Test content */}
//         <div className="scroll-row">
//           <h2>Drawings Row</h2>
//           <div className="scroll-content">
//             <div>Drawing 1</div>
//             <div>Drawing 2</div>
//           </div>
//         </div>
  
//         <div className="scroll-row">
//           <h2>Projects Row</h2>
//           <div className="scroll-content">
//             <div>Project 1</div>
//             <div>Project 2</div>
//           </div>
//         </div>
  
//         <div className="scroll-row">
//           <h2>Photos Row</h2>
//           <div className="scroll-content">
//             <div>Photo 1</div>
//             <div>Photo 2</div>
//           </div>
//         </div>
//       </div>
//     );
//   }
  
//   export default Projects;