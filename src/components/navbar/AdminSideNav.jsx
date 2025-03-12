import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { navData } from './NavData';
import styles from './AdminSideNav.module.css';

import logo from '../../assets/images/logo.png';
import logoSquare from '../../assets/images/logoSquare.png';

import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';

const AdminSideNav = ({ currentPageName }) => {
  const [open, setOpen] = useState(true);

  const toggleOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    
  }, []);

  return (
    <div className={open ? styles.sidenav : styles.sidenavClosed}>
      
      <div className='flex'>
        {/* <img className="ml-3 w-32 h-16 object-scale-down " src={logo} alt=""  /> */}
        <img className={`${open ? 'mx-4  w-48 h-28 object-scale-down' : 'mx-2 mt-4 w-10 h-10 object-scale-down'}  `}
        src={open ? logo : logoSquare} alt=""  />
      </div>
      
      {/* <div className='' >{currentPageName}</div> */}
      <button className={styles.menuBtn} onClick={toggleOpen}>
        {open ? <KeyboardDoubleArrowLeftIcon /> : <KeyboardDoubleArrowRightIcon />}
      </button>
      
      <div>
      {navData.slice(0, 6).map((item) => (
        <NavLink 
        key={item.id} 
        className={`${styles.sideitem} ${currentPageName == item.text ? styles.sideitemActive : ''}`}

        to={`/${item.link}`}>
          {item.icon}
          {open ? <span className={styles.linkText}>{item.text}</span> : <div></div>}
        </NavLink>
      ))}
      </div>

      <div className='flex flex-col fixed bottom-0 mb-4 text-center'> 
      <div>
      {navData.slice(-2).map((item) => (
        <NavLink 
        key={item.id} 
        className={`${styles.sideitem} ${currentPageName == item.text ? styles.sideitemActive : ''}`}

        to={`/${item.link}`}>
          {item.icon}
          {open ? <span className={styles.linkText}>{item.text}</span> : <div></div>}
        </NavLink>
      ))}
      </div>

      <hr className='mx-4 '/>

        <div className='flex mx-2 my-4 items-center'>
          <img className={' w-10 h-10 object-scale-down'} style={{ borderRadius: '50%' }}
          src={logoSquare} alt=""  />
          <div className='flex'>
            <div className='flex flex-col ml-2 items-start'>
              <p className='text-xs text-white'>Name Name</p>
              <p className='text-xs text-white'>email@pricecheck24.com</p>
            </div>
            <LogoutIcon className='ml-4' style={{ color: "#ffffff", width: '16px', height: '16px' }} />


          </div>

        </div>
      </div>


    </div>
  );
};

export default AdminSideNav;