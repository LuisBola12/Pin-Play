import React from "react";
import { Navbar } from "../Components/Navbar/Navbar";
import { Header } from "../Components/PlayerProfile/Header";
import { RecentTourneys } from "../Components/PlayerProfile/RecentTourneys";
import "../App.css";

const PlayerProfile = () => {
  const tourneysData = [
    {
      NombreTorneo:"Clasificación Mayor",
      Fecha:"25/5/2022",
      Posicion:1,
      PuntosGanados:"+65"
    },{
      NombreTorneo:"Clasificación Mayor",
      Fecha:"25/5/2022",
      Posicion:1,
      PuntosGanados:"+65"
    },{
      NombreTorneo:"Clasificación Mayor",
      Fecha:"25/5/2022",
      Posicion:1,
      PuntosGanados:"+65"
    },{
      NombreTorneo:"Clasificación Mayor",
      Fecha:"25/5/2022",
      Posicion:1,
      PuntosGanados:"+65"
    },{
      NombreTorneo:"Clasificación Mayor",
      Fecha:"25/5/2022",
      Posicion:1,
      PuntosGanados:"+65"
    },{
      NombreTorneo:"Clasificación Mayor",
      Fecha:"25/5/2022",
      Posicion:1,
      PuntosGanados:"+65"
    },{
      NombreTorneo:"Clasificación Mayor",
      Fecha:"25/5/2022",
      Posicion:1,
      PuntosGanados:"+65"
    },{
      NombreTorneo:"Clasificación Mayor",
      Fecha:"25/5/2022",
      Posicion:1,
      PuntosGanados:"+65"
    }
  ]
  return (
    <div className="complete-page">
      <div className="sticky-navbar">
        <Navbar />
      </div>
      <div className="page-content">
          <div className="player-profile-header">
            <Header />
          </div>
          <div className="player-recent-tourneys">
            <RecentTourneys tourneyData={tourneysData}/>
          </div>
      </div>
      <footer>&copy; PinPlay - UCR</footer>
    </div>
  );
};

export default PlayerProfile;
