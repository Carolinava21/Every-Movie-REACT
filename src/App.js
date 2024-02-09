import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import DetailMovies from "./components/pages/Movies/DetailsMovie";
import "./index.css";
//routes se unen todas las vistas Home y details

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<DetailMovies />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
