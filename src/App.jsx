import React from "react";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login/Login";
import LoadingScreen from "./Login/LoadingScreen";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login/entrar" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login/*" element={<Login />} />
        <Route path="/auth" element={<LoadingScreen />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
