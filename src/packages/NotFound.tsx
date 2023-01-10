import { AiOutlineArrowLeft } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
	return (
		<div className='d-block w-100 p-5'>
			<div className='d-flex text-white justify-content-center flex-column align-items-center container-full-page'>
				<h1 style={{ color: '#607b96', fontSize: '50px' }}>404</h1>
				<h1
					className='my-text-primary'
					style={{
						color: '#607b96',
						padding: '40px',
						marginBottom: '30px',
						fontSize: '25px',
					}}
				>
					Page not found
				</h1>
				<NavLink
					style={{ position: 'absolute', bottom: '10%', fontSize: '20px', color: '#607b96' }}
					to='/home'
				>
					<AiOutlineArrowLeft />
				</NavLink>
			</div>
		</div>
	);
};

export default NotFound;
