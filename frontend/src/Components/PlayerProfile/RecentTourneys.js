import React from 'react';
import './RecentTourneys.scss';

export const RecentTourneys = ({tourneyData}) => {
  return (
    <div className='player-tourneys'>
      <h2>Historial de Torneos Recientes</h2>
      <table className='recent-tourneys-table'>
        <thead>
          <tr className='recent-tourneys-table-header'>
            <th className='left-tourneys-td'>Nombre Torneo</th>
            <th>Fecha</th>
            <th className='center-right-tourneys-td'>Posición</th>
            <th className='right-tourneys-td'>Puntos Ganados</th>
          </tr>
        </thead>
        <tbody>
          {tourneyData.map((element) => (
            <tr className= "recent-tourneys-data-tr"key={element.NombreTorneo}>
              <td className='left-tourneys-td'>{element.NombreTorneo}</td>
              <td className='center-td'>{element.Fecha}</td>
              <td className='center-right-tourneys-td'>{element.Posicion}</td>
              <td className='right-tourneys-td'>{element.PuntosGanados}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
