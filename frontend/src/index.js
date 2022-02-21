import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login'
import Render from './components/Render'
import App from "./App";


const root  = document.getElementById("root");

export default function Index()
{

  return(
    <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<App />}></Route>
          <Route exact path="/select" element={<Login />}></Route>
          <Route exact path="/render" element={<Render />}></Route>
      </Routes>
    </BrowserRouter>
  )

}


ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  root
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
