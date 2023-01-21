import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import useMediaQuery from '../../hooks/useMediaQuery';
import './home-content.scss';

const LeftContent = () => {
  const matches = useMediaQuery('(max-width:992px)');

  return (
    <div
      className={`${
        matches ? 'w-100 p-5' : 'p-5 w-100'
      } h-100 d-flex flex-column align-items-start justify-content-center`}
    >
      <div className="d-flex align-items-start flex-column">
        <span className="welcome">
          Hello, my name is <span style={{ fontWeight: 'bold' }}>Ethan</span>, I
          build things as a
        </span>
        <span className="front-end">FRONTEND DEVELOPER</span>
        <div className="d-flex mt-5 align-items-start flex-column">
          <span
            className="left-content-subtitle text-left"
          >
            With experience of 1 year I have been working on different projects
            where I was transforming problems and opportunities into user-driven
            strategic solutions through enjoyable and intuitive interface design
          </span>
          <div className="home-icons">
              <a
                target="_blank"
                href="https://github.com/ethantaylan/"
                className="me-4 hover"
              >
                <span className="text-decoration-underline-hover">
                  <AiFillGithub size={24} />
                </span>
              </a>
              <a
                target="_blank"
                href="https://github.com/ethantaylan/"
                className="me-4 hover"
              >
                <span className="text-decoration-underline-hover">
                  <AiFillLinkedin size={24} />
                </span>
              </a>
              <a
                target="_blank"
                href="https://github.com/ethantaylan/"
                className='hover'
              >
                <span className="text-decoration-underline-hover">
                  <AiFillInstagram size={24} />
                </span>
              </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftContent;
