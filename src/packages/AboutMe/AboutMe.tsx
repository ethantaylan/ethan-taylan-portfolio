import React from 'react';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { IoMailSharp } from 'react-icons/io5';
import CodeSnippets from '../../components/CodeSnippet/CodeSnippets';
import AboutMeSubItems from '../../components/Navbar/FolderBar/FolderSubItems';
import ItemsTitle from '../../components/Navbar/FolderBar/FolderItems/FolderBarTitles/FolderBarTitles';
import AboutMeItems from '../../components/Navbar/FolderBar/FolderItems/FolderItems';
import { folderColors } from '../../components/folder-colors';
import { IoMdArrowDropdown, IoMdArrowDropright } from 'react-icons/io';
import './about-me.scss';

interface AboutMeProps {
	children?: any;
}

const AboutMe: React.FC<AboutMeProps> = ({ children }) => {
	const [snippet, setSnippet] = React.useState<boolean>(true);
	const [isFolderMenuActive, setIsFolderMenuActive] =
		React.useState<boolean>(false);

	const [isContactMenuActive, setIsContactMenuActive] =
		React.useState<boolean>(false);

	const setActiveSnippet = (active: any) => {
		setSnippet(active);
	};

	const handleBioFolderActive = () => {
		setIsFolderMenuActive(!isFolderMenuActive);
	};

	const handleContactMenuActive = () => {
		setIsContactMenuActive(!isContactMenuActive);
	};

	return (
		<React.Fragment>
			<h1 className="about-me-title">_about-me</h1>
			<div className='my-border-bottom flex-768-column app-bg w-100'>
				<div className='folder-container'>
					<div className='d-flex px-3 folder-menu align-items-center w-100'>
						{isFolderMenuActive ? (
							<IoMdArrowDropdown
								className='primary-icon'
								size={18}
							/>
						) : (
							<IoMdArrowDropright
								className='primary-icon'
								size={18}
							/>
						)}
						<ItemsTitle
							onClick={() => {
								handleBioFolderActive();
							}}
							itemsTitle='personal-info'
						/>
					</div>

					<div className={isFolderMenuActive ? 'd-block' : 'd-none'}>
						<AboutMeItems
							folderColors={folderColors.salmon}
							title={'biography'}
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
						{/* <div className='my-border-bottom' /> */}
					</div>
					<div
						className={`d-flex ${
							isContactMenuActive ? '' : ''
						} align-items-center folder-menu px-3 w-100`}
					>
						{isContactMenuActive ? (
							<IoMdArrowDropdown
								className='primary-icon'
								size={18}
							/>
						) : (
							<IoMdArrowDropright
								className='primary-icon'
								size={18}
							/>
						)}
						<ItemsTitle
							onClick={() => {
								handleContactMenuActive();
							}}
							itemsTitle='contact'
						/>
					</div>
					<div className={isContactMenuActive ? 'd-block my-border-bottom' : 'd-none'}>
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
			<CodeSnippets
				className={snippet ? 'd-flex h-100 justify-content-center w-100' : 'd-none'}
				onClose={() => setActiveSnippet(false)}
			/>
		</React.Fragment>
	);
};

export default AboutMe;
