import React from 'react';
import { IoIosClose } from 'react-icons/io';
import { NavLink } from 'react-router-dom';
import './about-me-content.scss'

interface AboutMeContentProps {
	tabTitle: string;
	text?: string | any;
}

export const AboutMeContent: React.FC<AboutMeContentProps> = ({
	tabTitle,
	text,
}) => {
	return (
		<React.Fragment>
			<div className='d-flex flex-row w-100'>
				<div className='d-flex flex-column w-100'>
					<div className='file-close-container'>
						<span className=''>{tabTitle}</span>
						<span className='d-flex cursor-pointer'>
							<NavLink to='/about-me'>
								<IoIosClose
									size={22}
									className="close-icon"
								/>
							</NavLink>
						</span>
					</div>
					<div className='text-body'>
						<div className='left-content'>
							<div className='line-height-20'>{text}</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default AboutMeContent;
