import profile from '../assets/profile/hololens.png';
import homeIcon from '../icons/tree.png';
import homeIcon1 from '../icons/tree1.png';
import { useNavigate } from 'react-router-dom';

function About() {
    const navigate = useNavigate();
    return (
      <div className="about-container">
        <div className="about-content">
          <img 
            src={profile} 
            alt="profile" 
            className="profile-photo"
          />
          <p className="about-text">
          Hi, I’m Xintong — a polymath engineer passionate about human-computer interaction, audio signal processing, and visual art. 
          I create tangible technologies that inspire, blending art and engineering into seamless experiences.
          <br></br>
          Previously, I was a research assistant at <a href="https://siplab.org">SIPLab</a> at ETH Zürich, where I completed my master's in robotics. 
          Before that, I spent two years as a systems engineer at <a href="https://technology.nasa.gov/patent/MSC-TOPS-60">ARGOS</a>, 
          a gravity simulator at NASA Johnson Space Center's robotics branch. 
          </p>
          <div className="nav-item-page" style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="nav-item" onClick={() => navigate('/', { state: { skipAnimation: true } })}>
              <img src={homeIcon} alt="home" className="icon-default" />
              <img src={homeIcon1} alt="home" className="icon-hover" />
              <span className="nav-text">home</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default About;