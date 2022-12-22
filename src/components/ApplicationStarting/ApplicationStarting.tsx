import React from 'react';
import { useSwipeable } from 'react-swipeable';
import './application-starting.scss';

const ApplicationStarting = () => {
	// const matches = useMediaQuery('(min-width: 768px)');

	const [swipped, setSwipped] = React.useState(false);

	const handlers = useSwipeable({
		onSwiped: () => {
			setSwipped(true);
		},
	});

	return (
		<div className={handlers ? 'd-block' : 'd-none'}>
			<div
				className={`${
					swipped
						? 'd-none'
						: 'd-flex app-bg primary justify-content-center flex-column application-starting-container'
				}`}
			>
				{' '}
				<span className='m-2'>
					<div {...handlers}> {'->'} </div>
				</span>
				<div className='square-container'>
					<div className='square'></div>
				</div>
			</div>
		</div>
	);
};

export default ApplicationStarting;
