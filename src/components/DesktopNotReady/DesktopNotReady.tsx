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
				<h1 className='my-text-primary' style={{marginBottom: '30px', fontSize: '25px' }}>Desktop mode not ready :(</h1>
				<div className='w-50'>
				<h6 className='my-text-primary' style={{textAlign: 'end'}}>73%</h6>
					<ProgressBar now={73} />
				</div>
                <h6 className='my-text-primary mt-5'>// reduce your window size until you see the mobile version</h6>
			</div>
		</div>
	);
};

export default DesktopNotReady;
