// import Home from './packages/Home/Home';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import SideBar from '../components/Navbar/SideBar';
import AboutMe from './AboutMe/AboutMe';
import Home from './Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Bio from '../components/AboutMe/Biopgrahy/Biography';
import Hobbies from '../components/AboutMe/Hobbies/Hobbies';
import Education from '../components/AboutMe/Education/Education';
import Works from './Works/Works';

function App() {
	return (
		<BrowserRouter>
			<div className='h-100 w-100 d-flex justify-content-between flex-column p-5'>
				<Navbar />
				<SideBar>
					<Routes>
						<Route
							path='/'
							element={<Home />}
						/>
						<Route
							path='/about-me'
							element={<AboutMe />}
						/>
						<Route
							path='/works'
							element={<Works />}
						/>
						<Route
							path='/about-me/biography'
							element={<AboutMe children={<Bio />} />}
						/>
						<Route
							path='/about-me/hobbies'
							element={<AboutMe children={<Hobbies />} />}
						/>
						<Route
							path='/about-me/education'
							element={<AboutMe children={<Education />} />}
						/>
					</Routes>
				</SideBar>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
