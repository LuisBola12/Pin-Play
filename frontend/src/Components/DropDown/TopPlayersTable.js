import React from "react";
import './TopPlayersTable.scss';
import { DropDown } from "./DropDown";

export const TopPlayersTable = ({topPlayersData}) => {
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
    <div className='topPlayers'>
      <DropDown title={'Categorias'} options={categorias}/>
      <table className='topPlayers-table'>
        <thead>
          <tr className='topPlayers-table-header'>
            <th className='left-topPlayers-th'>#</th>
            <th className='left-center-topPlayers-th'>Jugador</th>
            <th className='right-center-topPlayers-th'>Puntos</th>
            <th className='right-topPlayers-th'>Tasa de Victorias</th>
          </tr>
        </thead>
        <tbody>
          {topPlayersData.map((element) => (
            <tr className= 'topPlayers-values'key={element.Jugador}>
              <td className='left-topPlayers-td'>{element.ID}</td>
              <td className='left-center-topPlayers-td'>{element.Jugador}</td>
              <td className='right-center-topPlayers-td'>{element.Puntos}</td>
              <td className='right-topPlayers-td'>{element.Victorias}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}