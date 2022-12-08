import React from 'react';
import styled from 'styled-components';
import { Generics } from '../Generics';
import { AiFillHome } from 'react-icons/ai';
import { RiContactsFill } from 'react-icons/ri';
import { FaFileCode } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const SideBarContainer = styled.div`
	width: auto;
	height: 100%;
	background-color: ${Generics.appBg};
	border: 1px solid ${Generics.secondary};
	border-bottom: none;
	border-top: none;
	display: flex;
	align-items: center;
	flex-direction: column;
	@media (width < 768px) {
		display: none;
	}
`;

const SideBarUl = styled.ul`
	height: auto;
	width: 100%;
	color: ${Generics.primary};
	display: flex;
	justify-content: space-around;
	padding-top: 20px;
	font-size: 18px;
	flex-direction: column;
	align-items: center;
`;

export interface SideBarProps {
	children?: any;
}

const SideBarLi = styled.li`
	padding: 15px;
	&:hover {
		cursor: ${Generics.cursor};
		color: ${Generics.white};
		background-color: ${Generics.secondary};
	}
`;

const Container = styled.div`
	display: flex;
	flex-direction: row;
	@media (width < 768px) {
		position: relative;
		border-right: 1px solid ${Generics};
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		background-color: ${Generics.appBg};
	}
`;

const SideBar: React.FC<SideBarProps> = ({ children }) => {
	return (
		<Container>
			<SideBarContainer>
				<SideBarUl className='d-768-none'>
					<NavLink to='/home'>
						<SideBarLi>
							<AiFillHome />
						</SideBarLi>
					</NavLink>
					<NavLink to='/about-me'>
						<SideBarLi>
							<RiContactsFill />
						</SideBarLi>
					</NavLink>
					<NavLink to='/works'>
						<SideBarLi>
							<FaFileCode />
						</SideBarLi>
					</NavLink>
				</SideBarUl>
			</SideBarContainer>
			{children}
		</Container>
	);
};

export default SideBar;
