import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './components/pages/Home';
import './index.css';
//routes se unen todas las vistas Home y details

function App() {
  return (
    <> 
    <BrowserRouter> 
    <Routes> 
    <Route path='/' element={<Home />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
