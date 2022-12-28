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
      <div className="sub-item-container hover">
        <NavLink to={article.href}>
          <div className="d-flex article-container hover">
            <span className="d-flex icon-spacing">{article.icon}</span>
            <div className="d-flex align-items-center">
              {article.title}
            </div>
          </div>
        </NavLink>
      </div>
    </div>
  );
};
