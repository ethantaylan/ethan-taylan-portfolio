// import Home from './packages/Home/Home';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import SideBar from '../components/Navbar/SideBar';
import AboutMe from './AboutMe/AboutMe';
import Home from './Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Bio from './AboutMe/Bio';

function App() {
	return (
		<BrowserRouter>
			<div className='h-100 d-flex justify-content-between flex-column p-3'>
				<Navbar />
				<SideBar
					children={
						<Routes>
							<Route
								path='/about-me'
								element={<AboutMe children={<h1>fils dep uteeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</h1>}/>}
							></Route>
							<Route
								path='/about-me'
								element={<Bio />}
							></Route>
							<Route
								path='/'
								element={<Home />}
							></Route>
						</Routes>
					}
				/>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
