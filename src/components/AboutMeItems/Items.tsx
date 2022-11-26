import React from 'react';
import { AiFillFileText } from 'react-icons/ai';
import styled, { createGlobalStyle } from 'styled-components';
import Bio from '../../packages/AboutMe/Bio';
import { Generics } from '../Generics';

const SubItemContainer = styled.div`
	color: ${Generics.primary};
	font-size: 14px;
	display: flex;
	align-items: center;
`;

const GlobalStyle = createGlobalStyle`
.icon-spacing {
margin-right: 8px
}
`;

interface AboutMeSubItemsProps {
	subItemTitle: string;
	fileIconActive?: boolean;
	telIconActive?: boolean;
	mailIconActive?: boolean;
}

const AboutMeSubItems: React.FC<AboutMeSubItemsProps> = ({
	fileIconActive = true,
	subItemTitle,
}) => {
	return (
		<div>
			<SubItemContainer className='hover d-flex cursor-pointer'>
				<GlobalStyle />
				<div className='d-flex margin-top-5 align-items-center padding-bottom-12 justify-content-center'>
					{fileIconActive && (
						<AiFillFileText className='margin-left'></AiFillFileText>
					)}
					{subItemTitle}
				</div>
			</SubItemContainer>
		</div>
	);
};

export default AboutMeSubItems;
