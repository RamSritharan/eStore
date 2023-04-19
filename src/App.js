import logo from "./logo.svg";
import Nav from "./components/Nav/Nav.jsx";
import "./App.css";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/Homepage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Nav />
      </div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Men's" />
        <Route path="/Women's" />
        <Route path="/About Us" />
      </Routes>
    </>
  );
}

export default App;
