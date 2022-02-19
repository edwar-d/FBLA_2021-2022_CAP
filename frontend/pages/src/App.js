import './App.css';
import SearchBar from './Components/SearchBar';
import { Button, ButtonGroup } from '@material-ui/core';
import touristData from "./Data.json";
import styled from 'styled-components';
import React, {useState, Component} from 'react';
import LoginForm from './Components/LoginForm'
import Flower from './images/stockimag.jpg'
import Grid from "@material-ui/core/Grid";
import TouristCards from './Components/displayTourists';



// const todoItems = [
//   {
//     id: 1,
//     city: "San Jose",
//     rating: "4",
//     type: "restaurant",
//   },
// ];

// const requestOptions = {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({ City: '', Rating: '', Type: '',})
// };

// fetch('http://127.0.0.1:8000/api/v1/json/call', requestOptions)
//   .then(response => response.json())
//   .then(data => this.setState({ postId: data.id }));

function App() {
  return (


    <div>
      <div className='image'>
      {<img src={Flower}
       style={{width: 800, height: 800, padding: 1, marginLeft: 875, marginTop: 60}} /> } 
      </div>
      <div className='App'>
      <LoginForm></LoginForm>
      </div>
      <div className='Cards'>
        <Grid container>
          <Grid item xs={6}>  
          {/* <TouristCards></TouristCards> */}
        </Grid>
        </Grid>
      </div>
    </div>

  );
}

export default App;
