import React from 'react';
import { Navbar } from '../Components/Navbar/Navbar';
import '../App.css';

export const Home = () => {
  return (
    <div className='background-page'>
      <div className='complete-page'>
        <div className='sticky-navbar'>
          <Navbar />
        </div>
        <div className='page-content'>
          <h1>Esto es el home page de la App</h1>
        </div>
        <footer>&copy; PinPlay - UCR</footer> 
      </div>
    </div>
  );
};