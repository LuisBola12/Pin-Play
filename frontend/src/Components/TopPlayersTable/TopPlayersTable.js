import { React, useState, useEffect } from "react";
import {
  getPlayersInfo,
  getAmountPages,
} from "../../Utils/getPlayersData/getPlayersData";
import { Pagination } from "../Pagination/Pagination";
import "./TopPlayersTable.scss";
import { Loader } from "../Loader/Loader";

export const TopPlayersTable = (props) => {
  const [playersReceived, setPlayersReceived] = useState(false);
  const [maxPagesReceived, setMaxPagesReceived] = useState(false);
  const [playersData, setPlayersData] = useState([]);
  const [amountPages, setAmountPages] = useState([]);

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

  const handlePage = (element) => {
    props.setActualPage(element);
  };

  useEffect(() => {
    const getAmountPagesCategory = async () => {
      const dataAmountPages = await getAmountPages(props.category, 3);
      if (dataAmountPages) {
        setMaxPagesReceived(true);
        setAmountPages(dataAmountPages);
      }
    };
    const getPlayersData = async () => {
      const playersData = await getPlayersInfo(
        props.category,
        props.actualPage,
        3
      );
      if (playersData) {
        setPlayersReceived(true);
        setPlayersData(playersData);
      }
    };
    getAmountPagesCategory();
    getPlayersData();
  }, [props.category, props.actualPage]);

  return !playersReceived && !maxPagesReceived ? (
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
          {playersData.map(element => (
            <tr key={element.s3Id}>
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

      <div className="topPlayers-pages">
        <Pagination
          handlePage={handlePage}
          amountPages={amountPages}
        ></Pagination>
      </div>
    </div>
  );
};
