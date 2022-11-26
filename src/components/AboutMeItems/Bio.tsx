import React from 'react';
import styled from 'styled-components';
import { Generics } from '../Generics';

interface BioProps {}

const FileCloseContainer = styled.div`
	height: 34px;
	width: 250px;
	padding: 10px;
	border-right: 1px solid ${Generics.secondary};
	display: flex;
	justify-content: space-between;
	color: ${Generics.primary};
`;

const TextBody = styled.span`
	padding: 20px;
	color: ${Generics.primary};
	width: 100%;
	border-top: 1px solid ${Generics.secondary};
	height: 100%;
	display: flex;
	flex-direction: row;
`;

export const Bio: React.FC<BioProps> = ({}) => {
	return (
		<div className='d-flex flex-row w-100 '>
			<div className='d-flex flex-column w-100'>
				<FileCloseContainer>
					<span>BIO.TXT</span>
					<span className='cursor-pointer'>x</span>
				</FileCloseContainer>
				<TextBody>
					{/* Left content */}
					<div className='w-100'>
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
					</div>
					{/* Right content */}
					<div className='w-100 d-flex justify-content-center'>
                        test
                    </div>
				</TextBody>
			</div>
		</div>
	);
};

export default Bio;
