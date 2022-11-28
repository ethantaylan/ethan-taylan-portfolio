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
import Orinoco from '../components/Works/PortfolioItems/Orinoco';
import PowerBottle from '../components/Works/PortfolioItems/PowerBottle';
import Reservia from '../components/Works/PortfolioItems/Reservia';

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
						//* page ABOUTME *//
						<Route
							path='/about-me'
							element={<AboutMe />}
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
						//* page WORKS *//
						<Route
							path='/works'
							element={<Works />}
						/>
						//* ROUTES FOR PORTFOLIO ITEMS *//
						<Route
							path='/works/orinoco'
							element={<Works children={<Orinoco />} />}
						/>
						<Route
							path='/works/power-bottle'
							element={<Works children={<PowerBottle />} />}
						/>
						<Route
							path='/works/reservia'
							element={<Works children={<Reservia />} />}
						/>
					</Routes>
				</SideBar>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
