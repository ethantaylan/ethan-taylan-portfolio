import React from 'react';
import LeftContent from './LeftContent/LeftContent';
import RightContent from './RightContent/RightContent';



function Home() {
	return (
		<React.Fragment>
			<div className='w-100 h-100 app-bg my-border-right my-border-left d-flex justify-content-center'>
				<div className='h-100 w-100 d-flex'>
					<LeftContent />
					<RightContent className="d-768-none" />
				</div>
			</div>
		</React.Fragment>
	);
}

export default Home;
