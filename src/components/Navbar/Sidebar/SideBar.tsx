import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { FaFileCode } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { RiContactsFill } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import useMediaQuery from '../../../hooks/useMediaQuery';
import './sidebar.scss';

export interface SideBarProps {
  children?: any;
}

const SideBar: React.FC<SideBarProps> = ({ children }) => {
  const matches = useMediaQuery('(min-width: 992px)');

  return (
    <div className="sidebar-main-container">
      <div className="sidebar-container">
        <ul className="sidebar-ul d-992-none">
          <NavLink to="/home">
            <li className="sidebar-li">
              <AiFillHome />
            </li>
          </NavLink>
          <NavLink to="/about-me">
            <li className="sidebar-li">
              <RiContactsFill />
            </li>
          </NavLink>
          <NavLink to="/works">
            <li className="sidebar-li">
              <FaFileCode />
            </li>
          </NavLink>
          <NavLink to="/contact-me">
            <li className="sidebar-li">
              <IoMdMail />
            </li>
          </NavLink>
        </ul>
      </div>
      <div className={`h-100 ${matches ? 'd-flex w-100' : ''}`}>{children}</div>
    </div>
  );
};

export default SideBar;
