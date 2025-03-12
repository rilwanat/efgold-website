import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import HeaderHead from './HeaderHead';
import MobileNavbar from './MobileNavbar';


export default function Header({ 
  isMobile, isMenuOpen, toggleMenu, closeMenu
 }) {

  return (
    <div>

      <div>
        {isMobile ? <MobileNavbar 
          isMobile={isMobile} isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} closeMenu={closeMenu}
        /> : <div></div>}
      </div>
      <div className='flex w-full md:mt-0 mt-16'>
        <div className='w-full'>
          {/* {isMobile ? <div></div> : <HeaderHead 
            isMobile={isMobile} isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} closeMenu={closeMenu}
          />} */}
        </div>
      </div>
      
    </div>
  );
}
