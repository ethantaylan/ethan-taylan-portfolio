import { Github, Instagram, Linkedin } from 'react-bootstrap-icons';
import { FaLinkedinIn } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import styled from 'styled-components';
import { Generics } from '../Generics';

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
	border-bottom-right-radius: 10px;
	border-bottom-left-radius: 10px;
`;

const FindMeContainer = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
	color: ${Generics.primary};
	padding-left: 20px;
	padding-right: 20px;
	cursor: ${Generics.cursor};
	border-right: 1px solid ${Generics.secondary};
	@media (width < 768px) {
	display: none;
}
`;

const NavContainer = styled.nav`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
`;

const GithubBtn = styled.span`
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	border-left: 1px solid ${Generics.secondary};
	text-decoration: none;
	color: ${Generics.primary};
	padding: 0 20px 0 20px;
	&:hover {
		border-bottom: 2px solid orange;
		cursor: ${Generics.cursor};
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
	width: 100%;
	padding-left: 15px;
	padding-right: 15px;
	cursor: ${Generics.cursor};
	&:hover {
		border-bottom: 2px solid orange;
		cursor: ${Generics.cursor};
		color: ${Generics.white};
	}
`;

function Footer() {
	return (
		<Container className='global-types'>
			<FindMeContainer>find-me-in</FindMeContainer>
			<NavContainer>
				<NavUl>
					<a
						target='_blank'
						className='w-100 h-100'
						href='https://www.instagram.com/et.tln/'
					>
						<NavLi>
							<AiFillInstagram />
						</NavLi>
					</a>
					<a
						target='_blank'
						className='w-100 h-100'
						href='https://fr.linkedin.com/in/ethan-taylan-697831199'
					>
						<NavLi>
							<FaLinkedinIn />
						</NavLi>
					</a>
				</NavUl>
			</NavContainer>
			<span className='h-100 d-flex justify-content-center align-items-center my-border-left px-4'>v1.0.0</span>
			<a
				target='_blank'
				className=' h-100'
				href='https://github.com/ethantaylan'
			>
				<GithubBtn>
					@ethtaylan
					<Github className='icons' />
				</GithubBtn>
			</a>
		</Container>
	);
}

export default Footer;
