import './Navbar.scss';
import styled from 'styled-components';

const primaryColor = '#607b96';
const secondaryColor = '#1e2d3d';
const appBg = '#011627';
const cursorPointer = {cursor: "pointer"}

const Container = styled.div`
	width: 100%;
	height: 50px;
	display: flex;
	flex-direction: row;
	align-items: center;
	background-color: ${appBg};
	color: ${primaryColor};
	white-space: nowrap;
	border: 1px solid ${secondaryColor};
	border-top-right-radius: 10px;
	border-top-left-radius: 10px;
`;

const BrandContainer = styled.div`
	width: 30%;
	height: 100%;
	display: flex;
	align-items: center;
	color: ${primaryColor};
	padding-left: 20px;
	padding-right: 20px;
	border-right: 1px solid ${secondaryColor};
	${cursorPointer}
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
	border-left: 1px solid ${secondaryColor};
	text-decoration: none;
	color: ${primaryColor};
	padding: 0 20px 0 20px;
	border-bottom: 2px solid;
	border-bottom-color: transparent;
	border-top: 2px solid;
	border-top-color: transparent;
	${cursorPointer}
	&:hover {
		border-bottom: 2px solid orange;
		color: unset;
	}
`;

const NavUl = styled.ul`
	width: 40%;
	height: 100%;
	display: flex;
	align-items: center;
`;

const NavLi = styled.li`
	display: flex;
	justify-content: center;
	height: 100%;
	border-right: 1px solid ${secondaryColor};
	align-items: center;
	width: 100%;
	padding-left: 15px;
	padding-right: 15px;
	border-bottom: 2px solid;
	border-bottom-color: transparent;
	border-top: 2px solid;
	border-top-color: transparent;
	${cursorPointer}
	&:hover {
		border-bottom: 2px solid orange;
	}
`;

function PortfolioNavbar() {
	return (
		<Container>
			<BrandContainer>ethan-taylan</BrandContainer>
			<NavContainer>
				<NavUl>
					<NavLi>_hello</NavLi>
					<NavLi>_about-me</NavLi>
					<NavLi>_works</NavLi>
				</NavUl>
			</NavContainer>
			<ContactBtn>_contact-me</ContactBtn>
		</Container>
	);
}

export default PortfolioNavbar;
