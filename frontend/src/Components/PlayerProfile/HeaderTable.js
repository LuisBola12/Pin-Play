import React from "react";

export const HeaderTable = ({ userData }) => {
  return (
    <>
      {userData.map((value, key) => (
        <div className="player-profile-table" key={value.Nombre}>
          <div className="player-key-values">
            <div>Nombre</div>
            <div>Club</div>
            <div>Edad</div>
            <div>Categoría</div>
            <div>Sexo</div>
          </div>
          {/* <div className="vertical-line"></div> */}
          <div className="player-values" key={value.Nombre}>
            <div>{value.Nombre}</div>
            <div>{value.Club}</div>
            <div>{value.Edad}</div>
            <div>{value.Categoría}</div>
            <div>{value.Sexo}</div>
          </div>
        </div>
      ))}
    </>
  );
};
