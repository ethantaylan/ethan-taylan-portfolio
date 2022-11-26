import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Generics } from '../Generics';

const Container = styled.div`
	width: 100%;
	height: 50px;
	display: flex;
	flex-direction: row;
	align-items: center;
	background-color: ${Generics.appBg};
	color: ${Generics.primary};
	white-space: nowrap;
	border: 1px solid ${Generics.secondary};
	border-top-right-radius: 10px;
	border-top-left-radius: 10px;
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
`;

const NavUl = styled.ul`
	height: 100%;
	display: flex;
	align-items: center;
`;

const NavLi = styled.li`
	display: flex;
	justify-content: center;
	height: 100%;
	border-right: 1px solid ${Generics.secondary};
	align-items: center;
	padding-left: 15px;
	padding-right: 15px;
	cursor: ${Generics.cursor}; ;
`;

function PortfolioNavbar() {
	return (
		<Container>
			<BrandContainer>ethan-taylan</BrandContainer>
			<NavContainer>
				<NavUl>
					<NavLink
						className='link h-100'
						to='/'
					>
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
				</NavUl>
			</NavContainer>
			<ContactBtn>_contact-me</ContactBtn>
		</Container>
	);
}

export default PortfolioNavbar;
