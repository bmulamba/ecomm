import { Header } from "./components/header/Header";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Pages } from "./components/Pages/Pages";
import React from "react";

let App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path={"/"} element={<Pages />} />
      </Routes>
    </>
  );
};

export default App;
