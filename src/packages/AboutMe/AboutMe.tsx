import React from 'react';
import styled from 'styled-components';
import { Generics } from '../../components/Generics';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { IoMailSharp } from 'react-icons/io5';
import CodeSnippets from '../../components/CodeSnippet/CodeSnippets';
import AboutMeSubItems from '../../components/Navbar/FolderBar/FolderSubItems';
import ItemsTitle from '../../components/Navbar/FolderBar/FolderBarTitles';
import AboutMeItems from '../../components/Navbar/FolderBar/FolderItems';
import { folderColors } from '../../components/folder-colors';
import { IoMdArrowDropdown, IoMdArrowDropright } from 'react-icons/io';

const FolderContainer = styled.div`
	width: 250px;
	@media (width < 768px) {
		width: 100%;
		height: auto;
	}
`;

interface AboutMeProps {
	children?: any;
}

const AboutMe: React.FC<AboutMeProps> = ({ children }) => {
	const [snippet, setSnippet] = React.useState<boolean>(true);
	const [isFolderMenuActive, setIsFolderMenuActive] =
		React.useState<boolean>(false);

	const [isContactMenuActive, setIsContactMenuActive] =
		React.useState<boolean>(false);

	const handleSnippet = () => {
		setSnippet(!snippet);
	};

	const setActiveSnippet = () => {
		setSnippet(!snippet);
	};

	const handleBioFolderActive = () => {
		setIsFolderMenuActive(!isFolderMenuActive);
	};

	const handleContactMenuActive = () => {
		setIsContactMenuActive(!isContactMenuActive);
	};

	return (
		<React.Fragment>
			<div className='my-border-left my-border-bottom my-border-right flex-768-column app-bg w-100'>
				<FolderContainer>
					<div className='d-flex my-border-bottom align-items-center w-100'>
						{isFolderMenuActive ? (
							<IoMdArrowDropdown
								color={Generics.primary}
								size={18}
							/>
						) : (
							<IoMdArrowDropright
								color={Generics.primary}
								size={18}
							/>
						)}
						<ItemsTitle
							className='w-100'
							onClick={() => {
								handleBioFolderActive();
							}}
							itemsTitle='personal-info'
						/>
					</div>

					<div className={isFolderMenuActive ? 'd-block' : 'd-none'}>
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
								className='no-space pb-2'
							/>
						</div>
						<div className='my-border-bottom' />
					</div>
					<div className={`d-flex ${isContactMenuActive ? 'my-border-bottom' : ''} align-items-center w-100`}>
						{isContactMenuActive ? (
							<IoMdArrowDropdown
								color={Generics.primary}
								size={18}
							/>
						) : (
							<IoMdArrowDropright
								color={Generics.primary}
								size={18}
							/>
						)}
						<ItemsTitle
							className='w-100'
							onClick={() => {
								handleContactMenuActive();
							}}
							itemsTitle='contact'
						/>
					</div>
					<div className={isContactMenuActive ? 'd-block' : 'd-none'}>
						<AboutMeItems
							className='p-2'
							mail='taylanethan@gmail.com'
							mailIconActive={true}
							telIconActive={false}
							chevronIconActive={false}
							folderIconActive={false}
							title={<IoMailSharp size={16} />}
						/>
						<AboutMeItems
							className='p-2'
							number='+33766704190'
							telIconActive={true}
							mailIconActive={false}
							chevronIconActive={false}
							folderIconActive={false}
							title={<BsFillTelephoneFill size={16} />}
						/>
					</div>
				</FolderContainer>
				{children}
			</div>
			<div className={snippet ? 'd-flex h-100' : 'd-none'}>
				<CodeSnippets onClick={handleSnippet} />
			</div>
		</React.Fragment>
	);
};

export default AboutMe;
