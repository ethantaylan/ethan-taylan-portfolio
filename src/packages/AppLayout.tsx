// import Home from './packages/Home/Home';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import AboutMe from './AboutMe/AboutMe';
import Home from './Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Bio from '../components/AboutMe/Biography/Biography';
import Hobbies from '../components/AboutMe/Hobbies/Hobbies';
import Education from '../components/AboutMe/Education/Education';
import Works from './Works/Works';
import Portfolio from '../components/Works/Portfolio/PortfolioItems/Portfolio';
import ContactMe from './ContactMe/ContactMe';
import Contact from '../components/Contact/Contact';
import SideBar from '../components/Navbar/Sidebar/SideBar';
import NotFound from './NotFound';

function App() {
	return (
		<BrowserRouter>
			<div className='applayout d-flex justify-content-between flex-column'>
				<Navbar />
				<SideBar>
					<Routes>
						<Route
							path='*'
							element={<NotFound />}
						/>
						<Route
							path='/'
							element={<Home />}
						/>
												<Route
							path='/home'
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
							path='/works/portfolio'
							element={<Works children={<Portfolio />} />}
						/>
						//* ROUTES FOR CONTACT PAGE//
						<Route
							path='/contact-me'
							element={<ContactMe children={<Contact />} />}
						/>
					</Routes>
				</SideBar>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
