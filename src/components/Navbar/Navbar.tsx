import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { Generics } from '../Generics';
import { GiHamburgerMenu } from 'react-icons/gi';
import React from 'react';

const Container = styled.div`
	width: 100%;
	min-height: 43px;
	display: flex;
	flex-direction: row;
	align-items: center;
	background-color: ${Generics.appBg};
	color: ${Generics.primary};
	white-space: nowrap;
	border: 1px solid ${Generics.secondary};
	border-top-right-radius: 10px;
	border-top-left-radius: 10px;
	@media (width < 768px) {
		min-height: 60px;
	}
`;

const BrandContainer = styled.div`
	width: 300px;
	height: 100%;
	display: flex;
	align-items: center;
	color: ${Generics.primary};
	padding-left: 20px;
	padding-right: 20px;
	border-right: 1px solid ${Generics.secondary};
	cursor: ${Generics.cursor};
	@media (width < 768px) {
		border-right: 0px;
	}
`;

const NavContainer = styled.nav`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
`;

const ContactBtn = styled.a`
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	border-left: 1px solid ${Generics.secondary};
	text-decoration: none;
	color: ${Generics.primary};
	padding: 0 20px 0 20px;
	cursor: ${Generics.cursor};
	&:hover {
		border-bottom: 2px solid orange;
		color: ${Generics.white};
	}
	@media (width < 768px) {
		display: none;
	}
`;

const NavLi = styled.li`
	display: flex;
	justify-content: center;
	height: 100%;
	border-right: 1px solid ${Generics.secondary};
	align-items: center;
	padding-left: 15px;
	padding-right: 15px;
	cursor: ${Generics.cursor};
	@media (width < 768px) {
		width: 100%;
		border: none;
		padding: 20px;
		justify-content: flex-start;
	}
`;

const BurgerBtn = styled.span`
	display: none;
	@media (width < 768px) {
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		text-decoration: none;
		color: ${Generics.primary};
		padding: 0 20px 0 20px;
		cursor: ${Generics.cursor};
		font-size: 20px;
	}
`;

const NavUl = styled('ul')<{ $height: any }>`
	height: 100%;
	display: flex;
	align-items: center;
	color: ${Generics.primary};
	@media (width < 768px) {
		/* display: none; */
		flex-direction: column;
		height: auto;
		align-items: flex-start;
		width: 100%;
		background-color: #011e36;
		border-left: 1px solid ${Generics.secondary};
		border-right: 1px solid ${Generics.secondary};
		border-bottom: 1px solid ${Generics.secondary};
		height: ${(props) => (props.$height ? "auto" : '0px')};
	}
`;

const Navbar = () => {
	const [toggleNavbar, setToggleNavbar] = React.useState<boolean>(false);
	const toggleHandler = () => {
		setToggleNavbar(!toggleNavbar);
	};

	return (
		<React.Fragment>
			<Container>
				<BrandContainer>ethan-taylan</BrandContainer>
				<NavContainer></NavContainer>
				<BurgerBtn onClick={toggleHandler}>
					<GiHamburgerMenu />
				</BurgerBtn>
				<ContactBtn>_contact-me</ContactBtn>
			</Container>
			<NavUl $height={toggleNavbar}>
				<NavLink to='/'>
					<NavLi className='m-0'>_home</NavLi>
				</NavLink>
				<NavLink
					className='link h-100'
					to='/about-me'
				>
					<NavLi>_about-me</NavLi>
				</NavLink>
				<NavLink
					className='link h-100'
					to='/works'
				>
					<NavLi>_works</NavLi>
				</NavLink>
				<NavLink
					className='link h-100'
					to='/works'
				>
					<NavLi>_contact-me</NavLi>
				</NavLink>
			</NavUl>
		</React.Fragment>
	);
};

export default Navbar;
