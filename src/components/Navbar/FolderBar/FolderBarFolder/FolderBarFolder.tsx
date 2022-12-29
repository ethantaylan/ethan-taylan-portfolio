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

  React.useEffect(() => {
    if (location.pathname.includes('works')) {
      setArticleActive(true);
    }
  }, [location.pathname]);

  return (
    <div className="py-1 primary">
      <div
        onClick={() => setArticleActive(!isArticleActive)}
        className={`d-flex hover align-items-center ${
          isArticleActive && 'mb-2'
        }`}
      >
        {isArticleActive ? (
          <BiChevronDown
            className={folder.chevron ? 'd-block' : 'd-none'}
            size={18}
          />
        ) : (
          <BiChevronRight
            className={folder.chevron ? 'd-block' : 'd-none'}
            size={18}
          />
        )}
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
