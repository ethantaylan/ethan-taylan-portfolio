import React from 'react';
import './works.scss';

interface AboutMeProps {
	children?: any;
}

const AboutMe: React.FC<AboutMeProps> = ({ children }) => {
	return (
		<React.Fragment>
				{children}
		</React.Fragment>
	);
};

export default AboutMe;
