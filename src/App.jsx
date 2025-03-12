import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useState, useEffect } from 'react';

import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

// import LandingPage from './components/LandingPage.jsx';
// import AboutUsPage from './components/AboutUsPage.jsx';
// import OurTeamPage from './components/OurTeamPage.jsx';
// import WhyChooseUsPage from './components/WhyChooseUsPage.jsx';
// import CareersPage from './components/CareersPage.jsx';
// import FaqPage from './components/FaqPage.jsx';

import EFGoldPage from './components/EFGoldPage.jsx';

// import ContactPage from './components/ContactPage.jsx';
// import ProductsPage from './components/ProductsPage.jsx';
// import ProductPageAlert from './components/ProductPageAlert.jsx';
// import ProductPageCloud from './components/ProductPageCloud.jsx';
// import ProductPageCommunication from './components/ProductPageCommunication.jsx';
// import ProductPageECommerce from './components/ProductPageECommerce.jsx';
// import ProductPageEFBroadband from './components/ProductPageEFBroadband.jsx';
// import ProductPageEFPhone from './components/ProductPageEFPhone.jsx';
// import ProductPageSecurity from './components/ProductPageSecurity.jsx';
// import ProductPageTracker from './components/ProductPageTracker.jsx';

 
     

function App() {

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };

  

  return (
    <Router>
      <div>
        <div>

          <Routes>

            <Route path="/*" element={<div>NOT FOUND</div>} />            
            <Route path='/' element={<EFGoldPage isMobile={isMobile} isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} closeMenu={closeMenu} />}/>

            </Routes>
            
        </div>
      </div>
    </Router>
  )
}

export default App
