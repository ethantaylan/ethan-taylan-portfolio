import { NavLink } from 'react-router-dom';
import useMediaQuery from '../../../hooks/useMediaQuery';
import './left-content.scss';

const LeftContent = () => {
  const matches = useMediaQuery('(max-width:992px)');

  return (
    <div
      className={`${
        matches ? 'w-100' : 'w-75'
      } h-100 d-flex flex-column align-items-center justify-content-center`}
    >
      <div className="d-flex justify-content-around flex-column">
        <div className="d-flex justify-content-around flex-column">
          <span className="welcome"> HelloIm();</span>
          <span className="name">Ethan Taylan</span>
          <span className="front-end">Frontend developer</span>
        </div>
        <div className="d-flex mt-4 justify-content-around flex-column">
          <span className="left-content-subtitle">
            // You can see my works {'->'}{' '}
            <NavLink
              style={{
                fontWeight: 'bold',
                fontStyle: 'italic',
                cursor: 'pointer'
              }}
              to="/works"
            >
              here
            </NavLink>
          </span>
          <span className="left-content-subtitle">
            // Here is my Github profile
          </span>

          <span className="github-link">
            <span style={{ color: '#4d5bce' }}>const</span>{' '}
            <span style={{ color: '#43d98f' }}>GithubLink</span> ={' '}
            <span style={{ color: 'orange' }}>
              <a
                target="_blank"
                href="https://github.com/ethantaylan/"
                className="my-2"
              >
                <span className="text-decoration-underline-hover">
                  https://github.com/ethantaylan/
                </span>
              </a>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LeftContent;
