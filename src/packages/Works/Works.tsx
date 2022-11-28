import React from 'react';
import styled from 'styled-components';
import { Generics } from '../../components/Generics';
import { folderColors } from '../../components/folder-colors';
import AboutMeSubItems from '../../components/Navbar/FolderBar/FolderSubItems';
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
					folderColors={folderColors.orange}
					title={'my-works'}
				>
					<AboutMeSubItems
						to='/works/orinoco'
						subItemTitle='orinoco.tsx'
						codeIconActive={true}
						fileIconActive={false}
					/>
					<AboutMeSubItems
						to='/works/power-bottle'
						subItemTitle='power-bottle.tsx'
						codeIconActive={true}
						fileIconActive={false}
					/>
					<AboutMeSubItems
						to='/works/reservia'
						subItemTitle='reservia.tsx'
						codeIconActive={true}
						fileIconActive={false}
					/>
				</AboutMeItems>
			</FolderContainer>
			{children}
		</div>
	</React.Fragment>
);

export default AboutMe;
