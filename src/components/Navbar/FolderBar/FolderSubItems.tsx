import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiFillFileText } from 'react-icons/ai';
import { FaReact } from 'react-icons/fa';
import './folder-sub-items.scss'

export interface AboutMeSubItemsProps {
	fileIconActive?: boolean;
	telIconActive?: boolean;
	codeIconActive?: boolean;
	mailIconActive?: boolean;
	children?: any;
	subItemTitle?: string;
	to: string;
}

const AboutMeSubItems: React.FC<AboutMeSubItemsProps> = ({
	fileIconActive = true,
	subItemTitle,
	codeIconActive,
	to,
}) => {
	return (
		<div>
			<div className='sub-item-container hover'>
				<NavLink to={to}>
					<div className='d-flex margin-top-5 align-items-center padding-bottom-12'>
						{fileIconActive && (
							<AiFillFileText className='margin-left' />
						)}
						{codeIconActive && (
							<FaReact
								className='margin-left margin-right-5'
								size={18}
							/>
						)}
						{subItemTitle}
					</div>
				</NavLink>
			</div>
		</div>
	);
};

export default AboutMeSubItems;
