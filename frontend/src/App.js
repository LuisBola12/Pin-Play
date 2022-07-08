import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from './Pages/login';
import { Register } from './Pages/register';
import { Unauthoraized } from './Pages/unauthoraized';
import { PrivateRoute } from './Components/PrivateRoute/PrivateRoute';
import { Home } from './Pages/home';
import { Players } from './Pages/players';
import { Clasificacion } from'./Pages/clasificacion';
import PlayerProfile from './Pages/playerProfile';
import Tournaments from './Pages/tournaments';

function App() {
  
  return (

    <Router>
      <Routes>
        <Route path='/' element={<Tournaments />} />
        <Route path='login' element={<Login />} />
        <Route path='no-autorizado' element={<Unauthoraized />} />
        <Route path='registrarse' element={<Register />} />
        <Route path='home' element={<Home />} />
        <Route path='jugadores' element={<Players />} />
        <Route path='clasificacion' element={<Clasificacion />} />
        <Route path='perfilJugador' element={<PlayerProfile />} />

        {/* {userRoll && userRoll.Roles === 'admin' ? 
        (
          <Route element={<PrivateRoute allowedRoles={['admin']} />}>
        
          </Route>
        ) : (
          <Route element={<PrivateRoute allowedRoles={['emp']} />}>
          
          </Route>
        ) } */}
      </Routes>
    </Router>
  );
}

export default App;
