import React from 'react';
import { NavLink } from 'react-router-dom';
import { FolderBarItems as FolderBarItemsModel } from '../FolderBar';
import './FolderBarItems.scss';

export interface FolderBarItemsProps {
	to?: any;
	item: FolderBarItemsModel | any ;
}

const FolderBarItems: React.FC<FolderBarItemsProps> = ({ item, to }) => {
	return (
		<div className='sub-item-container hover'>
			<NavLink to={to}>
				<div className='d-flex margin-top-5 align-items-center padding-bottom-12'>
					</div>
			</NavLink>
		</div>
	);
};

export default FolderBarItems;
