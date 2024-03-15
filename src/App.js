import "./App.css";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./component/navbar/navbar";

function App() {
  return (
    <header className="bg-dark">
      <Navbar></Navbar>
    </header>
  );
}

export default App;
