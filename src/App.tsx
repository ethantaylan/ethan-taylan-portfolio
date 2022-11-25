// import Home from './packages/Home/Home';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import AboutMe from './packages/AboutMe/SideBar';


function App() {
	return (
		<div className='App h-75 p-3'>
			<Navbar />
			{/* <Home /> */}
			<AboutMe />
			<Footer />
		</div>
	);
}

export default App;
