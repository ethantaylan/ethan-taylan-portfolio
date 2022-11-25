import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Colors, FolderColors } from '../../components/Colors';
import { AiFillFolder } from 'react-icons/ai';
import Items from './Items';
import ItemsTitle from './ItemsTitle';

const FolderContainer = styled.div`
	width: auto;
	height: 100%;
	border-right: 1px solid ${Colors.secondary};
`;

const AboutMe = () => {
	return (
		<FolderContainer>
			<ItemsTitle itemsTitle='personal-info' />
			<Items
				title={'bio'}
				children={<AiFillFolder color={FolderColors.salmon} />}
			/>
			<Items
				title={'interests'}
				children={<AiFillFolder color={FolderColors.green} />}
			/>
			<Items
				title={'education'}
				children={<AiFillFolder color={FolderColors.blue} />}
			/>
			<ItemsTitle
				className='my-border-top'
				itemsTitle='contacts'
			/>
		</FolderContainer>
	);
};

export default AboutMe;
