import React from 'react';
import styled from 'styled-components';
import SideBar from '../../components/Navbar/SideBar';
import AboutMe from './AboutMe';

const Square = styled.div`
	width: 200px;
	height: 200px;
	background-color: red;
`;

interface BioProps {
	children: any;
}

const Bio: React.FC<BioProps> = ({ children }) => {
	return (
		<div>
			<SideBar children={<AboutMe children={children} />} />
			<Square />
		</div>
	);
};

export default Bio;
