import React from 'react';
import { IoIosClose } from 'react-icons/io';
import styled from 'styled-components';
import { Generics } from '../../Generics';
import AboutMeContents from './AboutMeContents';


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

interface BioProps {
    tabTitle?: string;
}


export const Bio: React.FC<BioProps> = ({tabTitle}) => {
	return (
		<AboutMeContents tabTitle='BIOGRAPHY.TXT' />
	);
};

export default Bio;
