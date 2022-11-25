import Navbar from '../../components/Navbar/Navbar';
import RightContent from './RightContent/RightContent';

function Home() {
	return (
		<>
			<Navbar />
			<div className='d-flex w-100 h-100 justify-content-center align-items-center'>
				<div className='d-flex'>test</div>
				<RightContent />
			</div>
		</>
	);
}

export default Home;
