// import Home from './packages/Home/Home';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar/Navbar';
import AboutMe from './packages/Home/AboutMe';


function App() {
	return (
		<div className='App h-75 p-3'>
			<Navbar />
			{/* <Home /> */}
			<AboutMe />
		</div>
	);
}

export default App;
