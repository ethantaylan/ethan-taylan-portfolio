import React from 'react';
import {
  FolderBarFolder as FolderBarFolderModel,
  FolderBarArticle as FolderBarArticleModel
} from '../FolderBar';
import { FolderBarArticle } from '../FolderBarItems/FolderBarArticle';

export interface FolderBarFolderProps {
  folder: FolderBarFolderModel;
}

export const FolderBarFolder: React.FC<FolderBarFolderProps> = ({ folder }) => {
  return (
    <div className="p-2 primary">
      <div className="d-flex align-items-center">
        <span className='my-2'>{folder.icon}</span>
        <span>{folder.title}</span>
      </div>
      {folder.articles?.map((article: FolderBarArticleModel, index: number) => (
        <FolderBarArticle key={index} article={article} />
      ))}
    </div>
  );
};
