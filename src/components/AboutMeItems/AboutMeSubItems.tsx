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
    telIconActive,
    mailIconActive,
}) => {
	return (
		<SubItemContainer className='hover d-flex cursor-pointer'>
			<GlobalStyle />
            <div className="d-flex  margin-top-5 align-items-center justify-content-center">
			{fileIconActive && (
				<AiFillFileText className='margin-left'></AiFillFileText>
			)}
            {telIconActive && <BsFillTelephoneFill className='mx-2' size={16} />}
            {mailIconActive && <IoMailSharp className='mx-2' size={16} />}
			{subItemTitle}
            </div>
		</SubItemContainer>
	);
};

export default AboutMeSubItems;
