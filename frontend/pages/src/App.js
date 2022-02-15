import './App.css';
import SearchBar from './Components/SearchBar';
import { Button, ButtonGroup } from '@material-ui/core';
import touristData from "./Data.json";
import styled from 'styled-components';
import React, {useState} from 'react';
import LoginForm from './Components/LoginForm'


function App() {
  return (
    <div className="App">
     <h1> Tourist Advisor </h1>
    <LoginForm placeholder="Enter tourist location" data={touristData}></LoginForm>
     <SearchBar placeholder="Enter tourist location" data={touristData}/>;
    </div>
  );
}

export default App;
