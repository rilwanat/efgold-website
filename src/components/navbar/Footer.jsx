import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import logo from '../../assets/images/logo.png';
import logo2 from '../../assets/images/logo.png';

import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';


import PlaceIcon from '@mui/icons-material/Place';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

import appStore from '../../assets/svg/app-store-badge.svg';
import playStore from '../../assets/svg/play-store-badge.svg';

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function Footer({ 
  isMobile, isMenuOpen, toggleMenu, closeMenu
 }) {
  const navigate = useNavigate();

  useEffect(() => {}, []);

  return (
    <>

    
      <div className='flex flex-col  h-auto px-4 lg:px-16 xl:px-24 2xl:px-80 py-4 pb-8 '  style={{ backgroundColor: '#1D2024' }}>
        <div className="flex flex-col items-start md:flex-row md:items-center md:justify-between ">
          <div className="flex flex-col md:items-start md:w-1/3 my-4 md:h-40">
            <div className="flex items-center mb-2 ">
              <img
                className="block h-14 w-auto max-w-none"
                src={logo2}
                alt="Logo"
                onClick={() => { navigate('/'); }}
                style={{ cursor: 'pointer' }}
              />
            </div>
            {/* <p className=' mb-2' style={{ color: '#eeeeee', fontSize: '20px' }}>ABOUT</p> */}
            <p className='' style={{ color: '#eeeeee', fontSize: '14px' }}>EFGold is a gold mining company operating in Abuja and Jos, dedicated to sustainable and responsible mining practices. With a commitment to excellence, we specialize in the exploration, extraction, and processing of high-quality gold, contributing to economic growth and industry innovation.</p>
            <div className='flex mt-4' style={{ color: '#eeeeee' }}>
              <a href='https://www.facebook.com/efnetworkltd' target='_blank'>
              <FacebookIcon 
                className='mr-4 cursor-pointer  text-theme'
                alt="" 
                style={{ width: '20px', height: '20px', objectFit: 'cover'  }}
              />
              </a>
              
              <a href='https://x.com/efnetworkltd' target='_blank'>
              <XIcon   
                className='mr-4 cursor-pointer  text-theme'
                alt="" 
                style={{ width: '20px', height: '20px', objectFit: 'cover'  }}
              /></a>
              
              <a href='https://www.linkedin.com/company/ef-networks-ltd/posts/?feedView=all' target='_blank'>
              <LinkedInIcon 
                className='mr-4 cursor-pointer  text-theme'
                alt="" 
                style={{ width: '20px', height: '20px', objectFit: 'cover'  }}
              /></a>
              
              <a href='https://www.instagram.com/efnetworkltd/' target='_blank'>
              <InstagramIcon 
                className='mr-4 cursor-pointer  text-theme'                
                style={{ width: '20px', height: '20px', objectFit: 'cover'  }}
              /></a>
              
            </div>
          </div>

          <div className="flex flex-col md:items-start md:w-1/3 my-4 md:h-60" style={{ color: '#eeeeee' }}>
          <p className=' mb-2' style={{ color: '#eeeeee', fontSize: '20px' }}>OTHER PRODUCTS</p>
          
          {/* <div className='bg-theme mb-2' style={{ width: '60px', height: '2px' }}></div> */}

          <div className="flex items-center cursor-pointer mb-2"><KeyboardArrowRightIcon className='mr-2' style={{ width: '16px', height: '16px', }}/> <p className='text-theme ' style={{ color: '', fontSize: '14px' }}>Security Products/Services</p></div>
          <div className="flex items-center cursor-pointer mb-2"><KeyboardArrowRightIcon className='mr-2' style={{ width: '16px', height: '16px', }}/> <p className='text-theme ' style={{ color: '', fontSize: '14px' }}>EFBroadband</p></div>
          <div className="flex items-center cursor-pointer mb-2"><KeyboardArrowRightIcon className='mr-2' style={{ width: '16px', height: '16px', }}/> <p className='text-theme ' style={{ color: '', fontSize: '14px' }}>Communication Gadgets</p></div>
          <div className="flex items-center cursor-pointer mb-2"><KeyboardArrowRightIcon className='mr-2' style={{ width: '16px', height: '16px', }}/> <p className='text-theme ' style={{ color: '', fontSize: '14px' }}>E-Commerce</p></div>
          <div className="flex items-center cursor-pointer mb-2"><KeyboardArrowRightIcon className='mr-2' style={{ width: '16px', height: '16px', }}/> <p className='text-theme ' style={{ color: '', fontSize: '14px' }}>Cloud Services</p></div>
          <div className="flex items-center cursor-pointer mb-2"><KeyboardArrowRightIcon className='mr-2' style={{ width: '16px', height: '16px', }}/> <p className='text-theme ' style={{ color: '', fontSize: '14px' }}>EFPhonetaxi</p></div>
          <div className="flex items-center cursor-pointer mb-2"><KeyboardArrowRightIcon className='mr-2' style={{ width: '16px', height: '16px', }}/> <p className='text-theme ' style={{ color: '', fontSize: '14px' }}>Alert Services</p></div>
          <div className="flex items-center cursor-pointer mb-2"><KeyboardArrowRightIcon className='mr-2' style={{ width: '16px', height: '16px', }}/> <p className='text-theme ' style={{ color: '', fontSize: '14px' }}>Tracker System and Devices</p></div>
          </div>
 
          {/* <div className="flex flex-col md:items-start md:w-1/3 my-4 md:h-40">
            <p className=' mb-2' style={{ color: '', fontSize: '20px' }}>Recent</p>
            <p className=' mb-1' style={{ color: '', fontSize: '12px' }}>FAQs</p>
            <p className=' mb-1' style={{ color: '', fontSize: '12px' }}>Trems & Conditions</p>
          </div> */}
        </div>
      </div>

      <div className='px-4 lg:px-16 xl:px-24 2xl:px-80 flex flex-col pt-4'   style={{ color: '#eeeeee', backgroundColor: '#1D2024' }}>
        {/* <div className='flex flex-col'>
          <p className="text-sm  my-2">#</p>
          <p className="text-sm  my-2">#..</p>
        </div> */}

        <hr className='my-2 text-theme'/>
    
        <div className="mt-auto flex ">
          <div className="bottom-0 w-full flex md:flex-row flex-col justify-between pt-2 pb-4 mb-2">
          <p className="text-sm  md:mt-0 mt-4">Copyright &copy; 2025 <a className='text-theme'>EF GOLD</a></p>

            <div className='flex md:flex-row flex-col'>
              <div className='flex'>
                <a className="text-sm  mr-2 cursor-pointer hover:text-scGreen">Terms and Conditions</a>
                <a className="text-sm  mr-2">|</a>
              </div>
              <div className='flex'>
                <a className="text-sm  mr-2 cursor-pointer hover:text-scGreen">Privacy</a>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Footer;
