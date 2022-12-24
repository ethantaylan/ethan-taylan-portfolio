import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { RiContactsFill } from 'react-icons/ri';
import { FaFileCode } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import './sidebar.scss';
import useMediaQuery from '../../../hooks/useMediaQuery';
import { IoMdMail } from 'react-icons/io';

export interface SideBarProps {
	children?: any;
}

export function bodyHeightAuto() {
	document.body.className = 'height-auto';
}

export function bodyHeight100() {
	document.body.className = 'h-100';
}

if (location.pathname.includes('works')) {
	document.body.className = 'h-auto';
}

const SideBar: React.FC<SideBarProps> = ({ children }) => {
	const matches = useMediaQuery('(min-width: 768px)');

	return (
		<div className='sidebar-main-container'>
			<div className='sidebar-container'>
				<ul className='sidebar-ul d-768-none'>
					<NavLink
						onClick={() => bodyHeight100()}
						to='/home'
					>
						<li className='sidebar-li'>
							<AiFillHome />
						</li>
					</NavLink>
					<NavLink
						onClick={() => bodyHeight100()}
						to='/about-me'
					>
						<li className='sidebar-li'>
							<RiContactsFill />
						</li>
					</NavLink>
					<NavLink
						onClick={() => bodyHeightAuto()}
						to='/works'
					>
						<li className='sidebar-li'>
							<FaFileCode />
						</li>
					</NavLink>
					<NavLink
						onClick={() => bodyHeight100()}
						to='/contact-me'
					>
						<li className='sidebar-li'>
							<IoMdMail />
						</li>
					</NavLink>
				</ul>
			</div>
			<div className={`h-100 ${matches ? 'd-flex w-100' : ''}`}>{children}</div>
		</div>
	);
};

export default SideBar;
