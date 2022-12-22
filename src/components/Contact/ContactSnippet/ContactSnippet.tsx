import './contact-snippet.scss';

export interface ContactSnippetProps {
	email: string;
	message: string;
	name: string;
	showContactSnippet: boolean;
}

const ContactSnippet: React.FC<ContactSnippetProps> = ({
	showContactSnippet,
	email,
	message,
	name,
}) => {
	const day = new Date().getDate();
	const month = new Date().getMonth();
	const year = new Date().getFullYear();

	return (
		<div
			className={
				showContactSnippet
					? 'd-none'
					: 'my-border-left align-items-center flex-column line-height-20 w-100 h-100 p-5 d-flex justify-content-center'
			}
		>
			<h1 className='primary'>// live contact form</h1>

			<div className='d-flex contact-snippet-bg flex-column justify-content-center'>
				<h1>
					<span className='rose-code'>const </span>
					<span className='white-code'>button </span>
					<span className='cyan-code'>= </span>
					<span className='blue-code'>
						<span className='white-code'>document.</span>querySelector
						<span className='rose-code'>(</span>
						<span className='green-code'>'#sendBtn'</span>
						<span className='rose-code'>);</span>
					</span>
				</h1>
				<br />
				<h1>
					{' '}
					<span className='rose-code'>const </span>
					<span className='white-code'>message </span>
					<span className='rose-code'>= </span>
					<span className='acc-code'>{`{ `}</span>
					<br />
					<div className='text-space-left'>
						<span className='white-code'>name</span>
						<span className='cyan-code'>: </span>
						<span className='green-code'>
							<span className='cyan-code'>"</span>
							{name}
							<span className='cyan-code'>",</span>
						</span>
						<br />
						<span className='white-code'>email</span>
						<span className='cyan-code'>: </span>
						<span className='green-code'>
							<span className='cyan-code'>"</span>
							{email}
							<span className='cyan-code'>",</span>
						</span>
						<br />
						<span className='white-code'>message</span>
						<span className='cyan-code'>: </span>
						<span className='green-code'>
							<span className='cyan-code'>"</span>
							{message}
							<span className='cyan-code'>",</span>
						</span>
						<br />
						<span className='white-code'>date</span>
						<span className='cyan-code'>: </span>
						<span className='green-code'>
							<span className='cyan-code'>"</span>
							<span>
								{day}-{month}-{year}
							</span>
							<span className='cyan-code'>",</span>
						</span>
						<br />
					</div>
					<span className='acc-code'>{`} `}</span>
				</h1>
				<br />
				<span className='white-code'>
					button.<span className='blue-code'>addEventListener</span>
					<span className='rose-code'>
						(<span className='green-code'>'click',</span>{' '}
						<span className='acc-code'>
							(){' '}
							<span className='rose-code'>
								{`=>`} <span className='acc-code'>{`{ `}</span>
							</span>
						</span>
					</span>
				</span>
				<div className='text-space-left'>
					<span className='white-code'>
						form.<span className='blue-code'>send</span>
						<span className='rose-code'>
							(<span className='white-code'>message</span>)
						</span>
						<span className='cyan-code'>;</span>
					</span>
				</div>
				<span className='acc-code'>
					{`}`}
					<span className='rose-code'>)</span>
				</span>
			</div>
		</div>
	);
};

export default ContactSnippet;
