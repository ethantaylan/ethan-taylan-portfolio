import React from 'react';
import { NavLink } from 'react-router-dom';
import { FolderBarArticle as FolderBarArticleModel } from '../FolderBar';
import './FolderBarArticle.scss';

export interface FolderBarArticleProps {
  article: FolderBarArticleModel;
}

export const FolderBarArticle: React.FC<FolderBarArticleProps> = ({
  article
}) => {
  return (
    <div>
      <div className="ms-2 sub-item-container hover">
        <NavLink to={article.href}>
          <div className="d-flex ms-4 mb-2 hover">
            <span className="d-flex icon-spacing">{article.icon}</span>
            <div className="d-flex align-items-center">{article.title}</div>
          </div>
          </NavLink>
      </div>
    </div>
  );
};
