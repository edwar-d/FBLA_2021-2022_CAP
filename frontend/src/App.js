import React, { Component } from "react";
import './App.css';
import Card from './components/Card'
import attractions from './data'

function createCard(tourist) {
  return <Card 
    name = {tourist.name}
    loc = {tourist.loc}
    address = {tourist.address}
    number = {tourist.number}
    website = {tourist.website}
    times = {tourist.open_time}
    rating = {tourist.star_rating}
    reviews = {tourist.reviews}
  />
}

class App extends Component
{
  
  render()
  {
    return (
      <div className="App">
        {attractions.map(createCard)}
      </div>
    );  
  }

}

export default App;
