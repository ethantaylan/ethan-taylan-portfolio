import React from 'react';
import { IoIosClose } from 'react-icons/io';
import styled from 'styled-components';
import { Generics } from './Generics';

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

interface AboutMeProps {
	tabTitle: string;
}

export const Bio: React.FC<AboutMeProps> = ({ tabTitle }) => {
	return (
		<div className='d-flex flex-row w-100 '>
			<div className='d-flex flex-column w-100'>
				<FileCloseContainer>
					<span>{tabTitle}</span>
					<span className='d-flex cursor-pointer'>
						<IoIosClose
							size={22}
							color={Generics.primary}
						/>
					</span>
				</FileCloseContainer>
				<TextBody>
					{/* Left content */}
					<LeftContent>
						<div className='line-height-20'>
							* About me <br />
							* I have 5 years of еxperience in web <br />
							* development lorem ipsum dolor sit amet, <br />
							* consectetur adipiscing elit, sed do eiusmod
							<br />
							* tempor incididunt ut labore et dolore
							<br />
							* magna aliqua. Ut enim ad minim veniam,
							<br />
							* quis nostrud exercitation ullamco laboris
							<br />
							* nisi ut aliquip ex ea commodo consequat.
							<br />
							* Duis aute irure dolor in reprehenderit in
							<br />
							*<br />
							* Duis aute irure dolor in reprehenderit in
							<br />
							* voluptate velit esse cillum dolore eu fugiat <br />
							* nulla pariatur. Excepteur sint occaecat <br />
							* officia deserunt mollit anim id est laborum.
							<br />
							* officia deserunt mollit anim id est laborum */
							<br />
						</div>
					</LeftContent>
				</TextBody>
			</div>
		</div>
	);
};

export default Bio;
