import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import logo from '../assets/images/logo.png';
import goldBar from '../assets/images/hero-image.png';

import hero1 from '../assets/images/hero/hero1.jpg';
import hero2 from '../assets/images/hero/hero2.jpg';
import hero3 from '../assets/images/hero/hero3.jpg';

const Hero = ({  }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();
  //
  const images = [
    // hero3,
    hero1,
    // hero2,

  ];

  const headerText = [
    'EF GOLD',
    // 'Leaders in Gold Solutions',
    // 'Trusted Partner in Gold Trade',
    // 'Strategic Planning for Gold Business',
];

  
  const subText = [
    'Your most reliable and trusted source for quality Africa gold. We specialize in selling premium Africa gold products, ensuring authenticity and value for our customers.',
    // 'Welcome to E.F Gold',
    // 'Secure & Efficient Gold Transactions',
    // 'Reliable Gold Supply Across Africa',
];

  //


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const imageVariants = {
    initial: { opacity: 0, scale: 1.05 },
    animate: { opacity: 1, scale: 1.1 },
    exit: { opacity: 0, scale: 1 },
  };

  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const navigateTo = (route) => {
    navigate(route);
  }

  return (
<div className="relative w-full h-[640px] overflow-hidden bg-black flex flex-col lg:flex-row">

{/* Text Content */}
<div className="flex flex-col justify-center text-white px-8 md:px-4 lg:px-16 xl:px-24 2xl:px-80 lg:w-2/3">
  <motion.h1
    className="text-4xl md:text-6xl font-bold mb-4 md:w-1/2 md:min-h-[80px] text-theme"
    variants={textVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={{ duration: 0.8 }}
  >
    {headerText[currentImageIndex]}
  </motion.h1>

  <motion.div
    className="text-lg md:text-xl mb-8 md:w-1/2"
    variants={textVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={{ duration: 0.8, delay: 0.2 }}
  >
    {subText[currentImageIndex]}
  </motion.div>

  <motion.div
    className="flex"
    variants={textVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={{ duration: 0.8, delay: 0.2 }}
  >
    <div className='mb-8 flex items-center bg-black border-2 border-white rounded-lg px-2 justify-center text-bold mr-4 cursor-pointer hover:text-black hover:bg-theme'
      style={{ height: '40px', width: '160px' }}
    >
      Learn More
    </div>
    <div className='mb-8 flex items-center bg-theme rounded-lg px-2 justify-center text-bold text-black cursor-pointer hover:text-theme hover:bg-black'
      style={{ height: '40px', width: '160px' }}
      onClick={() => { navigateTo('/buy-gold'); }}
    >
      Buy Gold
    </div>
  </motion.div>
</div>

{/* Image Content */}
<div className='lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/3 flex items-center justify-center pr-8 md:pr-4 lg:pr-16 xl:pr-24 2xl:pr-80'>
  <div className="flex w-full items-center justify-center">
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ y: [0, -15, 0] }} // Moves up and down
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    >
      <img
        src={goldBar}
        className='rounded-lg'
        style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
        alt="Hero Image"
      />
    </motion.div>
  </div>
</div>
</div>
  );
};

export default Hero;


