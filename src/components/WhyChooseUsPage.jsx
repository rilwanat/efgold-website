import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from './navbar/Header';
import Footer from './navbar/Footer';
import MenuBar from './navbar/MenuBar';

import Parallax from './Parallax';
import HeaderParallax from './HeaderParallax';

import conference from '../assets/images/conference-wide.jpg';
import goldx2 from '../assets/images/goldx2.png';

import md from '../assets/images/md.jpg';

import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PublicIcon from '@mui/icons-material/Public';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import HandshakeIcon from '@mui/icons-material/Handshake';
import ContactMailIcon from '@mui/icons-material/ContactMail';


import logo from '../assets/images/logo.png';
import hero2 from '../assets/images/hero/hero2.jpg';

import background from '../assets/images/background.png';


import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import NotificationModal from './modals/NotificationModal';

import Hero from './Hero';
import { motion } from "framer-motion";


export default function WhyChooseUsPage({ 
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
        imageUrl={hero2}//"/images/your-image.jpg";
            title={"Why Choose Us"}
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
      Why Choose EF Gold?
    </motion.h1>

    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.5 }}
      className="text-lg text-gray-600 mb-6"
    >
      <div className="mb-8 text-gray-700 text-base">
        With over 17 years in the gold industry, EF Gold is your trusted partner for secure, efficient, and transparent gold trading. We prioritize reliability, safety, and customer satisfaction in every transaction.
      </div>
    </motion.div>



      </div>
    </motion.div>



      </div>



            

          </div>
        </div>      



        {isMobile ? <div></div> :  <Parallax 
                imageUrl={goldx2}//"/images/your-image.jpg";
                    title={"Secure & Reliable Gold Supply Across the Globe"}
                    subtitle={"Ready to begin your journey with us?"}
                />}




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
