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



import gold from '../assets/images/gold/gold.jpg';
import gold1 from '../assets/images/gold/gold1.png';
import gold2 from '../assets/images/gold/gold2.png';
import gold3 from '../assets/images/gold/gold3.png';
import gold4 from '../assets/images/gold/gold4.png';
import gold5 from '../assets/images/gold/gold5.png';
import gold6 from '../assets/images/gold/gold6.png';
import gold7 from '../assets/images/gold/gold7.png';
import gold8 from '../assets/images/gold/gold8.png';
import gold9 from '../assets/images/gold/gold9.png';
import gold10 from '../assets/images/gold/gold10.png';
import gold11 from '../assets/images/gold/gold11.png';
import gold12 from '../assets/images/gold/gold12.png';




import logo from '../assets/images/logo.png';
import goldBar from '../assets/images/gold-bar.png';


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



    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    

    const goldImages = [
      gold1,
      gold2,
      gold3,
      gold4,
      gold5,
      gold6,
      gold7,
      gold8,
      gold9,
      gold10,
      gold11,
      gold12,
    ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };





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
          <div className='flex flex-col items-center justify-center mt-16 mb-2'>
            <p className=' mb-2' style={{ color: '', fontWeight: '700', fontSize: '28px' }}>Welcome to EF Gold</p>
            <div className='bg-theme mb-2' style={{ width: '80px', height: '4px' }}></div>
          </div>
          
        </motion.h1>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-lg text-gray-600 mb-6"
        >
         <div className='mb-8 text-center' style={{fontSize: '16px',   }}>
         Your trusted Africa gold selling company.
         </div>
         </motion.div>










         <div className=" mb-12"
                  
                  
                  style={{
                    backgroundImage: `url(${background})`, 
                    backgroundAttachment: 'fixed',
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                  }}
                  >

<motion.div
initial={{ opacity: 0, y: 50 }} // Start faded and below
animate={{ opacity: 1, y: 0 }} // Fade in and move up
transition={{ duration: 0.8, ease: "easeOut", delay: 1.0 }} // Smooth animation
className="flex flex-col w-full h-full items-center justify-center mt-4"
>


{/*       
<div className='flex flex-col items-center justify-center mt-16 mb-2'>
<p className=' mb-2' style={{ color: '', fontWeight: '700', fontSize: '28px' }}>About Us</p>
<div className='bg-theme mb-2' style={{ width: '80px', height: '4px' }}></div>
</div> */}

<div className='flex flex-col sm:flex-row relative'>




<div className='md:w-4/5'>




<p className='my-8 pt-2' style={{fontSize: '18px', color: '#000000'  }}>
EF Gold is a global leader in the supply of African gold. With a commitment to excellence and sustainability, we foster economic growth and innovation in the gold trade. We provide secure air transportation for gold from Africa to the rest of the world, excluding sanctioned countries.

With over <strong>17 years</strong> in the gold business, we have served various African nations. Our gold is sold on a <strong>CIF</strong> or <strong>FOB</strong> basis, and we ensure safe air transport to all permitted destinations.</p>

<p className='my-8' style={{fontSize: '18px', color: '#000000'  }}>
We operate in the following countries: Angola, Benin Republic, Burkina Faso, the Democratic Republic of the Congo (DRC), Equatorial Guinea, Ethiopia, Ghana, Guinea Conakry, Kenya, Liberia, Libya, Mali, Mauritania, Mauritius, Mozambique, Namibia, São Tomé, Senegal, Sierra Leone, South Africa, South Sudan, Tanzania, Togo, Uganda, and Zimbabwe.</p>

<p  className='my-8' style={{fontSize: '18px', color: '#000000'  }}>
With the capability to charter planes for fast and secure gold deliveries, EF Gold is one of the most efficient and reliable gold suppliers in Africa. We also offer alternative shipping options and can supply anywhere from <strong>10kg to 10 tons</strong> of gold monthly.

By working directly with miners in several African countries, we ensure a consistent and guaranteed supply of gold.

We welcome your inquiries.</p>

