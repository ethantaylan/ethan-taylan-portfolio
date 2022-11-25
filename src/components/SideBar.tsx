import React from 'react';
import styled from 'styled-components';
import { Colors } from './Colors';
import { AiFillHome } from 'react-icons/ai';
import { RiContactsFill } from 'react-icons/ri';
import { FaFileCode } from 'react-icons/fa';
import { createGlobalStyle } from 'styled-components';
import { NavLink } from 'react-router-dom';

const GlobalStyle = createGlobalStyle`
    .app-bg {
        background-color: #011627;
		border-right: 1px solid ${Colors.secondary};
    }
`;

const SideBarContainer = styled.div`
	width: auto;
	height: 100%;
	background-color: ${Colors.appBg};
	border: 1px solid ${Colors.secondary};
	border-bottom: none;
	border-top: none;
	display: flex;
	align-items: center;
	flex-direction: column;
`;

const SideBarUl = styled.ul`
	height: auto;
	width: 100%;
	color: ${Colors.primary};
	display: flex;
	justify-content: space-around;
	padding-top: 20px;
	font-size: 18px;
	flex-direction: column;
	align-items: center;
`;

interface SideBarProps {
	children: any;
}

const SideBarLi = styled.li`
	padding: 15px;
	&:hover {
		cursor: ${Colors.cursor};
		color: ${Colors.white};
		background-color: ${Colors.secondary};
	}
`;

const SideBar: React.FC<SideBarProps> = ({ children }) => {
	return (
		<div className='app-bg h-100 w-100 d-flex flex-row'>
			<GlobalStyle />
			<SideBarContainer>
				<SideBarUl>
					<NavLink to='/'>
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
		</div>
	);
};

export default SideBar;
