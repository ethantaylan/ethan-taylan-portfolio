import React from 'react';

const ContactForm = () => {
	return (
		<div>
			<div className='w-100 d-flex flex-column mt-5 p-5'>
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

					<textarea name='text'></textarea>
					<input
						className='submit-message'
						type='submit'
						value='submit-message'
					/>
				</form>
			</div>
		</div>
	);
};

export default ContactForm
