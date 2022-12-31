import React from 'react';
import { IoMdClose } from 'react-icons/io';
import { NavLink } from 'react-router-dom';
import useMediaQuery from '../../hooks/useMediaQuery';
import './text-emplacement.scss';

interface TextEmplacementProps {
  text: React.ReactElement;
  pathTitle: string;
  fileName: string;
}

export const TextEmplacement: React.FC<TextEmplacementProps> = ({
  pathTitle,
  text,
  fileName
}) => {
  const matches = useMediaQuery('(max-width: 768px)');

  return (
    <React.Fragment>
      <div
        className={`d-flex w-100 ${
          matches && 'my-border-top mt-5 padding-17'
        } line-height-20 flex-column`}
      >
        <NavLink to="/about-me">
          <div className="d-flex align-items-center ps-3 primary w-100 article-btn my-border-bottom">
            <span className={` ${matches ? 'w-100' : 'w-25'} me-4`}>
              {fileName}
            </span>
            <span className="tab-padding my-border-right">
              <IoMdClose className="p-0" />
            </span>
          </div>
        </NavLink>

        <div className="p-4 my-border-bottom">
          <h1 className="text-white mb-5">{`/personnal-info/about-me/${pathTitle}`}</h1>
          <div className="d-flex primary">{text}</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TextEmplacement;
