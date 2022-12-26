import React from 'react';
import { NavLink } from 'react-router-dom';
import { FolderBarArticle, FolderBarFolder } from '../FolderBar';
import './FolderBarArticles.scss';

export interface FolderBarArticlesProps {
	itemTitle?: any;
	to?: any;
	folder: FolderBarFolder;
}

const FolderBarArticles: React.FC<FolderBarArticlesProps> = ({
	to,
	folder,
}) => {
	return (
		<div>
			<div className='sub-item-container hover'>
				<NavLink to={to}>
					<div className='d-flex margin-top-5 align-items-center padding-bottom-12'>
						{folder.article}
					</div>
				</NavLink>
			</div>
		</div>
	);
};

export default FolderBarArticles;
