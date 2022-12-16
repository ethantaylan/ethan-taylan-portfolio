import React from 'react';
import FolderItems from '../Navbar/FolderBar/FolderItems/FolderItems';
import FolderSubItems from '../Navbar/FolderBar/FolderSubItems';
import ContactForm from './ContactForm';
import './contact.scss';

const Contact = () => {
	const [isSocialsActive, setIsSocialsActive] = React.useState<boolean>(false);
	const [isContactMeActive, setIsContactMeActive] =
		React.useState<boolean>(false);

	const onClickHandlerSocials = () => {
		setIsSocialsActive(!isSocialsActive);
		console.log('test');
		
	};

	const onClickHandlerContactMe = () => {
		setIsContactMeActive(!isContactMeActive);
	};
	return (
		<React.Fragment>
			{/* <FolderItems
				onClick={() => onClickHandlerContactMe()}
				folderColors={'Khaki'}
				title={'contact-me'}
			/>
			{isContactMeActive && (
				<FolderSubItems
					subItemTitle='contact-form.tsx'
					to={'/contact-me'}
				/>
			)} */}

			<FolderItems
				onClick={() => onClickHandlerSocials()}
				folderColors={'LightSeaGreen'}
				title={'socials'}
			/>

			<ContactForm />
		</React.Fragment>
	);
};
export default Contact;
