import React from 'react';
import { Navbar } from '../Components/Navbar/Navbar';
import SearchBar from '../Components/SearchBar/SearchBar';
import { Footer } from '../Components/Footer/Footer';

export const Players = () => {
  return (
    <div className='background-page'>
      <div className='sticky-navbar'>
        <Navbar />
      </div>
      <div className='page-content'>
        <SearchBar placeholder='Ingrese el nombre de un jugador'/>
      </div>
      <Footer color={'black'} position={'relative'}></Footer> 
    </div>
  )
}
