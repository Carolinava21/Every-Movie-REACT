import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomeMovies from './components/pages/Movies/HomeMovies';
import Home from './components/pages/Home';
import './index.css';
import './App.css'
//routes se unen todos los componentes

function App() {
  return (
    <> 
    <BrowserRouter> 
    <Routes> 
    <Route path='/' element={<Home />} />
    <Route path='pages/Movies/HomeMovies' element={<HomeMovies/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
