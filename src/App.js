// import React, { useState, useEffect, useContext } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Favorite from "./pages/Favorite.jsx";
import { MovieProvider } from "./context-and-reducer/MovieContext.jsx";
// import { useState, useEffect } from "react";

function App() {
  return (
    <MovieProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorite" element={<Favorite />} />
        </Routes>
      </Router>
    </MovieProvider>
  );
}

export default App;
