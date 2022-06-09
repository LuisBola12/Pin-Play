import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Nav, NavLink, NavMenu } from './NavbarElements';
import { logout } from '../../Slices/user/userSlice';
import {useNavigate} from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
  const user = useSelector((state) => state.user.roles);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = async () => {
    dispatch(logout());
    navigate('/')
  };

  return (
    <>
      <div>
        <Nav>
          <div className='navBar-logo'></div>
          <NavMenu>
            {user === 'admin' &&
              <>
                <NavLink to='/torneos' activestyle='true'>
                  Torneos
                </NavLink>
                <NavLink to='/clasificacion' activestyle='true'>
                  Clasificacion
                </NavLink>
                <NavLink to='/jugadores' activestyle='true'>
                Jugadores
                </NavLink>
                <NavLink to='/' activestyle='true'>
                  Inicio Sesion
                </NavLink>
                <NavLink to='/registrarse' activestyle='true'>
                  Registrarse
                </NavLink>
              </>
            }
            {user.Roles === 'emp' &&
              <>
                <NavLink to="/ee" activestyle='true'>
                  Test1
                </NavLink>
                <NavLink to='/myBenefits' activestyle='true'>
                  Test2
                </NavLink>
                <NavLink to="/ee" activestyle='true'>
                  Test3
                </NavLink>
                <NavLink to="/registerHours" activestyle='true'>
                 Hours
                </NavLink>
              </>
            }
            <button onClick={handleClick}>Sign Out</button>
          </NavMenu>
        </Nav>
      </div>
    </>
  );
};