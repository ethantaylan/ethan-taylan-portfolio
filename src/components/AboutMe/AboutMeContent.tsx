import React from 'react';
import { IoIosClose } from 'react-icons/io';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Generics } from '../Generics';

const LeftContent = styled.div`
	width: 100%;
	padding: 20px;
`;

const FileCloseContainer = styled.div`
	height: 34px;
	width: 250px;
	padding: 6px;
	border-right: 1px solid ${Generics.secondary};
	display: flex;
	justify-content: space-between;
	color: ${Generics.primary};
	align-items: center;
`;

const TextBody = styled.span`
	color: ${Generics.primary};
	width: 100%;
	border-top: 1px solid ${Generics.secondary};
	height: 100%;
	display: flex;
	flex-direction: row;
`;

interface AboutMeContentProps {
	tabTitle: string;
	text: any;
}

export const AboutMeContent: React.FC<AboutMeContentProps> = ({
	tabTitle,
	text,
}) => {
	return (
		<React.Fragment>
			<div className='d-flex flex-row w-100 '>
				<div className='d-flex flex-column w-100'>
					<FileCloseContainer>
						<span>{tabTitle}</span>
						<span className='d-flex cursor-pointer'>
							<NavLink to='/about-me'>
								<IoIosClose
									size={22}
									color={Generics.primary}
								/>
							</NavLink>
						</span>
					</FileCloseContainer>
					<TextBody>
						<LeftContent>
							<div className='line-height-20'>{text}</div>
						</LeftContent>
					</TextBody>
				</div>
			</div>
		</React.Fragment>
	);
};

export default AboutMeContent;
