import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../components/Colors';
import { AiFillHome } from 'react-icons/ai';
import { RiContactsFill } from 'react-icons/ri';
import { FaFileCode } from 'react-icons/fa';

const SideBarContainer = styled.div`
	width: 65px;
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
	height: 30%;
	width: 100%;
	color: ${Colors.primary};
	display: flex;
	justify-content: space-around;
	padding-top: 20px;
	font-size: 18px;
	flex-direction: column;
	align-items: center;
`;

const SideBarLi = styled.li``;

function SideBar() {
	return (
		<div className='h-100'>
			<SideBarContainer>
				<SideBarUl>
					<SideBarLi>
						<AiFillHome />
					</SideBarLi>
					<SideBarLi>
						<RiContactsFill />
					</SideBarLi>
					<SideBarLi>
						<FaFileCode />
					</SideBarLi>
				</SideBarUl>
			</SideBarContainer>
		</div>
	);
}

export default SideBar;
