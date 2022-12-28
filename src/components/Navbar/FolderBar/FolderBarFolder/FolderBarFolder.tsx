import React from 'react';
import {
<<<<<<< HEAD
  FolderBarFolder as FolderBarFolderModel,
  FolderBarArticle as FolderBarArticleModel
} from '../FolderBar';
import { FolderBarArticle } from '../FolderBarItems/FolderBarArticle';
=======
	FolderBarFolder as FolderBarFolderModel,
	FolderBarItems as FolderBarItemsModel,
} from '../FolderBar';
import FolderBarItems from '../FolderBarItems/FolderBarItems';
>>>>>>> fb89b9f1f74d1887d0a57bd5f9061740e77a3653

export interface FolderBarFolderProps {
  folder: FolderBarFolderModel;
}

export const FolderBarFolder: React.FC<FolderBarFolderProps> = ({ folder }) => {
<<<<<<< HEAD
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
=======
	return (
		<div className='p-2 primary'>
			<span>{folder.title}</span>
			{folder.items?.map((item: FolderBarItemsModel) => (
				<FolderBarItems item={item} />
			))}
		</div>
	);
>>>>>>> fb89b9f1f74d1887d0a57bd5f9061740e77a3653
};
