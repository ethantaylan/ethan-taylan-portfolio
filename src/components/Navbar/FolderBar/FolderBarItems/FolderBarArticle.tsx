import React from 'react';
import { NavLink } from 'react-router-dom';
import StaticModal from '../../../StaticModal/StaticModal';
import { FolderBarArticle as FolderBarArticleModel } from '../FolderBar';
import './FolderBarArticle.scss';
import CvImg from '../../../../assets/cv.jpg';

export interface FolderBarArticleProps {
  article: FolderBarArticleModel;
}

export const FolderBarArticle: React.FC<FolderBarArticleProps> = ({
  article
}) => {
  const [showModal, setShowModal] = React.useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => {
    setShowModal(true);
  };

  return (
    <div>
      <div className="ms-2 sub-item-container hover">
        <NavLink to={article.href}>
          <div className="d-flex ms-4 mb-2 hover">
            <span className="d-flex icon-spacing">{article.icon}</span>
            <div className="d-flex align-items-center">{article.title}</div>
            {article.resume && (
              <h1 onClick={() => handleShow()}>{article.resume}</h1>
            )}
            <StaticModal
              modalImage={CvImg}
              modalTitle={article.title}
              modalButtonActive={false}
              handleClose={handleClose}
              showModal={showModal}
              downloadResume="Download resume"
              downloadBtn={true}
              children={<img className="w-100" src={CvImg} />}
            />
          </div>
        </NavLink>
      </div>
    </div>
  );
};
