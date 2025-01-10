import React from "react";
import MainNavBarsection from "./Components/MainNavBarsection";
import { BrowserRouter } from "react-router-dom";
import MainRouter from "../src/MainRouter";

const App = () => {
  return (
    <BrowserRouter>
    <MainRouter/>
    </BrowserRouter>
  );
};

export default App;
