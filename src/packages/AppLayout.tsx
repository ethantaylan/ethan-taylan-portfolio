// import Home from './packages/Home/Home';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Biography from '../components/AboutMe/AboutMe/Biography/Biography';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import SideBar from '../components/Navbar/Sidebar/SideBar';
import AboutMe from './AboutMe/AboutMe';
import ContactMe from './ContactMe/ContactMe';
import Home from './Home/Home';
import NotFound from './NotFound';
import Works from './Works/Works';

function App() {
  return (
    <BrowserRouter>
      <div className="applayout d-flex justify-content-between flex-column">
        <Navbar />
        <SideBar>
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            //* page ABOUTME *//
            <Route path="/about-me" element={<AboutMe />} />
            <Route
              path="/about-me/biography"
              element={<AboutMe children={<Biography />} />}
            />
                        <Route
              path="/about-me/carreer"
              // element={<AboutMe children={<Carrer />} />}
            />
            //* page WORKS *//
            <Route path="/works" element={<Works />} />
            //* ROUTES FOR CONTACT PAGE//
            <Route
              path="/contact-me"
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
