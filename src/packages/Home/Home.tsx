import LeftContent from './LeftContent/LeftContent';
import RightContent from './RightContent/RightContent';

function Home() {
	return (
		<>
			<div className='w-100 h-100 app-bg d-flex justify-content-center'>
				<div className='h-100 w-100 d-flex'>
					<LeftContent />
					<RightContent />
				</div>
			</div>
		</>
	);
}

export default Home;
