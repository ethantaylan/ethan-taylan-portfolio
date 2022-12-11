import React from 'react';

interface ContactMeProps {
	children: any
}

const ContactMe: React.FC<ContactMeProps> = ({ children }) => {
	return <div>{children}</div>;
};

export default ContactMe;
