import React from 'react';
import './contact.scss';

const Contact = () => {
	return (
		<React.Fragment>
			<h1 className='about-me-title'>_contact-me</h1>

			<div className='w-100 d-flex flex-column p-5'>
				<form>
					<span className='input-labels'>_name :</span>
					<input
						name='name'
						type='text'
                        className='mb-4'

					/>
					<span className='input-labels'>_email :</span>

					<input
						name='email'
						type='text'
                        className='mb-4'
					/>
					<span className='input-labels'>_message :</span>

					<textarea
						name='text'
					></textarea>
					<input
						className='submit-message'
						type='submit'
						value='submit-message'
					/>
				</form>
			</div>
		</React.Fragment>
	);
};
export default Contact;
