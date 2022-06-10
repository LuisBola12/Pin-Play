import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
import { logout } from "../../Slices/user/userSlice";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import { Button } from "../Button/Button";

export const Navbar = () => {
  const user = useSelector((state) => state.user.roles);
  const userLogIn = useSelector((state) => state.user.userIsLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = async () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <>
      <div>
        <Nav>
          <NavMenu>
            <div className="navBar-logo"></div>
            {user === "admin" && (
              <>
                <NavLink to="/torneos" activestyle="true">
                  Torneos
                </NavLink>
                <NavLink to="/clasificacion" activestyle="true">
                  Clasificacion
                </NavLink>
                <NavLink to="/jugadores" activestyle="true">
                  Jugadores
                </NavLink>
              </>
            )}
            {user.Roles === "emp" && (
              <>
                <NavLink to="/ee" activestyle="true">
                  Test1
                </NavLink>
                <NavLink to="/myBenefits" activestyle="true">
                  Test2
                </NavLink>
                <NavLink to="/ee" activestyle="true">
                  Test3
                </NavLink>
                <NavLink to="/registerHours" activestyle="true">
                  Hours
                </NavLink>
              </>
            )}
            <div className="register-logIn-btns">
              {
                userLogIn ? 
                <div className="box-btns">
                <Button type="button" onClick={handleClick} buttonStyle="btn--transparent--solid" buttonSize='small--btn'>Iniciar Sesion</Button>
                <Button type="button" onClick={handleClick} buttonStyle="btn--register--navbar" buttonSize='small--btn'>Registrarse</Button>
               </div>
                 : 
                 <div>
                  <Button onClick={handleClick}>Iniciar Sesion</Button>
                  <Button onClick={handleClick}>Registrarse</Button>
                 </div>
                  
              }
            </div>
          </NavMenu>
        </Nav>
      </div>
    </>
  );
};
