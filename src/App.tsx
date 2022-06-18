import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import ConfigTarjeta from './components/sigunp/ConfigTarjeta';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import SeleccionPelicula from './pages/SeleccionPelicula';
import SignUp from './pages/SignUp';
import User from './pages/User';
import Users from './pages/Users';
import Welcome from './pages/Welcome';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
     
      {
      
      }
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/welcome" element={<Welcome />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup'element={<SignUp />}> </Route>
          <Route path='/user'element={<User />}> </Route>
          <Route path='/configuracionTarjeta' element={<ConfigTarjeta />}></Route>
          <Route path='/users' element={<Users />}></Route>
          <Route path='/seleccionpeliculas' element={<SeleccionPelicula />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
