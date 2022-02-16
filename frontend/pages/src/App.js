import './App.css';
import SearchBar from './Components/SearchBar';
import { Button, ButtonGroup } from '@material-ui/core';
import touristData from "./Data.json";
import styled from 'styled-components';
import React, {useState} from 'react';
import LoginForm from './Components/LoginForm'
import Flower from './images/stockimag.jpg'


function App() {
  return (

    <div>
      <div className='image'>
      {<img src={Flower}
       style={{width: 700, height: 700, padding: 1, marginLeft: 1000, marginTop: 75}} /> } 
      </div>
      <div className='App'>
      <LoginForm></LoginForm>
      </div>
    </div>

  );
}

export default App;
