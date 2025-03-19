import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useState, useEffect } from 'react';

import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import EFGoldPage from './components/EFGoldPage.jsx';
import AboutPage from './components/AboutPage.jsx';
import WhyChooseUsPage from './components/WhyChooseUsPage.jsx';
import FaqPage from './components/FaqPage.jsx';
import ContactPage from './components/ContactPage.jsx';
import BuyGold from './components/BuyGold.jsx';

 
     

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
            <Route path='/about-us' element={<AboutPage isMobile={isMobile} isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} closeMenu={closeMenu} />}/>
            <Route path='/why-choose-us' element={<WhyChooseUsPage isMobile={isMobile} isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} closeMenu={closeMenu} />}/>
            <Route path='/faq' element={<FaqPage isMobile={isMobile} isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} closeMenu={closeMenu} />}/>
            <Route path='/contact' element={<ContactPage isMobile={isMobile} isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} closeMenu={closeMenu} />}/>
            <Route path='/buy-gold' element={<BuyGold isMobile={isMobile} isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} closeMenu={closeMenu} />}/>

            </Routes>
            
        </div>
      </div>
    </Router>
  )
}

export default App
