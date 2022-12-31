// import Home from './packages/Home/Home';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import SideBar from '../components/Navbar/Sidebar/SideBar';
import AboutMe from './AboutMe/AboutMe';
import ContactMe from './ContactMe/ContactMe';
import Home from './Home/Home';
import NotFound from './NotFound';
import Works from './Works/Works';
import Hobbies from '../components/TexteEmplacement/Hobbies';
import Education from '../components/TexteEmplacement/Education';
import Developer from '../components/TexteEmplacement/Developer';
import Skills from '../components/TexteEmplacement/Skills';
import Tools from '../components/TexteEmplacement/Tools';

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
              path="/about-me/education"
              element={<AboutMe children={<Education />} />}
            />
            <Route
              path="/about-me/skills"
              element={<AboutMe children={<Skills />} />}
            />
            <Route
              path="/about-me/tools"
              element={<AboutMe children={<Tools />} />}
            />
            <Route
              path="/about-me/hobbies"
              element={<AboutMe children={<Hobbies />} />}
            />
            <Route
              path="/about-me/developer"
              element={<AboutMe children={<Developer />} />}
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
