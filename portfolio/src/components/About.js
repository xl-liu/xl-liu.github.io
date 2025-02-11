import profile from '../assets/pizza.jpg';

function About() {
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
          Previously, I was a research assistant at <a href="https://siplab.org">SIPLab</a> at ETH Zurich, where I completed my master's in robotics. 
          Before that, I spent two years as a systems engineer at <a href="https://technology.nasa.gov/patent/MSC-TOPS-60">ARGOS</a>, 
          a gravity simulator at NASA Johnson Space Center's robotics branch. 
          </p>
        </div>
      </div>
    );
  }
  
  export default About;