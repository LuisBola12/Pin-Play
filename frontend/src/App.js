import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from './Pages/login';
import { Register } from './Pages/register';
import { Unauthoraized } from './Pages/unauthoraized';
import { Players } from './Pages/players';
import { Classification } from'./Pages/classification';
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
        <Route path='jugadores' element={<Players />} />
        <Route path='clasificacion' element={<Classification />} />
        <Route path='perfilJugador' element={<PlayerProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
