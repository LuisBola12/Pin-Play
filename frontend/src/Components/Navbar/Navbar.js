import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
import { logout } from "../../Slices/user/userSlice";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

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
                <div>
                <button onClick={handleClick}>Iniciar Sesion</button>
                <button onClick={handleClick}>Registrarse</button>
               </div>
                 : 
                 <div>
                  <button onClick={handleClick}>Iniciar Sesion</button>
                  <button onClick={handleClick}>Registrarse</button>
                 </div>
                  
              }
            </div>
          </NavMenu>
        </Nav>
      </div>
    </>
  );
};
