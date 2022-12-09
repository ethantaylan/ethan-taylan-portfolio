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
					<div className={`${isFolderMenuActive && 'my-border-bottom'} d-flex px-3 align-items-center w-100`}>
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
								to='/works/portfolio'
								subItemTitle='works.tsx'
							/>
						</AboutMeItems>
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
