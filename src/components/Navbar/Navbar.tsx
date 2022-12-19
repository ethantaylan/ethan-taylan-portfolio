import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import React from 'react';
import './navbar.scss';

import { IoIosClose } from 'react-icons/io';
import useMediaQuery from '../../hooks/useMediaQuery';

const Navbar = () => {
	const [toggleNavbar, setToggleNavbar] = React.useState<boolean>(false);
	const toggleHandler = () => {
		setToggleNavbar(!toggleNavbar);
	};
	const onClose = () => {
		setToggleNavbar(false);
	};

	const matches = useMediaQuery('(max-width: 768px)');

	return (
		<React.Fragment>
			<div className='navbar-container-main my-border-bottom'>
				<div className='brand-and-contact-btn'>
					<div className='navbar-container-brand'>ethan-taylan</div>
					<span
						className='btn-burger hover'
						onClick={toggleHandler}
					>
						{toggleNavbar ? (
							<div className='close-container d-flex justify-content-center align-items-center'>
								<IoIosClose size={34} />
							</div>
						) : (
							<GiHamburgerMenu />
						)}
					</span>
				</div>
				<div className={matches ? 'd-flex' : 'd-flex justify-content-between w-100'}>
					<div className='d-flex flex-row w-100'>
						<ul
							className={
								toggleNavbar
									? 'align-items-center navbar-nav-ul'
									: 'd-768-none navbar-nav-ul'
							}
						>
							<NavLink
								className='link'
								onClick={onClose}
								to='/'
							>
								<li className='navbar-nav-li'>_home</li>
							</NavLink>
							<NavLink
								onClick={onClose}
								className='link'
								to='/about-me'
							>
								<li className='navbar-nav-li'>_about-me</li>
							</NavLink>
							<NavLink
								onClick={onClose}
								className='link'
								to='/works/portfolio'
							>
								<li className='navbar-nav-li'>_works</li>
							</NavLink>
							{matches && (
								<NavLink
									onClick={onClose}
									className='link'
									to='/contact-me'
								>
									<li className='navbar-nav-li'>_contact-me</li>
								</NavLink>
							)}

							<div style={{ position: 'absolute', bottom: '0', width: '100%' }}></div>
						</ul>
					</div>

						<NavLink className='btn-contact' to='/contact-me'>_contact-me</NavLink>

				</div>
			</div>
		</React.Fragment>
	);
};

export default Navbar;
