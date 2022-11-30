import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Generics } from '../Generics';

const MobileNavbarContainer = styled.div`
	height: 100%;
	width: 100%;
	background-color: ${Generics.appBg};
	border-left: 1px solid ${Generics.secondary};
	border-right: 1px solid ${Generics.secondary};
	border-bottom: 1px solid 1px solid ${Generics.secondary};
	position: absolute;
`;

const MobileNavbarUl = styled.ul`
	height: 100%;
	width: 100%;
`;

const MobileNavbarLi = styled.li`
	padding: 20px 20px 20px 20px;
	color: ${Generics.white};
	border-bottom: 1px solid ${Generics.secondary};
	&:hover {
		background-color: ${Generics.primary};
	}
`;

interface MobileNavbarProps {
	className: string;
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({ className }) => {
	return (
		<MobileNavbarContainer className={className}>
			<MobileNavbarUl>
				<NavLink to='/home'>
					<MobileNavbarLi>_home</MobileNavbarLi>
				</NavLink>
				<NavLink to='/about-me'>
					<MobileNavbarLi>_about-me</MobileNavbarLi>
				</NavLink>
				<NavLink to='/works'>
					<MobileNavbarLi>_works</MobileNavbarLi>
				</NavLink>
				<NavLink to='/home'>
					<MobileNavbarLi>_contact-me</MobileNavbarLi>
				</NavLink>
			</MobileNavbarUl>
		</MobileNavbarContainer>
	);
};

export default MobileNavbar;
