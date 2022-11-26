import React from 'react';
import styled from 'styled-components';
import { Generics } from '../../components/Generics';
import Items from '../../components/AboutMeItems/AboutMeItems';
import ItemsTitle from '../../components/AboutMeItems/AboutMeItemsTitle';
import AboutMeSubItems from '../../components/AboutMeItems/AboutMeSubItems';
import { folderColors } from '../../components/AboutMeItems/folder-colors';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { IoMailSharp } from 'react-icons/io5';

const FolderContainer = styled.div`
	width: 250px;
	height: 100%;
	border-right: 1px solid ${Generics.secondary};
`;

interface AboutMeProps {
}

const AboutMe: React.FC<AboutMeProps> = ({}) => {
	return (
		<FolderContainer>
			<ItemsTitle itemsTitle='personal-info' />
			<Items
				folderColors={folderColors.salmon}
				title={'bio'}
				children={<AboutMeSubItems subItemTitle='bio.txt' />}
			/>
			<Items
				folderColors={folderColors.blue}
				title={'interests'}
				children={<AboutMeSubItems subItemTitle='hobbies.txt' />}
			/>
			<Items
				folderColors={folderColors.green}
				title={'education'}
				children={<AboutMeSubItems subItemTitle='education.txt' />}
			/>
			<ItemsTitle
				className='my-border-top'
				itemsTitle='contacts'
			/>
			<Items
				mail='taytlanethan@gmail.com'
				mailIconActive={true}
				telIconActive={false}
				chevronIconActive={false}
				folderIconActive={false}
				title={
					<IoMailSharp
						className='mx-2'
						size={16}
					/>
				}
			/>
			<Items
				number='+33766704190'
				telIconActive={true}
				mailIconActive={false}
				chevronIconActive={false}
				folderIconActive={false}
				title={
					<BsFillTelephoneFill
						className='mx-2'
						size={16}
					/>
				}
			/>
		</FolderContainer>
	);
};

export default AboutMe;
