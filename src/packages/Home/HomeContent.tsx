import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import useMediaQuery from '../../hooks/useMediaQuery';
import './home-content.scss';

const LeftContent = () => {
  const matches = useMediaQuery('(max-width:992px)');

  return (
    <div
      className={`${
        matches ? 'w-100 p-4' : 'w-100'
      } h-100 d-flex flex-column align-items-center justify-content-center`}
    >
      <div className="d-flex justify-content-center align-items-center flex-column">
        <span className="welcome">
          Hello, my name is Ethan, I build things as a
        </span>
        <span className="front-end">FRONTEND DEVELOPER</span>
        <div className="d-flex mt-4 justify-content-center align-items-center flex-column">
          <span
            style={{ lineHeight: '20px', opacity: '0.8' }}
            className="left-content-subtitle text-center"
          >
            With experience of 1 year I have been working on different projects
            where I was transforming problems and opportunities into user-driven
            strategic solutions through enjoyable and intuitive interface design
          </span>
          <div className="home-icons">
            <span className="m-3">
              <a
                target="_blank"
                href="https://github.com/ethantaylan/"
                className="my-2"
              >
                <span className="text-decoration-underline-hover">
                  <AiFillGithub size={30} />
                </span>
              </a>
            </span>
            <span className="m-3">
              <a
                target="_blank"
                href="https://github.com/ethantaylan/"
                className="my-2"
              >
                <span className="text-decoration-underline-hover">
                  <AiFillLinkedin size={30} />
                </span>
              </a>
            </span>
            <span className="m-3">
              <a
                target="_blank"
                href="https://github.com/ethantaylan/"
                className="my-2"
              >
                <span className="text-decoration-underline-hover">
                  <AiFillInstagram size={30} />
                </span>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftContent;
