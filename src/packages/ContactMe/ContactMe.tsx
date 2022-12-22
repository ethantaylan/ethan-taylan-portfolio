import React from 'react';

interface ContactMeProps {
	children: any
}

const ContactMe: React.FC<ContactMeProps> = ({ children }) => {
	return <div className='w-100'>{children}</div>;
};

export default ContactMe;
