import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Colors, FolderColors } from '../../components/Colors';
import { TiArrowSortedDown } from 'react-icons/ti';
import { AiFillFolder } from 'react-icons/ai';
import { FaChevronRight } from 'react-icons/fa';
import { IoMailSharp } from 'react-icons/io5';
import { BsFillTelephoneFill } from 'react-icons/bs';

const FolderContainer = styled.div`
	width: auto;
	height: 100%;
	border-right: 1px solid ${Colors.secondary};
`;

const MainTitleContainer = styled.div`
	width: 100%;
	border-bottom: 1px solid ${Colors.secondary};
`;

const MainTitle = styled.h1`
	width: 100%;
	padding: 10px;
	display: flex;
	color: ${Colors.primary};
	&:hover {
		cursor: ${Colors.cursor};
    color: ${Colors.white};
	}
`;

const TitleContainer = styled.span`
	color: ${Colors.primary};
	display: flex;
	align-items: center;
	padding: 12px;
	white-space: nowrap;
	&:hover {
		color: ${Colors.white};
		cursor: ${Colors.cursor};
	}
`;

const GlobalStyle = createGlobalStyle`
  .my-border-top {border-top: 1px solid ${Colors.secondary}
  };
`;

const AboutMe = () => {
	return (
		<FolderContainer>
			<GlobalStyle />
			<MainTitleContainer>
				<MainTitle>
					<TiArrowSortedDown className='mx-1' />
					personal-info
				</MainTitle>
			</MainTitleContainer>
			<TitleContainer>
				<span className='px-1'>
					<FaChevronRight size={10} />
					<AiFillFolder color={FolderColors.salmon} />
				</span>
				bio
			</TitleContainer>
			<TitleContainer>
				<span className='px-1'>
					<FaChevronRight size={10} />
					<AiFillFolder color={FolderColors.green} />
				</span>
				interests
			</TitleContainer>
			<TitleContainer>
				<span className='px-1'>
					<FaChevronRight size={10} />
					<AiFillFolder color={FolderColors.blue} />
				</span>
				education
			</TitleContainer>
			<MainTitleContainer className='my-border-top'>
				<MainTitle>
					<TiArrowSortedDown className='mx-1' />
					contacts
				</MainTitle>
			</MainTitleContainer>
			<TitleContainer>
				<span className='px-1'>
					<IoMailSharp size={16} />
				</span>
				taylanethan@gmail.com
			</TitleContainer>
			<TitleContainer>
				<span className='px-1'>
					<BsFillTelephoneFill size={16} />
				</span>
				+33766704190
			</TitleContainer>
		</FolderContainer>
	);
};

export default AboutMe;
