import React from 'react';
import styled from 'styled-components';
import { Generics } from '../../components/Generics';
import Items from '../../components/AboutMeItems/AboutMeItems';
import ItemsTitle from '../../components/AboutMeItems/AboutMeItemsTitle';
import AboutMeSubItems from '../../components/AboutMeItems/AboutMeSubItems';
import { folderColors } from '../../components/AboutMeItems/folder-colors';

const FolderContainer = styled.div`
	width: auto;
	height: 100%;
	border-right: 1px solid ${Generics.secondary};
`;

interface AboutMeProps {}

const AboutMe: React.FC<AboutMeProps> = ({}) => {
	return (
		<FolderContainer>
			<ItemsTitle itemsTitle='personal-info' />
			<Items
				folderColors={folderColors.salmon}
				title={'bio'}
				children={
					<AboutMeSubItems
						subItemTitle='bio.txt'
					/>
				}
			/>
			<Items
				folderColors={folderColors.blue}
				title={'interests'}
				children={
					<AboutMeSubItems
						subItemTitle='hobbies.txt'
					/>
				}
			/>
			<Items
				folderColors={folderColors.green}
				title={'education'}
				children={
					<AboutMeSubItems
						subItemTitle='education.txt'
					/>
				}
			/>
			<ItemsTitle
				className='my-border-top'
				itemsTitle='contacts'
			/>
			<Items
				chevronIconActive={false}
				folderIconActive={false}
				children={
					<AboutMeSubItems
						fileIconActive={false}
						subItemTitle='+33766704190'
						telIconActive={true}
					/>
				}
				title={''}
			/>
			<Items
				className="my-border-top d-none"
				chevronIconActive={false}
				folderIconActive={false}
				children={
					<div className='d-flex flex-row'>
						<AboutMeSubItems
							fileIconActive={false}
							subItemTitle='taylanethan@gmail.com'
							mailIconActive={true}
						/>
					</div>
				}
			/>
		</FolderContainer>
	);
};

export default AboutMe;
