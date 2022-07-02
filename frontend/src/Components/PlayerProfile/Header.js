import React from "react";
import "./Header.scss";
import { HeaderTable } from "./HeaderTable";
import { useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();
  const userData = [{
    Nombre: `${location.state.name} ${location.state.firstLastname}`,
    Club: location.state.club,
    Edad: location.state.age,
    Categoría: location.state.category,
    Sexo: location.state.genre,
    Carnet: location.state.licenseNumber,
    Imagen: location.state.s3Id
  }];
  return (
    <div className="player-profile-header">
      <div className="image-div">
        <img className="player-image" src={location.state.s3Id} alt="user"></img>
      </div>
      <div className="header-table-div">
        <HeaderTable userData={userData}/>
      </div>
    </div>
  );
};
