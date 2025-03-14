import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from './navbar/Header';
import Footer from './navbar/Footer';
import MenuBar from './navbar/MenuBar';
import HeaderParallax from './HeaderParallax';
import conference from '../assets/images/conference-wide.jpg';

import md from '../assets/images/md.jpg';

import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PublicIcon from '@mui/icons-material/Public';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import HandshakeIcon from '@mui/icons-material/Handshake';
import ContactMailIcon from '@mui/icons-material/ContactMail';


import logo from '../assets/images/logo.png';


import background from '../assets/images/background.png';


import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import NotificationModal from './modals/NotificationModal';

import Hero from './Hero';
import { motion } from "framer-motion";


export default function AboutPage({ 
    isMobile, isMenuOpen, toggleMenu, closeMenu
 }) {


  //notification modal
  const [notificationType, setNotificationType] = useState(false);
  const [notificationTitle, setNotificationTitle] = useState("");
  const [notificationMessage, setNotificationMessage] = useState("");
  const [isNotificationModalOpen, setIsNotificationModalOpen] = useState(false);
  const openNotificationModal = (type, title, message) => {
    setNotificationType(type);
    setNotificationTitle(title);
    setNotificationMessage(message);

    setIsNotificationModalOpen(true);
  };
  const closeNotificationModal = () => {
    setIsNotificationModalOpen(false);
  };
  //notification modal

  

  return (






    <div className='bg-gray-100  text-sm'>
      {/* <div className="absolute inset-0 ">
        <img
          src={stars}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div> */}

      <Header 
        isMobile={isMobile} isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} closeMenu={closeMenu}
      />
      
      
      {isMobile ? <div></div> :  <MenuBar/>}


        <div className='flex'>
          <div className='w-full rounded-lg'>

          {/* {isMenuOpen ? <div></div> : <Hero/>} */}


          {/* {isMenuOpen ? <div></div> : <HeaderParallax imageUrl={gold} title={"EF Gold"} subtitle={""} />} */}
          
          {isMenuOpen ? <div></div> :  <HeaderParallax 
        imageUrl={md}//"/images/your-image.jpg";
            title={"About Us"}
            subtitle={""}
        />}
          
          {/* <HeroGold /> */}

            {/* <Hero  /> */}
            {/* <OurProducts /> */}
            {/* <ChairmansMessage />  */}
            {/* <AboutUs /> */}
            {/* <WorkProcess /> */}


            <div className="px-8 md:px-4 lg:px-16 xl:px-24 2xl:px-80 py-2"
            
            
                                                          style={{
                                                            backgroundImage: `url(${background})`, 
                                                            backgroundAttachment: 'fixed',
                                                            backgroundSize: 'contain',
                                                            backgroundPosition: 'center',
                                                          }}
                                                          >

<motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className=" flex items-center justify-center "
    >
      <div className="mx-auto py-8">
        
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-2xl font-bold text-gray-800 mb-2"
        >
          Who We Are
        </motion.h1>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-lg text-gray-600 mb-6"
        >
         <p className='mb-8' style={{fontSize: '16px', color: '#777777'  }}>
         EF Gold is a global leader in the supply of African gold, committed to excellence and sustainability. With over 17 years of experience, we drive economic growth and innovation in the gold trade.</p>
         </motion.p>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8"
        >
          <div className="bg-gray-200 shadow-lg p-8 rounded-lg" >
            <div className='flex flex-col items-start mb-4'>
              <div className='p-4 mb-4 rounded-lg bg-theme flex items-center justify-center'><LocalShippingIcon className='' /></div>
              <h2 className="text-2xl font-semibold text-gray-800">Safe & Secure Gold Transport</h2>
              
            </div>
            <p className="" style={{fontSize: '16px', color: '#777777'  }}>
            We ensure the safe transportation of gold from Africa to international destinations, excluding sanctioned countries. Our services include air transport and security for seamless deliveries.
            </p>
          </div>

          <div className="bg-gray-200 shadow-lg p-8 rounded-lg">
            <div className='flex flex-col items-start mb-4'>
              <div className='p-4 mb-4 rounded-lg bg-theme flex items-center justify-center'><PublicIcon className='' /></div>
              <h2 className="text-2xl font-semibold text-gray-800">Our Global Reach</h2>
              
            </div>
            <p className="" style={{fontSize: '16px', color: '#777777'  }}>
            We operate in multiple African countries, including Angola, Ghana, Kenya, South Africa, Tanzania, and many more. Our extensive network ensures a steady and reliable gold supply.
            </p>
          </div>

          <div className="bg-gray-200 shadow-lg p-8 rounded-lg">
            <div className='flex flex-col items-start mb-4'>
              <div className='p-4 mb-4 rounded-lg bg-theme flex items-center justify-center'><CompareArrowsIcon className='' /></div>
              <h2 className="text-2xl font-semibold text-gray-800">Flexible Supply Options</h2>
              
            </div>
            <p className="" style={{fontSize: '16px', color: '#777777'  }}>
            EF Gold offers CIF and FOB transactions, catering to different buyer needs. We can supply anywhere from 10kg to 10 tons of gold monthly, ensuring flexibility for businesses of all sizes.
            </p>
          </div>

          <div className="bg-gray-200 shadow-lg p-8 rounded-lg">
            <div className='flex flex-col items-start mb-4'>
              <div className='p-4 mb-4 rounded-lg bg-theme flex items-center justify-center'><HandshakeIcon className='' /></div>
              <h2 className="text-2xl font-semibold text-gray-800">Partnering with Miners</h2>
              
            </div>
            <p className="" style={{fontSize: '16px', color: '#777777'  }}>
            By working directly with miners across Africa, we maintain a consistent supply chain, providing customers with guaranteed access to high-quality gold.
            </p>
          </div>
        </motion.div>

      </div>
    </motion.div>



      </div>



            

          </div>
        </div>      
      <Footer 
        isMobile={isMobile} isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} closeMenu={closeMenu}
      />



<NotificationModal
              isOpen={isNotificationModalOpen}
              onRequestClose={closeNotificationModal}
              notificationType={notificationType}
              notificationTitle={notificationTitle}
              notificationMessage={notificationMessage}
            />


    </div>
  );
}
