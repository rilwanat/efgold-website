import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';




import PlaceIcon from '@mui/icons-material/Place';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

import logo from '../../assets/images/logo.png';

import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';


import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { motion, AnimatePresence } from 'framer-motion';


export default function MenuBar({ 
  isMobile, isMenuOpen, toggleMenu, closeMenu
 }) {

  const navigate = useNavigate();

    
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRefs = useRef([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const menuItems = [
    { label: 'HOME', href: '/' },
    { label: 'COMPANY', dropdown: [
      { label: 'About Us', href: '/about-us' },
      // { label: 'Our Team', href: '' },
      // { label: 'Why Choose Us', href: '/why-choose-us' },
      { label: 'FAQ', href: '/faq' },
    ] },
    { label: 'SUBSIDIARIES', dropdown: [
      { label: 'E.F. Network Ltd', href: 'https://eftechnology.net/' },
      { label: 'E.F. Waste Management Ltd', href: 'https://efwaste.com/' },
      { label: 'E.F. Skyview Ltd', href: 'https://efskyview.com/' },
      { label: 'Gabtaxi', href: 'https://gabtaxi.com/' },
    ] },
    // { label: 'MEDIA', dropdown: [
    //   { label: 'News', href: '/news' },
    //   { label: 'Articles', href: '/articles' },
    //   { label: 'Gallery', href: '/gallery' },
    // ] },
    { label: 'CONTACT', href: '/contact' },
  ];
  useEffect(() => {
    dropdownRefs.current = menuItems.map(() => React.createRef());
  }, [menuItems]);

  const handleMouseEnter = (index) => {
    setActiveDropdown(index);
    setHoveredIndex(index);
  };

  // const handleMouseLeave = (index) => {
  //   setHoveredIndex(null);
  //   setTimeout(() => {
  //     if (hoveredIndex === null) {
  //       setActiveDropdown(null);
  //     }
  //   }, 100);
  // };
  const handleMouseLeave = (event) => {
    setHoveredIndex(null);
    setActiveDropdown(null);
    // if (!event.currentTarget.contains(event.relatedTarget)) {
    //   setHoveredIndex(null);
    //   setTimeout(() => {
    //     if (hoveredIndex === null) {
    //       setActiveDropdown(null);
    //     }
    //   }, 200);
    // }
  };
  
  
  const navigateTo = (route) => {
    navigate(route);
  }


  return (
    

<div 
onMouseLeave={(e) => handleMouseLeave(e)}
        className={`sticky top-0  z-[1000] bg-white"
        }`}
      >
        <div className='px-8 md:px-4 lg:px-16 xl:px-24 2xl:px-80 py-2 flex flex-col md:flex-row justify-between items-center bg-darkGreyBack'

        > 
                <div 
                
                className="flex w-full justify-between items-center">
                  <div className="flex">

                  <a href='/'>
                  <img
                    className="block h-28 w-auto max-w-none"
                    src={logo}
                    alt="Logo"
                    onClick={() => {  }}
                    style={{ cursor: 'pointer' }}
                  />
                  </a>

                  
                  <div className='flex flex-col md:flex-row items-center justify-between ml-4'>
                          <div className='flex w-1/2'>
                            {/* <div className='flex mr-8 items-center text-theme'>
                              <div className='mr-2'><PlaceIcon style={{ width: '18px', height: '20px', color: '#CBD67A'  }} /></div>
                              <a className='whitespace-nowrap' style={{ fontWeight: '600', cursor: 'pointer',  }} 
                              href='/'
                              >E.F GOLD</a>
                            </div> */}
                            <div className='flex mr-8 cursor-pointer  text-theme'
                              onClick={() => {}}
                            >
                                <div className='mr-2'><EmailIcon style={{ width: '18px', height: '20px'  }} /></div>
                                <div className='flex flex-col' style={{ color: '#eeeeee' }}>
                                  <div>info@efgold.net</div>
                                </div>
                              </div>
                              <div className='flex mr-8 cursor-pointer text-theme' 
                              onClick={() => {}}
                            >
                                <div className='mr-2'><CallIcon style={{ width: '18px', height: '20px'  }} /></div>
                                <div className='flex flex-col' style={{ color: '#eeeeee' }}>
                                  <div className="whitespace-nowrap">+234 809 111 3333</div>
                                </div>
                              </div>
                          </div>
                          <div className='flex items-center justify-end w-1/2 h-full'>
                            
                          <div className='flex items-center ' style={{ height: '48px' }}>
                                
                                
                                
                                
                                
                                
                                
                              </div>
                           
                            
                          </div>
                  
                        </div>

                  </div>
                  

















        
                  <div className='flex ml-0 '>
                  <div 
                  
                  className="flex w-full items-center z-50" style={{ height: '40px' }}>
      {menuItems.map((item, index) => (
        <div
          key={index}
          className={`cursor-pointer ${index === menuItems.length - 1 ? '' : 'mr-8'} flex relative`}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave(index)}
        >
          <a
            className="text-sm text-white cursor-pointer hover:text-theme"
            style={{ fontWeight: '400', cursor: 'pointer' }}
            href={item.href}
          >
            {item.label}
          </a>
          {item.dropdown && (
            <KeyboardArrowDownIcon
              className="text-white"
              style={{ width: '20px', height: '20px', paddingTop: '1px',  marginLeft: '2px',}}
            />
          )}

          <AnimatePresence>
            {activeDropdown === index && item.dropdown && (
              <motion.div
                ref={dropdownRefs.current[index]}
                className="absolute top-full left-0 bg-white shadow-sm rounded-sm p-2 min-w-[240px] mt-4"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget)) {
                    setHoveredIndex(null);
                    setTimeout(() => {
                      if (hoveredIndex === null) {
                        setActiveDropdown(null);
                      }
                    }, 100);
                  }
                }}
              >
                {item.dropdown.map((subItem, subIndex) => (
                  <div>
                  <a
                    key={subIndex}
                    href={subItem.href}
                    className="block p-2 hover:bg-theme hover:text-white rounded-sm cursor-pointer" 
                    target={`${ item.label == 'COMPANY' || 'CONTACT' ? '' : '_blank'}`}
                  >
                    {subItem.label}
                  </a>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>

    <div className='ml-2 flex items-center bg-theme rounded-lg px2 justify-center text-bold cursor-pointer hover:text-theme hover:bg-black'
    style={{ width: '160px'}}    
    onClick={() => {navigateTo('/buy-gold');}}  
    >
      Buy Gold
    </div>

    
    
 



                  </div>
                  
                </div>
        
                
        
        
              </div>
      </div>
  );
}





