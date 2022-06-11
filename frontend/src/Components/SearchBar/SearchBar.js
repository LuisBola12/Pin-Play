import { React, useState } from "react";
import "./SearchBar.scss";
import { FaSearch } from "react-icons/fa";
import {AiOutlineArrowRight} from "react-icons/ai"
import { Button } from "../Button/Button";
import { useNavigate } from 'react-router-dom';

const SearchBar = ({ placeholder, data }) => {
  const navigate = useNavigate();
  const handleClick = () =>{
    navigate("/perfilJugador");
  }
  const [filteredData, setFilteredData] = useState([]);
  const handleInputChange = (event) =>{
    const searchWord = event.target.value;
    const newFilter = playersData.filter((value)=>{
        return value.Nombre.toLowerCase().includes(searchWord.toLowerCase());
    })
    if(searchWord === ""){
        setFilteredData([]);
    }else{
        setFilteredData(newFilter);
    }
  } 
  const playersData = [
    {
      Foto: "foto",
      Nombre: "Roberto",
      Carnet: 677,
    },
    {
      Foto: "foto",
      Nombre: "Soberto",
      Carnet: 677,
    },
    {
      Foto: "foto",
      Nombre: "Ronerto",
      Carnet: 681,
    },
    {
      Foto: "foto",
      Nombre: "Soberto",
      Carnet: 677,
    },
    {
      Foto: "foto",
      Nombre: "Poberto",
      Carnet: 677,
    },
    {
      Foto: "foto",
      Nombre: "Poberta",
      Carnet: 677,
    },
    {
      Foto: "foto",
      Nombre: "Loberta",
      Carnet: 677,
    },
    {
      Foto: "foto",
      Nombre: "Loberte",
      Carnet: 677,
    },
  ];
  return (
    <div className="pagina-jugadores">
      <div className="buscar">
        <div className="input-buscar">
          <div className="icono-buscar">
            <FaSearch />
          </div>
          <input type="text" placeholder={placeholder} onChange={handleInputChange}/>
        </div>
        { filteredData.length !== 0 && (
          <div className="data-buscar">
            <table className="tabla">
              <tbody>
                {filteredData.slice(0,10).map((value, key) => (
                  <tr className="fila-tabla" key={key}>
                    <td className="left-td">{value.Foto}</td>
                    <td>{value.Nombre}</td>
                    <td>{`Carnet: ${value.Carnet}`}</td>
                    <td className="right-td">
                        <Button onClick={handleClick}
                        buttonType="btn--i"
                        buttonStyle="btn--transparent--solid"
                        buttonSize="medium--btn"
                        >
                            <AiOutlineArrowRight className="arrow-icon"/>
                        </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
