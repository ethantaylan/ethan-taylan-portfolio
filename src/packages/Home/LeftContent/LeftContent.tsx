import { NavLink } from 'react-router-dom';
import './left-content.scss';

const LeftContent = () => {
	return (
		<div className='left-content-main-container'>
			<div className='d-flex p-3W justify-content-around flex-column'>
				<div className='d-flex justify-content-around flex-column'>
					<span className='welcome'>_hello ! i'm</span>
					<span className='name'>Ethan Taylan</span>
					<span className='front-end'>{'>'} Frontend developer</span>
				</div>
				<div className='d-flex mt-5 justify-content-around flex-column'>
					<span className='left-content-subtitle'>
						// You can see my works {'->'}{' '}
						<NavLink
							style={{ fontWeight: 'bold', fontStyle: 'italic', cursor: 'pointer' }}
							to='/works/portfolio'
						>
							here
						</NavLink>
					</span>
					<span className='left-content-subtitle'>
						// You can also go to my Github page
					</span>

					<span className='github-link'>
						<span style={{ color: '#4d5bce' }}>const</span>{' '}
						<span style={{ color: '#43D9AD' }}>GithubLink</span> ={' '}
						<span style={{ color: 'orange' }}>
							<a
								target='_blank'
								href='https://github.com/ethantaylan/'
								className='my-2'
							>
								<span className='text-decoration-underline-hover'>
									https://github.com/ethantaylan/
								</span>
							</a>
						</span>
					</span>
				</div>
			</div>
		</div>
	);
};

export default LeftContent;
