import React from 'react';
import { AiFillFileText } from 'react-icons/ai';
import styled, { createGlobalStyle } from 'styled-components';
import { Generics } from '../Generics';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { IoMailSharp } from 'react-icons/io5';



const SubItemContainer = styled.div`
	color: ${Generics.primary};
	font-size: 14px;
	display: flex;
	align-items: center;
`;

const GlobalStyle = createGlobalStyle`
.icon-spacing {
margin-right: 4px
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
    telIconActive,
    mailIconActive,
}) => {
	return (
		<SubItemContainer className='hover cursor-pointer'>
			<GlobalStyle />
			{fileIconActive && (
				<AiFillFileText className='margin-left icon-spacing'></AiFillFileText>
			)}
            {telIconActive && <BsFillTelephoneFill className='mx-2' size={16} />}
            {mailIconActive && <IoMailSharp className='mx-2' size={16} />}
			{subItemTitle}
		</SubItemContainer>
	);
};

export default AboutMeSubItems;
