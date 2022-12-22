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
import FolderItems from '../../components/Navbar/FolderBar/FolderItems/FolderItems';
import FolderSubItems from '../../components/Navbar/FolderBar/FolderSubItems';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaGithubSquare } from 'react-icons/fa';
import { TiSocialInstagram } from 'react-icons/ti';
import useMediaQuery from '../../hooks/useMediaQuery';
import { socialLinks } from '../../components/CodeSnippet/social-links';

interface AboutMeProps {
	children?: any;
}

const AboutMe: React.FC<AboutMeProps> = ({ children }) => {
	const [snippet, setSnippet] = React.useState<boolean>(true);
	const [isFolderMenuActive, setIsFolderMenuActive] =
		React.useState<boolean>(false);

	const [isContactMenuActive, setIsContactMenuActive] =
		React.useState<boolean>(false);

	const handleCodeSnippet = (active: any) => {
		setSnippet(active);
	};

	const handleBioFolderActive = () => {
		setIsFolderMenuActive(!isFolderMenuActive);
	};

	const handleContactMenuActive = () => {
		setIsContactMenuActive(!isContactMenuActive);
	};

	const [isSocialsActive, setIsSocialsActive] = React.useState<boolean>(false);

	const onClickHandlerSocials = () => {
		setIsSocialsActive(!isSocialsActive);
	};

	const matches = useMediaQuery('(min-width: 768px)');

	return (
		<React.Fragment>
			<div className='d-flex flex-column w-100'>
				<div className='h-100 folder-main-container app-bg w-100'>
					
					<div className='folder-container'>
					<h1 className='about-me-title'>_about-me</h1>

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
									to='/about-me/biography'
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
							</AboutMeItems>
							<FolderItems
								onClick={() => onClickHandlerSocials()}
								folderColors={'LightSeaGreen'}
								title={'socials'}
							/>
							{isSocialsActive ? (
								<React.Fragment>
									<FolderSubItems
										fileIconActive={false}
										socialIcon={<TiSocialInstagram />}
										subItemTitle={'instagram'}
										onClick={socialLinks.instagram}
									/>
									<FolderSubItems
										fileIconActive={false}
										socialIcon={<AiFillLinkedin />}
										subItemTitle='linkedin'
										onClick={socialLinks.linkedin}
									/>
									<FolderSubItems
										socialIcon={<FaGithubSquare />}
										fileIconActive={false}
										subItemTitle='github'
										onClick={socialLinks.github}
									/>{' '}
								</React.Fragment>
							) : (
								''
							)}
							<div
								className='margin-left-28'
								onClick={() => handleCodeSnippet(true)}
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
						<div className='d-flex align-items-center folder-menu px-3 w-100'>
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
						<div
							className={isContactMenuActive ? 'd-block my-border-bottom' : 'd-none'}
						>
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
			</div>
			<CodeSnippets
				showCodeSnippet={snippet ? true : false}
				className={matches ? 'w-50' : 'w-100'}
				onClose={() => handleCodeSnippet(false)}
			/>
		</React.Fragment>
	);
};

export default AboutMe;
