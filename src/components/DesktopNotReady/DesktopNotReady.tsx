import React from 'react';
import './desktop-not-ready.scss';
import useMediaQuery from '../../hooks/useMediaQuery';
import { ProgressBar } from 'react-bootstrap';
type Props = {};

const DesktopNotReady = (props: Props) => {
	const matches = useMediaQuery('(min-width: 768px)');

	return (
		<div className={matches ? 'd-block' : 'd-none'}>
			<div className='d-flex justify-content-center flex-column align-items-center container-full-page'>
				<h1 style={{ color: 'white', marginBottom: '40px' }}>Desktop mode not ready :(</h1>
				<div className='w-50'>
				<h6 style={{textAlign:'end', color: 'gray' }}>73%</h6>
					<ProgressBar now={73} />
				</div>
			</div>
		</div>
	);
};

export default DesktopNotReady;
