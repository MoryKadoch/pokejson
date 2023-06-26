import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pokedex from "./components/Pokedex";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Pokedex />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;