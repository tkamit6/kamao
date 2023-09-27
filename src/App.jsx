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
          <Route path="/" element={<LandingPage />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/business" element={<BusinessPage />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/team-leader" element={<TeamLeader />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>

    </>
  );
}

export default App;
