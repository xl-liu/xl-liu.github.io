// import homeIcon from '../icons/donotdisturb.png';
import { useNavigate } from 'react-router-dom';
import homeIcon from '../icons/tree.png';
import homeIcon1 from '../icons/tree1.png';

function Contact() {
    const navigate = useNavigate();
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
  
  export default Contact;