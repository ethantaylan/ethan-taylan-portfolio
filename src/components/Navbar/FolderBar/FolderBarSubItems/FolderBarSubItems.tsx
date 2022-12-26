import React from 'react';
import { NavLink } from 'react-router-dom';
import './FolderBarSubItems.scss';

export interface AboutMeSubItemsProps {
	children?: any;
	subItemTitle?: any;
	to?: string | any;
	onClick?: () => void;
	article?: any;
	customIcon: any
}

const AboutMeSubItems: React.FC<AboutMeSubItemsProps> = ({
	subItemTitle,
	to,
	customIcon,
	onClick,
}) => {
	return (
		<div>
			<div
				onClick={onClick}
				className='sub-item-container hover'
			>
				<NavLink to={to}>
					<div className='d-flex margin-top-5 align-items-center padding-bottom-12'>
							<span className='margin-left icon-spacing'>{customIcon}</span>
						{subItemTitle}
					</div>
				</NavLink>
			</div>
		</div>
	);
};

export default AboutMeSubItems;
