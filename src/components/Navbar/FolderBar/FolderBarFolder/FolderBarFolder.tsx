import React from 'react';
import {
	FolderBarFolder as FolderBarFolderModel,
	FolderBarArticle as FolderBarArticleModel,
} from '../FolderBar';
import FolderBarArticles from '../FolderBarItems/FolderBarArticles';

export interface FolderBarFolderProps {
	folder: FolderBarFolderModel;
}

export const FolderBarFolder: React.FC<FolderBarFolderProps> = ({ folder }) => {
	return (
		<div className='p-2 primary'>
			<span>{folder.title}</span>
			{folder.articles?.map((article: FolderBarArticleModel, index: number) => (
				<FolderBarArticles
					key={index}
					article={article}
				/>
			))}
		</div>
	);
};
