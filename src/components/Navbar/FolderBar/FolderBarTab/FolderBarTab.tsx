import React from 'react';
import { IoMdArrowDropdown, IoMdArrowDropright } from 'react-icons/io';
import { FolderBarTab as FolderBarTabModel } from '../FolderBar';
import { FolderBarFolder } from '../FolderBarFolder/FolderBarFolder';

interface FolderBarTabProps {
	tab: FolderBarTabModel;
}

export const FolderBarTab: React.FC<FolderBarTabProps> = ({ tab }) => {
	const [isMenuActive, setMenuActive] = React.useState<boolean>(false);

	return (
		<React.Fragment>
			<div
				onClick={() => setMenuActive(!isMenuActive)}
				className='d-flex px-3 folder-menu align-items-center w-100'
			>
				{isMenuActive ? (
					<IoMdArrowDropdown
						className='primary-icon'
						size={20}
					/>
				) : (
					<IoMdArrowDropright
						className='primary-icon'
						size={20}
					/>
				)}
				<div className='w-100'>
					<h1 className='d-flex align-items-center m-0 p-2 hover'>{tab.title}</h1>
				</div>
			</div>
			{tab.folders?.map((folder, index) => (
				<FolderBarFolder
					key={index}
					folder={folder}
				/>
			))}
		</React.Fragment>
	);
};
