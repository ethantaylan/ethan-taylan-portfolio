import React, { Children } from 'react';
import styled from 'styled-components';
import { Generics } from '../../components/Generics';
import Items from '../../components/AboutMeItems/FolderItems';
import ItemsTitle from '../../components/AboutMeItems/FolderBarTitles';
import AboutMeSubItems from '../../components/AboutMeItems/SubItems';
import { folderColors } from '../../components/AboutMeItems/folder-colors';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { IoMailSharp } from 'react-icons/io5';
import CodeSnippets from '../../components/AboutMeItems/CodeSnippets';

const FolderContainer = styled.div`
	width: 250px;
	height: 100%;
	border-right: 1px solid ${Generics.secondary};
`;

interface AboutMeProps {
	children?: any;
}

const AboutMe: React.FC<AboutMeProps> = ({ children }) => (
	<div className='d-flex w-100'>
		<FolderContainer>
			<ItemsTitle itemsTitle='personal-info' />
			<Items
				folderColors={folderColors.salmon}
				title={'bio'}
			>
				<AboutMeSubItems
					to='/about-me/bio'
					subItemTitle='biography.txt'
				/>
			</Items>
			<Items
				folderColors={folderColors.blue}
				title={'interests'}
			>
				<AboutMeSubItems
					to='about-me/hobbies'
					subItemTitle={'hobbies.txt'}
				/>
			</Items>
			<Items
				folderColors={folderColors.green}
				title={'education'}
			>
				<AboutMeSubItems
					to='/education'
					subItemTitle='education.txt'
				/>
			</Items>
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
		{children}
	</div>
);

export default AboutMe;
