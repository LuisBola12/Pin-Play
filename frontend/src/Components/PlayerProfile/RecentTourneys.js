import {React,useState,useEffect} from 'react';
import './RecentTourneys.scss';
import { getPlayerTourneys } from '../../Utils/getPlayersData/getPlayersData';

export const RecentTourneys = () => {
  const [infoReceived,setInfoReceived] = useState(false);
  const [tourneyData,setTourneyData] = useState([]);
  useEffect(() => {
    getPlayerTourneys(setTourneyData,setInfoReceived);
  }, []);
  return !infoReceived ? <div className='loader'></div> :(
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
            <tr className= "recent-tourneys-data-tr"key={element.Name}>
              <td className='left-tourneys-td'>{element.Name}</td>
              <td className='center-td'>{element.Date}</td>
              <td className='center-right-tourneys-td'>{element.Position}</td>
              <td className='right-tourneys-td'>{`+${element.PtsEarned}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
