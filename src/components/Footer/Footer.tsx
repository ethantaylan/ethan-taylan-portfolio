import { Github, Instagram, Linkedin } from 'react-bootstrap-icons';
import { FaLinkedinIn } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import styled, { createGlobalStyle } from 'styled-components';

const primaryColor = '#607b96';
const secondaryColor = '#1e2d3d';
const appBg = '#011627';
const cursorPointer = { cursor: 'pointer' };

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
	border-bottom-right-radius: 10px;
	border-bottom-left-radius: 10px;
`;

const FindMeContainer = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
	color: ${primaryColor};
	padding-left: 20px;
	padding-right: 20px;
	${cursorPointer}
	border-right: 1px solid ${secondaryColor};
`;

const NavContainer = styled.nav`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
`;

const GithubBtn = styled.a`
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

const GlobalStyle = createGlobalStyle`
.icons {
    margin-left: 10px;
}
`;

function Footer() {
	return (
		<Container className='global-types'>
			<GlobalStyle />
			<FindMeContainer>find-me-in</FindMeContainer>
			<NavContainer>
				<NavUl>
					<NavLi>
						<AiFillInstagram />
					</NavLi>
					<NavLi>
						<FaLinkedinIn />
					</NavLi>
				</NavUl>
			</NavContainer>
			<GithubBtn>
				@ethtaylan
				<Github className='icons' />
			</GithubBtn>
		</Container>
	);
}

export default Footer;
