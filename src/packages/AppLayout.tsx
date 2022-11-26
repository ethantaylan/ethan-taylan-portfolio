// import Home from './packages/Home/Home';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import SideBar from '../components/Navbar/SideBar';
import AboutMe from './AboutMe/AboutMe';
import Home from './Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Bio from '../components/AboutMeItems/Bio';

function App() {
	return (
		<BrowserRouter>
			<div className='h-100 w-100 d-flex justify-content-between flex-column p-3'>
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
							path='/about-me/bio'
							element={<AboutMe children={<Bio />} />}
						/>
					</Routes>
				</SideBar>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
