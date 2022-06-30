import {React,useState,useEffect} from 'react';
import './RecentTourneys.scss';
import { getPlayerTourneys } from '../../Utils/getPlayersData/getPlayersData';
import { useLocation } from "react-router-dom";

export const RecentTourneys = () => {
  const [infoReceived,setInfoReceived] = useState(false);
  const [tourneyData,setTourneyData] = useState([]);
  const location = useLocation();
  useEffect(() => {
    getPlayerTourneys(location.state.licenseNumber,setTourneyData,setInfoReceived);
  }, []);
  return !infoReceived ? <div className='loader'></div> :(
    <div className='player-tourneys'>
      <h2>Historial de Torneos Recientes</h2>
      <table className='recent-tourneys-table'>
        <thead>
          <tr>
            <th>Nombre Torneo</th>
            <th>Fecha</th>
            <th>Posición</th>
            <th>Puntos Ganados</th>
          </tr>
        </thead>
        <tbody>
          {tourneyData.map((element) => (
            <tr key={element.Name}>
              <td data-label="Nombre Torneo">{element.Name}</td>
              <td data-label="Fecha">{element.Date}</td>
              <td data-label="Posición">{element.Position}</td>
              <td data-label="Puntos Ganados">{`+${element.PtsEarned}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
