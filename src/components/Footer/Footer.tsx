import { Github } from 'react-bootstrap-icons';
import { AiFillInstagram } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import './footer.scss';

export const Footer = () => {
  function exitFullScreenMode() {
    document.exitFullscreen();
  }

  return (
    <div className="global-types footer-container-main">
      <div className="d-flex h-100">
        <div className="footer-container-find-me">find-me-in</div>
        <div className="footer-container-nav">
          <ul className="footer-nav-ul">
            <a
              target="_blank"
              className="w-100 h-100"
              href="https://www.instagram.com/et.tln/"
            >
              <li className="footer-nav-li hover">
                <AiFillInstagram />
              </li>
            </a>
            <a
              target="_blank"
              className="w-100 h-100"
              href="https://fr.linkedin.com/in/ethan-taylan-697831199"
            >
              <li className="footer-nav-li hover">
                <FaLinkedinIn />
              </li>
            </a>
          </ul>
        </div>
      </div>
      <div className="d-flex h-100">
        <span
          onClick={() => exitFullScreenMode()}
          className="h-100 d-flex d-992-none justify-content-center align-items-center my-border-left px-4"
        >
          NORMAL MODE
        </span>
        <span className="version h-100 d-flex d-992-none justify-content-center align-items-center my-border-left px-4">
          v1.0.0
        </span>
        <a
          target="_blank"
          className=" h-100"
          href="https://github.com/ethantaylan"
        >
          <span className="px-4 btn-github hover">
            @ethtaylan
            <Github className="icons" />
          </span>
        </a>
      </div>
    </div>
  );
};

export default Footer;
