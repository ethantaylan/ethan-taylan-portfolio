import React from 'react';
import FolderItems from '../Navbar/FolderBar/FolderItems/FolderItems';
import FolderSubItems from '../Navbar/FolderBar/FolderSubItems';
import ContactForm from './ContactForm';
import './contact.scss';

const Contact = () => {

	return (
		<React.Fragment>
			<FolderItems
				folderColors={'Khaki'}
				title={'contact-me'}
			/>
			<FolderSubItems
				subItemTitle='contact-form.tsx'
				to={'/contact-me'}
			/>
			<FolderItems
				folderColors={'LightSeaGreen'}
				title={'socials'}
			/>
			<FolderSubItems
				subItemTitle='instagram.ts'
				to={'/contact-me'}
			/>
			<FolderSubItems
				subItemTitle='facebook.ts'
				to={'/contact-me'}
			/>
			<FolderSubItems
				subItemTitle='linkedin.ts'
				to={'/contact-me'}
			/>
						<FolderSubItems
				subItemTitle='github.ts'
				to={'/contact-me'}
			/>
			<ContactForm />
		</React.Fragment>
	);
};
export default Contact;
