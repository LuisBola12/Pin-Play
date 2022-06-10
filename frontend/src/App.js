import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from './Pages/login';
import { Register } from './Pages/register';
import { Unauthoraized } from './Pages/unauthoraized';
import { PrivateRoute } from './Components/PrivateRoute/PrivateRoute';
import { Home } from './Pages/home';
import { Jugadores } from './Pages/jugadores';
import PlayerProfile from './Pages/playerProfile';
function App() {
  
  const userRoll = useSelector((state) => state.user.user);

  return (

    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='no-autorizado' element={<Unauthoraized />} />
        <Route path='registrarse' element={<Register />} />
        <Route path='home' element={<Home />} />
        <Route path='jugadores' element={<Jugadores />} />
        <Route path='torneos' element={<Home />} />
        <Route path='clasificacion' element={<Home />} />
        <Route path='perfilJugador' element={<PlayerProfile />} />

        {/* Routes for the employer */}
        {userRoll && userRoll.Roles === 'admin' ? 
        (
          <Route element={<PrivateRoute allowedRoles={['admin']} />}>
          {/* <Route path='/' element={<SelectProject />} /> */}
          
          </Route>
        ) : (
          <Route element={<PrivateRoute allowedRoles={['emp']} />}>
          
          </Route>
        ) }
          

        
      </Routes>
    </Router>
  );
}

export default App;