<p className='mb-8' style={{fontSize: '18px', color: '#000000'  }}>For additional information, contact us today.</p>

<div className='mb-8 flex items-center bg-theme rounded-lg px2 justify-center text-bold'
style={{ height: '40px', width: '160px'}}    
onClick={() => {navigateTo('/buy-gold');}}  
>
Buy Gold
</div>

</div>




<div  className="flex w-full items-center justify-center px-2">
<img 
src={goldBar} 
// alt={`Slide ${index + 1}`} 
className='ml-8 rounded-lg'
style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
/>
</div>




</div> 











</motion.div>
</div>



























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
            <p className="" style={{fontSize: '16px',   }}>
            We ensure the safe transportation of gold from Africa to international destinations, excluding sanctioned countries. Our services include air transport and security for seamless deliveries.
            </p>
          </div>

          <div className="bg-gray-200 shadow-lg p-8 rounded-lg">
            <div className='flex flex-col items-start mb-4'>
              <div className='p-4 mb-4 rounded-lg bg-theme flex items-center justify-center'><PublicIcon className='' /></div>
              <h2 className="text-2xl font-semibold text-gray-800">Our Global Reach</h2>
              
            </div>
            <p className="" style={{fontSize: '16px',   }}>
            We operate in multiple African countries, including Angola, Ghana, Kenya, South Africa, Tanzania, and many more. Our extensive network ensures a steady and reliable gold supply.
            </p>
          </div>

          <div className="bg-gray-200 shadow-lg p-8 rounded-lg">
            <div className='flex flex-col items-start mb-4'>
              <div className='p-4 mb-4 rounded-lg bg-theme flex items-center justify-center'><CompareArrowsIcon className='' /></div>
              <h2 className="text-2xl font-semibold text-gray-800">Flexible Supply Options</h2>
              
            </div>
            <p className="" style={{fontSize: '16px',   }}>
            EF Gold offers CIF and FOB transactions, catering to different buyer needs. We can supply anywhere from 10kg to 10 tons of gold monthly, ensuring flexibility for businesses of all sizes.
            </p>
          </div>

          <div className="bg-gray-200 shadow-lg p-8 rounded-lg">
            <div className='flex flex-col items-start mb-4'>
              <div className='p-4 mb-4 rounded-lg bg-theme flex items-center justify-center'><HandshakeIcon className='' /></div>
              <h2 className="text-2xl font-semibold text-gray-800">Partnering with Miners</h2>
              
            </div>
            <p className="" style={{fontSize: '16px',   }}>
            By working directly with miners across Africa, we maintain a consistent supply chain, providing customers with guaranteed access to high-quality gold.
            </p>
          </div>
        </motion.div>

      </div>
    </motion.div>



      </div>




          </div>
        </div>  







        <div className="px-8 md:px-4 lg:px-16 xl:px-24 2xl:px-80 py-2"
                    
                    
                                                                  style={{
                                                                    backgroundImage: `url(${background})`, 
                                                                    backgroundAttachment: 'fixed',
                                                                    backgroundSize: 'contain',
                                                                    backgroundPosition: 'center',
                                                                  }}
                                                                  >

<div className='flex flex-col items-center justify-center mt-16 mb-2'>
            <p className=' mb-2' style={{ color: '', fontWeight: '700', fontSize: '28px' }}>Our Gallery</p>
            <div className='bg-theme mb-2' style={{ width: '80px', height: '4px' }}></div>
          </div>

<motion.div
      initial={{ opacity: 0, y: 50 }} // Start faded and below
      animate={{ opacity: 1, y: 0 }} // Fade in and move up
      transition={{ duration: 0.8, ease: "easeOut", delay: 1.5 }} // Smooth animation
      className="flex w-full h-full items-center justify-center mt-4 mb-16"
    >
      <div className="w-full">
        <Slider {...settings}>
          {goldImages.map((image, index) => (
            <div key={index} className="flex w-full items-center justify-center px-2">
              <img 
                src={image} 
                alt={`Slide ${index + 1}`} 
                style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
              />
            </div>
          ))}
        </Slider>
      </div>
    </motion.div>
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
