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
import { NavLink } from 'react-router-dom';

const FolderContainer = styled.div`
	width: 250px;
	height: 100%;
	border-right: 1px solid ${Generics.secondary};
`;

interface AboutMeProps {
	children?: any;
}

const AboutMe: React.FC<AboutMeProps> = ({ children }) => {
	const [snippet, setSnippet] = React.useState<boolean>(true);


	const handleSnippet = () => {
		setSnippet(!snippet);
	};

	const setActiveSnippet = () => {
		setSnippet(true);
	};

	return (
		<React.Fragment>
			<div className='d-flex w-100 my-border-bottom'>
				<FolderContainer>
					<ItemsTitle itemsTitle='personal-info' />
					<div>
						<AboutMeItems
							folderColors={folderColors.salmon}
							title={'bio'}
						>
							<AboutMeSubItems
								to='/about-me/biography'
								subItemTitle='biography.txt'
							/>
							<AboutMeSubItems
								to='/'
								subItemTitle='career.txt'
							/>
						</AboutMeItems>
					</div>
					<AboutMeItems
						folderColors={folderColors.blue}
						title={'interests'}
					>
						<AboutMeSubItems
							to='/about-me/hobbies'
							subItemTitle={'hobbies.txt'}
						/>
						<AboutMeSubItems
							to='/'
							subItemTitle={'else.txt'}
						/>
					</AboutMeItems>
					<AboutMeItems
						folderColors={folderColors.green}
						title={'education'}
					>
						<AboutMeSubItems
							to='/about-me/education'
							subItemTitle='education.txt'
						/>
					</AboutMeItems>
					<div
						className='margin-left-28'
						onClick={setActiveSnippet}
					>
						<AboutMeItems
							title={'code-snippets.tsx'}
							folderIconActive={false}
							chevronIconActive={false}
							codeIconActive={true}
							className='no-space'
						></AboutMeItems>
					</div>
					<div className='m-2' />
					<ItemsTitle
						className='my-border-top'
						itemsTitle='contacts'
					/>
					<AboutMeItems
						mail='taylanethan@gmail.com'
						mailIconActive={true}
						telIconActive={false}
						chevronIconActive={false}
						folderIconActive={false}
						title={<IoMailSharp size={16} />}
					/>
					<AboutMeItems
						number='+33766704190'
						telIconActive={true}
						mailIconActive={false}
						chevronIconActive={false}
						folderIconActive={false}
						title={<BsFillTelephoneFill size={16} />}
					/>
				</FolderContainer>
				{children}
			</div>
			<div className={snippet ? 'd-flex' : 'd-none'}>
				<CodeSnippets onClick={handleSnippet} />
			</div>
		</React.Fragment>
	);
};

export default AboutMe;
