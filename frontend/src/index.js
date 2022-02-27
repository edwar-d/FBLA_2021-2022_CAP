import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";


const root  = document.getElementById("root");

export default function Index()
{

  return(
    <App />
  )

}


ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  root
);