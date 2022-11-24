import './Navbar.scss';
import styled from 'styled-components';

const primaryColor = '#607b96';
const secondaryColor = '#1e2d3d';

const Container = styled.div`
	width: 100%;
	height: 50px;
	display: flex;
	flex-direction: row;
	align-items: center;
`;

const BrandContainer = styled.div`
	width: 225px;
	height: 100%;
	display: flex;
	align-items: center;
	border-right: 1px solid ${secondaryColor};
	color: ${primaryColor};
	padding-left: 20px;
	border-bottom: 1px solid ${secondaryColor};
`;

const NavContainer = styled.nav`
	width: 100%;
	height: 100%;
	border-bottom: 1px solid ${secondaryColor};
	display: flex;
	align-items: center;
`;

const ContactBtn = styled.a`
	border-bottom: 1px solid ${secondaryColor};
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	border-left: 1px solid ${secondaryColor};
	text-decoration: none;
	color: ${primaryColor};
	padding: 0 20px 0 20px;
`;

const NavUl = styled.ul`
	width: 50%;
	height: 100%;
    display: flex;
    align-items: center;
`;

const NavLi = styled.li``;

function PortfolioNavbar() {
	return (
		<Container>
			<BrandContainer>ethan-taylan</BrandContainer>
			<NavContainer>
				<NavUl>
					<NavLi>hello</NavLi>
				</NavUl>
			</NavContainer>
			<ContactBtn>contact</ContactBtn>
		</Container>
	);
}

export default PortfolioNavbar;
