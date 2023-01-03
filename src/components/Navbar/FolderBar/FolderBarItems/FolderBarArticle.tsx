import React from 'react';
import { NavLink } from 'react-router-dom';
import CvImg from '../../../../assets/cv.jpg';
import useMediaQuery from '../../../../hooks/useMediaQuery';
import StaticModal from '../../../StaticModal/StaticModal';
import { FolderBarArticle as FolderBarArticleModel } from '../FolderBar';
import './FolderBarArticle.scss';

export interface FolderBarArticleProps {
  article: FolderBarArticleModel;
}

export const FolderBarArticle: React.FC<FolderBarArticleProps> = ({
  article
}) => {
  const [showModal, setShowModal] = React.useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const matches = useMediaQuery('(max-width: 992px)');

  function scrollToTitle() {
    if (matches === true) {
      scrollTo(0, 442);
    }
  }

  return (
    <NavLink onClick={() => scrollToTitle()} to={article.href}>
      <div className="ms-2 sub-item-container hover">
        <div id="id" className="d-flex ms-4 mb-2 hover">
          <span className="d-flex icon-spacing">{article.icon}</span>
          <div className="d-flex align-items-center">
            <span id="title">{article.title}</span>
          </div>
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
      </div>
    </NavLink>
  );
};
