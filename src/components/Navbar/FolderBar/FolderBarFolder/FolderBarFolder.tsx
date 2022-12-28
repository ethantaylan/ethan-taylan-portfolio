import React from 'react';
import { BiChevronDown, BiChevronRight } from 'react-icons/bi';
import {
  FolderBarFolder as FolderBarFolderModel,
  FolderBarArticle as FolderBarArticleModel
} from '../FolderBar';
import { FolderBarArticle } from '../FolderBarItems/FolderBarArticle';

export interface FolderBarFolderProps {
  folder: FolderBarFolderModel;
}

export const FolderBarFolder: React.FC<FolderBarFolderProps> = ({ folder }) => {
  const [isArticleActive, setArticleActive] = React.useState(false);

  console.log(folder.chevron, isArticleActive);
  
  return (
    <div className="p-2 primary">
      <div
        onClick={() => setArticleActive(!isArticleActive)}
        className={`d-flex hover align-items-center ${
          isArticleActive && 'mb-2'
        }`}
      >
        {folder.chevron && isArticleActive ? <BiChevronDown size={18} /> : <BiChevronRight size={18} />}
        <span className="icon-spacing">{folder.icon}</span>
        <span>{folder.title}</span>
      </div>
      {isArticleActive &&
        folder.articles?.map(
          (article: FolderBarArticleModel, index: number) => (
            <FolderBarArticle key={index} article={article} />
          )
        )}
    </div>
  );
};
