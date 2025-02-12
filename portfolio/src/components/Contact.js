import homeIcon from '../icons/donotdisturb.png';

function Contact() {
    return (
      <div className="about-container">
        <div className="about-content">
          <p className="about-text">
            I love to collaborate with people from different fields and backgrounds. 
            Please reach out if you would like to work together!
            <br></br>
            -{'   '}
            <a href="https://www.linkedin.com/in/xintong-liu-2b022b135/">LinkedIn</a>
            {'   '}-{'   '}
            <a href="https://github.com/xl-liu">GitHub</a>
            {'   '}-{'   '}
            <a href="mailto:xintongliu211@gmail.com">Email</a>
            {'   '}-
          </p>
          <a href="/" className="home-link">
            <img src={homeIcon} alt="home" className="home-icon" />
          </a>
        </div>
      </div>
    );
  }
  
  export default Contact;