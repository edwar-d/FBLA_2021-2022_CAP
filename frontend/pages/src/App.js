import './App.css';
import SearchBar from './Components/SearchBar';
import { Button, ButtonGroup } from '@material-ui/core';
import touristData from "./Data.json";
import styled from 'styled-components';
import React, {useState} from 'react';
import LoginForm from './Components/LoginForm'
import Flower from './images/stockimag.jpg'
import displayCards from './Components/displayTourists'


function App() {
  return (

    <div>
      <div className='image'>
      {<img src={Flower}
       style={{width: 800, height: 800, padding: 1, marginLeft: 875, marginTop: 60}} /> } 
      </div>
      <div className='App'>
        <displayCards></displayCards>
      <LoginForm></LoginForm>
      </div>
    </div>

  );
}

export default App;
