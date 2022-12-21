import React from 'react';
import './works.scss';

interface WorksProps {
	children?: any;
}

const Works: React.FC<WorksProps> = ({ children }) => {
	return <React.Fragment>{children}</React.Fragment>;
};

export default Works;
