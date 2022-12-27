import React from 'react';
import {
	FolderBarFolder as FolderBarFolderModel,
	FolderBarItems as FolderBarItemsModel,
} from '../FolderBar';
import FolderBarItems from '../FolderBarItems/FolderBarItems';

export interface FolderBarFolderProps {
	folder: FolderBarFolderModel;
}

export const FolderBarFolder: React.FC<FolderBarFolderProps> = ({ folder }) => {
	return (
		<div className='p-2 primary'>
			<span>{folder.title}</span>
			{folder.items?.map((item: FolderBarItemsModel) => (
				<FolderBarItems item={item} />
			))}
		</div>
	);
};
