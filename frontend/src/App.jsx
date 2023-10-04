import './App.css';
import { Footer } from './pages/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BusinessPage } from './pages/BusinessPage';
import LandingPage from './pages/LandingPage';
import About from './pages/About'
import TeamLeader from './pages/TeamLeader';
import PageNotFound from './pages/PageNotFound';

function App() {
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
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>

    </>
  );
}

export default App;
