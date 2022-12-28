import React from 'react';
import { NavLink } from 'react-router-dom';
import { FolderBarArticle as FolderBarArticleModel } from '../FolderBar';
import './FolderBarArticle.scss';

export interface FolderBarArticleProps {
  to?: any;
  article: FolderBarArticleModel;
}

export const FolderBarArticle: React.FC<FolderBarArticleProps> = ({
  to,
  article
}) => {
  return (
    <div>
      <div className="sub-item-container hover">
        <NavLink to={to}>
          <div className="d-flex margin-left">
            <span className="d-flex">{article.icon}</span>
            <div className="d-flex align-items-center padding-bottom-12">
              {article.title}
            </div>
          </div>
        </NavLink>
      </div>
    </div>
  );
};
