import React from 'react';
import useMediaQuery from '../../../hooks/useMediaQuery';
import ContactSnippet from '../ContactSnippet/ContactSnippet';

const ContactForm = () => {
	const [name, setName] = React.useState<string>('');
	const [email, setEmail] = React.useState<string>('');
	const [message, setMessage] = React.useState<string>('');

	const getNameInputValue = (event: any) => {
		event.preventDefault();
		setName(event.target.value);
	};
	const getEmailInputValue = (event: any) => {
		event.preventDefault();
		setEmail(event.target.value);
	};
	const getMessageInputValue = (event: any) => {
		event.preventDefault();
		setMessage(event.target.value);
	};

	React.useEffect(() => {
		setName(name);
		setEmail(email);
		setMessage(message);
	}, [name, email, message]);

	const matches = useMediaQuery('(max-width: 768px)');

	return (
		<div className='d-flex flex-row h-100 w-100'>
			<div className='w-100 d-flex'>
				<div className='p-5 d-flex justify-content-center align-items-center w-100'>
					<form className={matches ? 'w-100' : 'w-75'}>
						<span className='input-labels'>_name : </span>
						<input
							name='name'
							type='text'
							className='mb-4'
							onChange={getNameInputValue}
						/>
						<span className='input-labels'>_email :</span>

						<input
							name='email'
							type='text'
							className='mb-4'
							onChange={getEmailInputValue}
						/>
						<span className='input-labels'>_message :</span>

						<textarea
							onChange={getMessageInputValue}
							name='text'
						></textarea>
						<input
							className='submit-message'
							type='submit'
							value='submit-message'
						/>
					</form>
				</div>
				<ContactSnippet
					email={email}
					message={message}
					name={name}
					showContactSnippet={matches ? true : false}
				/>
			</div>
		</div>
	);
};

export default ContactForm;
