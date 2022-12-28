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
      <div className="d-flex my-2 hover align-items-center">
        <span className='icon-spacing'>{folder.icon}</span>
        <span>{folder.title}</span>
      </div>
    </div>
  );
};
