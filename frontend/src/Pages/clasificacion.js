import React from 'react';
import { Navbar } from '../Components/Navbar/Navbar';
import { DropDown } from '../Components/DropDown/DropDown';

export const Clasificacion = () => {
  const categorias = [
    {
      Nombre: "Primera",
    },
    {
      Nombre: "Segunda",
    },
    {
      Nombre: "Tercera",
    }
  ]

  
  return (
    <>
      <div className='sticky-navbar'>
        <Navbar />
      </div>
      <div className='page-content'>
        <div className='dropdown-button'>
          <DropDown title={'Categorias'} options={categorias}/>
        </div>
      </div>
      <footer>&copy; PinPlay - UCR</footer> 
    </>
  )
}