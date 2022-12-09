import React from 'react';
import styled from 'styled-components';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { IoMailSharp } from 'react-icons/io5';
import AboutMeSubItems from '../../components/Navbar/FolderBar/FolderSubItems';
import ItemsTitle from '../../components/Navbar/FolderBar/FolderItems/FolderBarTitles/FolderBarTitles';
import AboutMeItems from '../../components/Navbar/FolderBar/FolderItems/FolderItems';
import { folderColors } from '../../components/folder-colors';
import { IoMdArrowDropdown, IoMdArrowDropright } from 'react-icons/io';
import './works.scss';

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

	return (
		<React.Fragment>
			<div className='my-border-bottom flex-768-column app-bg w-100'>
				<div className='folder-container'>
					<div className='d-flex px-3 align-items-center w-100'>
						{isFolderMenuActive ? (
							<IoMdArrowDropdown
								className='works-icon-style'
								size={18}
							/>
						) : (
							<IoMdArrowDropright
								className='works-icon-style'
								size={18}
							/>
						)}
						<ItemsTitle
							className='w-100'
							onClick={() => {
								handleBioFolderActive();
							}}
							itemsTitle='works'
						/>
					</div>

					<div className={isFolderMenuActive ? 'd-block' : 'd-none'}>
						<AboutMeItems
							folderColors={folderColors.salmon}
							title={'works'}
						>
							<AboutMeSubItems
								to='/about-me/works'
								subItemTitle='works.tsx'
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
				</div>
				{children}
			</div>
		</React.Fragment>
	);
};

export default AboutMe;
