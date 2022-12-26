import React from 'react';
import { AiFillFileText } from 'react-icons/ai';
import {
	FolderBarFolder as FolderBarFolderModel,
	FolderBarArticle as FolderBarArticleModel,
} from '../FolderBar';
import FolderBarSubItems from '../FolderBarSubItems/FolderBarSubItems';

export interface FolderBarFolderProps {
	folder: FolderBarFolderModel;
	customIcon: any;
}

export const FolderBarFolder: React.FC<FolderBarFolderProps> = ({
	folder,
	customIcon,
}) => {
	return (
		<div className='p-2 primary'>
			{customIcon}
			<span>{folder.title}</span>
			{folder.articles?.map((article: FolderBarArticleModel) => (
				<FolderBarSubItems
					article={article}
					customIcon={<AiFillFileText />}
				/>
			))}
		</div>
	);
};
