import React from 'react';
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
	const [isFolderMenuActive, setIsFolderMenuActive] =
		React.useState<boolean>(false);

	const handleBioFolderActive = () => {
		setIsFolderMenuActive(!isFolderMenuActive);
	};

	return (
		<React.Fragment>
			{/* <div className='folder-container'>
				<div className="d-block">
					<AboutMeItems
						folderColors={folderColors.salmon}
						title={'works'}
					>
						<AboutMeSubItems
							to='/works/portfolio'
							subItemTitle='works.tsx'
						/>
					</AboutMeItems>
				</div> */}
				{children}
			{/* </div> */}
		</React.Fragment>
	);
};

export default AboutMe;
