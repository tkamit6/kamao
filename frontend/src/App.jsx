import './App.css';
import { Footer } from './pages/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BusinessPage } from './pages/BusinessPage';
import LandingPage from './pages/LandingPage';
import About from './pages/About'
import TeamLeader from './pages/TeamLeader';
import PageNotFound from './pages/PageNotFound';
import Example from './pages/Example'
import { useEffect } from 'react';

function App() {

  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])
  return (
    <>
      <BrowserRouter>
        {/* <Navbar/> */}
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/landing" element={<LandingPage />} />
          <Route exact path="/business" element={<BusinessPage />} />
          <Route exact path="/about-us" element={<About />} />
          <Route exact path="/team-leader" element={<TeamLeader />} />
          <Route exact path="/ex" element={<Example />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>

    </>
  );
}

export default App;
