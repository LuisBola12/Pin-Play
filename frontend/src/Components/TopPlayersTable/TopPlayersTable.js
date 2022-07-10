import { React, useState, useEffect } from "react";
import {
  getPlayersInfo
} from "../../Utils/getPlayersData/getPlayersData";
import "./TopPlayersTable.scss";
import { Loader } from "../Loader/Loader";
import Mixpanel from "../../services/mixpanel";

export const TopPlayersTable = (props) => {
  const [playersReceived, setPlayersReceived] = useState(false);
  const [playersData, setPlayersData] = useState([]);

  const calculateVictory = (victories, loses) => {
    if (victories === 0 && loses === 0) {
      return 50;
    } else {
      const total = victories + loses;
      return Math.round((victories / total) * 100);
    }
  };
  const calculateLoses = (victories, loses) => {
    if (victories === 0 && loses === 0) {
      return 50;
    } else {
      const total = victories + loses;
      return Math.round(100 - (victories / total) * 100);
    }
  };
  const calculatePercentage = (victories, loses) => {
    if (victories === 0 && loses === 0) {
      return "00";
    } else {
      const total = victories + loses;
      const result = Math.round((victories / total) * 100);
      if (result < 10) {
        return `0${result}`;
      } else {
        return result;
      }
    }
  };

  useEffect(() => {
    const getPlayersData = async () => {
      setPlayersData([]);
      const playersData = await getPlayersInfo(
        props.category,
        props.actualPage,
        10
      );
      if (playersData) {
        setPlayersReceived(true);
        setPlayersData(playersData);
      }
    };
    getPlayersData();
    Mixpanel.track(Mixpanel.TYPES.VIEW_CLASIFICATION,{category:props.category,page:props.actualPage});
  }, [props.category, props.actualPage]);

  return !playersReceived ? (
    <Loader />
  ) : (
    <div className="topPlayers">
      <table className="topPlayers-table">
        <thead>
          <tr>
            <th>#</th>
            <th></th>
            <th>Jugador</th>
            <th>Puntos</th>
            <th>Tasa de Victorias</th>
          </tr>
        </thead>
        <tbody>
          {playersData.map((element,index) => (
            <tr key={index}>
              <td data-label="#">{element.position}</td>
              <td data-label="">
                <img className="topPlayers-img" src={element.s3Id} alt=""></img>
              </td>
              <td data-label="Jugador">{`${element.name} ${element.firstLastname}`}</td>
              <td data-label="Puntos">{element.points}pts</td>
              <td data-label="Tasa de Victorias">
                <div className="topPlayers-winRate">
                  <div
                    className="topPlayers-victories"
                    style={{
                      width: `${calculateVictory(
                        element.victories,
                        element.loses
                      )}%`,
                    }}
                  >
                    <div className="topPlayer-vic-count">{`${element.victories} V / ${element.loses} P`}</div>
                  </div>
                  <div
                    className="topPlayers-loses"
                    style={{
                      width: `${calculateLoses(
                        element.victories,
                        element.loses
                      )}%`,
                    }}
                  ></div>
                  <div className="topPlayers-percentage">{`${calculatePercentage(
                    element.victories,
                    element.loses
                  )}%`}</div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
