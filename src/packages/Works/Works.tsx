import React from 'react';
import styled from 'styled-components';
import { Generics } from '../../components/Generics';
import { folderColors } from '../../components/Navbar/FolderBar/folder-colors';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { IoMailSharp } from 'react-icons/io5';
import CodeSnippets from '../../components/CodeSnippet/CodeSnippets';
import AboutMeSubItems from '../../components/Navbar/FolderBar/SubItems';
import ItemsTitle from '../../components/Navbar/FolderBar/FolderBarTitles';
import AboutMeItems from '../../components/Navbar/FolderBar/FolderItems';

const FolderContainer = styled.div`
	width: 250px;
	height: 100%;
	border-right: 1px solid ${Generics.secondary};
`;

interface AboutMeProps {
	children?: any;
}

const AboutMe: React.FC<AboutMeProps> = ({ children }) => (
	<React.Fragment>
		<div className='d-flex w-100 my-border-bottom'>
			<FolderContainer>
				<ItemsTitle itemsTitle='works' />
				<AboutMeItems
					folderColors={folderColors.salmon}
					title={'frontend'}

				>
					<AboutMeSubItems
						to='/about-me/biography'
						subItemTitle='biography.tsx'
					/>
					<AboutMeSubItems
						to='/about-me/biography'
						subItemTitle='career.tsx'
					/>
				</AboutMeItems>
				<AboutMeItems
					folderColors={folderColors.green}
					title={'webdesign'}
				>
					<AboutMeSubItems
						to='/about-me/education'
						subItemTitle='education.txt'
					/>
				</AboutMeItems>
				<div className='m-2' />
			</FolderContainer>
			{children}
		</div>
	</React.Fragment>
);

export default AboutMe;
