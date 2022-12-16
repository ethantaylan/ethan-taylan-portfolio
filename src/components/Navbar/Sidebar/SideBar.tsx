import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { RiContactsFill } from 'react-icons/ri';
import { FaFileCode } from 'react-icons/fa';
import { NavLink, useLocation } from 'react-router-dom';
import './sidebar.scss';

export interface SideBarProps {
	children?: any;
}

const SideBar: React.FC<SideBarProps> = ({ children }) => {
	const [isLoading, setIsLoading] = React.useState(true);
	const [setHeight, setSetHeight] = React.useState<boolean>(false);
	// const [pathName, setPathName] = React.useState<string>(window.location.pathname)

	const location = useLocation();
	React.useEffect(() => {
		if (location.pathname.includes('portfolio')) {
			setSetHeight(true);
			setIsLoading(false);
		} else {
			setSetHeight(false);
			setIsLoading(false);
		}
	}, [location.pathname, setHeight]);

	return (
		<React.Fragment>
			{isLoading ? (
				'Loading'
			) : (
				<div
					className={`  ${setHeight ? 'height-unset' : 'sidebar-main-container'}`}
				>
					<div className='sidebar-container'>
						<ul className='sidebar-ul d-768-none'>
							<NavLink to='/home'>
								<li className='sidebar-li'>
									<AiFillHome />
								</li>
							</NavLink>
							<NavLink to='/about-me'>
								<li className='sidebar-li'>
									<RiContactsFill />
								</li>
							</NavLink>
							<NavLink to='/works/portfolio'>
								<li className='sidebar-li'>
									<FaFileCode />
								</li>
							</NavLink>
						</ul>
					</div>
					{children}
				</div>
			)}
		</React.Fragment>
	);
};

export default SideBar;