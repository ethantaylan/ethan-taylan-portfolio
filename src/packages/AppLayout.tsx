// import Home from './packages/Home/Home';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import SideBar from '../components/SideBar';
import AboutMe from './AboutMe/AboutMe';


function App() {
	return (
		<div className='h-100 d-flex justify-content-between flex-column p-3'>
			<Navbar />
			<SideBar children={<AboutMe />} />
			<Footer />
		</div>
	);
}

export default App;
