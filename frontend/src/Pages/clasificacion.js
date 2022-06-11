import React from 'react';
import { Navbar } from '../Components/Navbar/Navbar';
import { TopPlayersTable } from '../Components/DropDown/TopPlayersTable';
import '../App.css';

export const Clasificacion = () => {

  const topPlayers = [
    {
      ID: "1",
      Jugador: "Luis Bolaños",
      Puntos: "200",
      Victorias: "100/150"
    },
    {
      ID: "2",
      Jugador: "Jarod Venegas",
      Puntos: "300",
      Victorias: "80/120"
    },
    {
      ID: "3",
      Jugador: "David Atias",
      Puntos: "200",
      Victorias: "200/250"
    },
    {
      ID: "4",
      Jugador: "David Atias",
      Puntos: "200",
      Victorias: "200/250"
    },
    {
      ID: "5",
      Jugador: "David Atias",
      Puntos: "200",
      Victorias: "200/250"
    },
    
  ]
  
  return (
    <div className='background-page'>
      <div className='sticky-navbar'>
        <Navbar />
      </div>
      <div className='page-content'>
        <div className='topPlayers-table-data'>
          <TopPlayersTable topPlayersData={topPlayers}/>
        </div>
      </div>
      <footer>&copy; PinPlay - UCR</footer> 
    </div>
  )
}