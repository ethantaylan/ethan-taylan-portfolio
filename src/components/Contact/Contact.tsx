import React from 'react';
import FolderItems from '../Navbar/FolderBar/FolderItems/FolderItems';
// import FolderSubItems from '../Navbar/FolderBar/FolderSubItems';
import ContactForm from './ContactForm';
import './contact.scss';
import FolderSubItems from '../Navbar/FolderBar/FolderSubItems';

const Contact = () => {
	const [isSocialsActive, setIsSocialsActive] = React.useState<boolean>(false);
	// const [isContactMeActive, setIsContactMeActive] =
	// 	React.useState<boolean>(false);

	const onClickHandlerSocials = () => {
		setIsSocialsActive(!isSocialsActive);
	};

	// const onClickHandlerContactMe = () => {
	// 	setIsContactMeActive(!isContactMeActive);
	// };
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
						{isSocialsActive ? (
				<>
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
					/>{' '}
				</>
			) : (
				''
			)}

			<ContactForm />
		</React.Fragment>
	);
};
export default Contact;
