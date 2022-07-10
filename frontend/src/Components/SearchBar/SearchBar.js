import { React, useState, useEffect } from "react";
import "./SearchBar.scss";
import { FaSearch } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Button } from "../Button/Button";
import { useNavigate } from "react-router-dom";
import { getPlayersData } from "../../Utils/getPlayersData/getPlayersData";
import { Loader } from "../Loader/Loader";
import Mixpanel from "../../services/mixpanel";

const SearchBar = ({ placeholder }) => {
  const navigate = useNavigate();
  const [infoReceived, setInfoReceived] = useState(false);
  const [playersData, setPlayersData] = useState([]);
  const handleClick = (element) => {
    navigate("/perfilJugador", { state: element });
  };
  const [filteredData, setFilteredData] = useState([]);
  const handleInputChange = (event) => {
    const searchWord = event.target.value;
    const newFilter = playersData.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };
  useEffect(() => {
    getPlayersData(setPlayersData, setInfoReceived);
  }, []);
  return !infoReceived ? (
    <Loader />
  ) : (
    <div className="pagina-jugadores">
      <div className="buscar">
        <div className="input-buscar">
          <div className="icono-buscar">
            <FaSearch />
          </div>
          <input
            type="text"
            placeholder={placeholder}
            onChange={handleInputChange}
          />
        </div>
        <div className="data-buscar">
          <table className="find-players-table">
            <tbody>
              {filteredData.length === 0
                ? playersData.slice(0, 10).map((value, key) => (
                    <tr key={key}>
                      <td>
                        <img
                          className="img-players"
                          src={`${value.s3Id}`}
                          alt=""
                        ></img>
                      </td>
                      <td>{`${value.name} ${value.firstLastname}
                    ${value.secondLastname}`}</td>
                      <td>{`Carnet: ${value.licenseNumber}`}</td>
                      <td className=" right-td">
                        <Button
                          onClick={() => {
                            Mixpanel.track(Mixpanel.TYPES.SEARCH_PLAYER, {
                              licenseNumber: value.licenseNumber,
                              name: value.name,
                              lastname: value.firstLastname,
                            });
                            handleClick(value);
                          }}
                          buttonType="btn--i"
                          buttonStyle="btn--transparent--solid"
                          buttonSize="medium--btn"
                        >
                          <AiOutlineArrowRight className="arrow-icon" />
                        </Button>
                      </td>
                    </tr>
                  ))
                : filteredData.slice(0, 10).map((value, key) => (
                    <tr key={key}>
                      <td>
                        <img
                          className="img-players"
                          src={`${value.s3Id}`}
                          alt=""
                        ></img>
                      </td>
                      <td>{`${value.name} ${value.firstLastname}
                    ${value.secondLastname}`}</td>
                      <td>{`Carnet: ${value.licenseNumber}`}</td>
                      <td className=" right-td">
                        <Button
                          onClick={() => {
                            Mixpanel.track(Mixpanel.TYPES.SEARCH_PLAYER, {
                              licenseNumber: value.licenseNumber,
                              name: value.name,
                              lastname: value.firstLastname,
                            });
                            handleClick(value);
                          }}
                          buttonType="btn--i"
                          buttonStyle="btn--transparent--solid"
                          buttonSize="medium--btn"
                        >
                          <AiOutlineArrowRight className="arrow-icon" />
                        </Button>
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
