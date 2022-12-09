	import { NavLink } from 'react-router-dom';
	import { GiHamburgerMenu } from 'react-icons/gi';
	import React from 'react';
	import './navbar.scss';

	const Navbar = () => {
		const [toggleNavbar, setToggleNavbar] = React.useState<boolean>(false);
		const toggleHandler = () => {
			setToggleNavbar(!toggleNavbar);
		};
		const onClose = () => {
			setToggleNavbar(false);
		};

		return (
			<React.Fragment>
				<div className='navbar-container-main my-border-bottom'>
					<div className='container-brand'>ethan-taylan</div>
					<span
						className='btn-burger hover'
						onClick={toggleHandler}
					>
						<GiHamburgerMenu />
					</span>
					<span className='btn-contact'>_contact-me</span>
				</div>
				<ul
					className={
						toggleNavbar ? 'my-border-bottom align-items-center navbar-nav-ul' : 'd-none'
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
						to='/works'
					>
						<li className='navbar-nav-li'>_works</li>
					</NavLink>
					<NavLink
						onClick={onClose}
						className='link'
						to='/contact-me'
					>
						<li className='navbar-nav-li'>_contact-me</li>
					</NavLink>
				</ul>
			</React.Fragment>
		);
	};

	export default Navbar;
