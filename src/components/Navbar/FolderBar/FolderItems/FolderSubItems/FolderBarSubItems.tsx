import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiFillFileText } from 'react-icons/ai';
import { FaReact } from 'react-icons/fa';
import './FolderBarSubItems.scss';

export interface AboutMeSubItemsProps {
	fileIconActive?: boolean;
	telIconActive?: boolean;
	codeIconActive?: boolean;
	mailIconActive?: boolean;
	children?: any;
	subItemTitle?: any;
	to?: string | any;
	socialIcon?: any;
	onClick?: () => void;
	article?: any;
}

const AboutMeSubItems: React.FC<AboutMeSubItemsProps> = ({
	fileIconActive = true,
	socialIcon,
	subItemTitle,
	codeIconActive,
	to,
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
						{fileIconActive && (
							<AiFillFileText
								className='margin-left icon-spacing'
								size={16}
							/>
						)}
						{codeIconActive && (
							<FaReact
								className='margin-left margin-right-5'
								size={18}
							/>
						)}
						{socialIcon && (
							<span className='margin-left icon-spacing'>{socialIcon}</span>
						)}
						{subItemTitle}
					</div>
				</NavLink>
			</div>
		</div>
	);
};

export default AboutMeSubItems;
