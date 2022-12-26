import React from 'react';
import { NavLink } from 'react-router-dom';
import './FolderBarItems.scss';

export interface FolderBarItemsProps {
	children?: any;
	itemTitle?: any;
	to?: string | any;
	article?: any;
}

const FolderBarItems: React.FC<FolderBarItemsProps> = ({ itemTitle, to }) => {
	return (
		<div>
			<div className='sub-item-container hover'>
				<NavLink to={to}>
					<div className='d-flex margin-top-5 align-items-center padding-bottom-12'>
						{itemTitle}
					</div>
				</NavLink>
			</div>
		</div>
	);
};

export default FolderBarItems;
