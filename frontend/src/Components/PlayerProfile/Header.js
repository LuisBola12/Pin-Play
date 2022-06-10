import React from "react";
import "./Header.scss";
import { HeaderTable } from "./HeaderTable";

export const Header = () => {
  const userData = [{
    Nombre: "Juan Perez",
    Club: "Escazu",
    Edad: 27,
    Categoría: "Tercera",
    Sexo: "Masuculino",
  }];
  return (
    <div className="player-profile-header">
      <div className="player-image">LB</div>
        <HeaderTable userData={userData}/>
    </div>
  );
};
