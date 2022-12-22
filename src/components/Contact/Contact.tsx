import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import './contact.scss';
import ContactSnippet from './ContactSnippet/ContactSnippet';

const Contact = () => {
	return (
		<div className='d-flex h-100 w-100'>
			<ContactForm />
			<ContactSnippet />
		</div>
	);
};
export default Contact;
