import React from 'react';
import '../App.css';
import { Navbar } from '../Components/Navbar/Navbar';

export const  Unauthoraized = () => {
  return (
    <div className='background-page'>
      <div className='sticky-navbar'>
        <Navbar />
      </div>
      <div className = 'page-content'>
      </div>
      <footer>&copy; PinPlay - UCR</footer> 
    </div>
  );
};
