import React, { Children } from 'react';
import { NavLink } from 'react-router-dom';
import { AiFillFileText } from 'react-icons/ai';
import styled, { createGlobalStyle } from 'styled-components';
import { Generics } from '../../Generics';

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

export interface AboutMeSubItemsProps {
	fileIconActive?: boolean;
	telIconActive?: boolean;
	mailIconActive?: boolean;
	children?: any;
	subItemTitle?: string;
	to: string;
}

const AboutMeSubItems: React.FC<AboutMeSubItemsProps> = ({
	fileIconActive = true,
	subItemTitle,
	to,
}) => {
	return (
		<div>
			<NavLink to={to}>
				<SubItemContainer className='hover d-flex cursor-pointer'>
					<GlobalStyle />
					<div className='d-flex margin-top-5 align-items-center padding-bottom-12 justify-content-center'>
						{fileIconActive && (
							<AiFillFileText className='margin-left'></AiFillFileText>
						)}
						{subItemTitle}
					</div>
				</SubItemContainer>
			</NavLink>
		</div>
	);
};

export default AboutMeSubItems;
