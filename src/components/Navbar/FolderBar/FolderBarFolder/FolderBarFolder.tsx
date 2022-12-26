import React from 'react';
import {
	FolderBarFolder as FolderBarFolderModel,
	FolderBarArticle as FolderBarArticleModel,
} from '../FolderBar';
import FolderBarSubItems from '../FolderBarItems/FolderBarItems';

export interface FolderBarFolderProps {
	folder: FolderBarFolderModel;
}

export const FolderBarFolder: React.FC<FolderBarFolderProps> = ({ folder }) => {
	return (
		<div className='p-2 primary'>
			<span>{folder.title}</span>
			{folder.articles?.map((article: FolderBarArticleModel) => (
				<FolderBarSubItems article={article} />
			))}
		</div>
	);
};
