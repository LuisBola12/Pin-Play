import React from 'react';
import { Navbar } from '../Components/Navbar/Navbar';
import SearchBar from '../Components/SearchBar/SearchBar';


export const Jugadores = () => {
  return (
    <>
      <div className='sticky-navbar'>
        <Navbar />
      </div>
      <div className='page-content'>
        <SearchBar placeholder='Ingrese el nombre de un jugador'/>
      </div>
      <footer>&copy; PinPlay - UCR</footer> 
    </>
  )
}
