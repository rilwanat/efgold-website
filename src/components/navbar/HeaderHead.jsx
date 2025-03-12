import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import PlaceIcon from '@mui/icons-material/Place';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

import logo from '../../assets/images/logo.png';
import appStore from '../../assets/svg/app-store-badge.svg';
import playStore from '../../assets/svg/play-store-badge.svg';

import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';

import stars from '../../assets/images/stars.png';


import EmailComponent from '../widgets/EmailComponent.jsx';
import CallComponent from '../widgets/CallComponent.jsx';

export default function HeaderHead({ 
  isMobile, isMenuOpen, toggleMenu, closeMenu
 }) {
  const navigate = useNavigate();

  useEffect(() => {
  }, []);


  return (
    <>
      {/* <div className="absolute inset-0 ">
        <img
          src={stars}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div> */}
      <div className='px-8 md:px-4 lg:px-16 xl:px-24 2xl:px-80  flex flex-col md:flex-row items-center justify-between pt-2'  style={{ backgroundColor: '#1D2024' }}>
        <div className='flex w-1/2'>
          {/* <div className='flex mr-8 items-center text-theme'>
            <div className='mr-2'><PlaceIcon style={{ width: '18px', height: '20px', color: '#CBD67A'  }} /></div>
            <a className='whitespace-nowrap' style={{ fontWeight: '600', cursor: 'pointer',  }} 
            href='/'
            >E.F GOLD</a>
          </div> */}
          <EmailComponent />
          <CallComponent />
            
        </div>
        <div className='flex items-center justify-end w-1/2 h-full'>
          
        <div className='flex items-center ' style={{ height: '48px' }}>
              
        <div
            className=" flex items-center justify-center   hover:text-themeColor  text-theme"
            // style={{ height: '48px', width: '40px', borderRadius: '4px' }}
            // onClick={() => { logout(); }}
          >
            <a href='https://www.facebook.com/efnetworkltd' target='_blank'>
              <FacebookIcon 
                className='ml-4 cursor-pointer hover:text-themeColor text-theme'
                alt="" 
                style={{ width: '20px', height: '20px', objectFit: 'cover'}}
              />
              </a>
          </div>

          <div
            className=" flex items-center justify-center   hover:text-themeColor text-themeColor"
            // style={{ height: '48px', width: '40px', borderRadius: '4px' }}
            // onClick={() => { logout(); }}
          >
            <a href='https://x.com/efnetworkltd' target='_blank'><XIcon   
                className='ml-4 cursor-pointer hover:text-themeColor text-theme'
                alt="" 
                style={{ width: '20px', height: '20px', objectFit: 'cover' }}
              /></a>
          </div>

          <div
            className=" flex items-center justify-center   hover:text-themeColor  text-theme"
            // style={{ height: '48px', width: '40px', borderRadius: '4px' }}
            // onClick={() => { logout(); }}
          >
            <a href='https://www.linkedin.com/company/ef-networks-ltd/posts/?feedView=all' target='_blank'><LinkedInIcon 
                className='ml-4 cursor-pointer hover:text-themeColor'
                alt="" 
                style={{ width: '20px', height: '20px', objectFit: 'cover'  }}
              /></a>
          </div>

          <div
            className=" flex items-center justify-center   hover:text-themeColor  text-theme"
            // style={{ height: '48px', width: '40px', borderRadius: '4px' }}
            // onClick={() => { logout(); }}
          >
            <a href='https://www.instagram.com/efnetworkltd/' target='_blank'><InstagramIcon 
                className='ml-4 cursor-pointer hover:text-themeColor'                
                style={{ width: '20px', height: '20px', objectFit: 'cover'  }}
              /></a>
          </div>
              
              
              
              
              
              
              
            </div>
         
          
        </div>

      </div>



      
    </>
  );
}
