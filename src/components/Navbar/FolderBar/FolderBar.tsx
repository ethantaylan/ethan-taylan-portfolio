import React from 'react';
import { AiFillFolder } from 'react-icons/ai';
import { FolderBarTab } from './FolderBarTab/FolderBarTab';

export interface FolderBarTab {
	title?: string;
	folders?: FolderBarFolder[];
}

export interface FolderBarFolder {
	title?: string;
	articles?: FolderBarArticle[];
}

export interface FolderBarArticle {
	title: string;
}

interface FolderBarProps {
	children?: any;
	title: string;
	tabs?: FolderBarTab[];
}

const FolderBar: React.FC<FolderBarProps> = ({ tabs, title }) => {
	return (
		<div className='d-flex flex-column w-100'>
			<div className='h-100 folder-main-container app-bg w-100'>
				<div className='folder-container'>
					<h1 className='about-me-title'>{title}</h1>
					{tabs?.map((tab, index: number) => (
						<FolderBarTab
							key={index}
							tab={tab}
						/>
					))}
				</div>
			</div>
			{/* {children} */}
		</div>
	);
};

export default FolderBar;
