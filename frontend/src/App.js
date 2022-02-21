import React, { Component } from "react";
import './App.css';
import Card from './components/Card'
import attractions from './data'

function createCard(attraction) {
  return <Card 
    name = {attraction.name}
    loc = {attraction.loc}
    address = {attraction.address}
    number = {attraction.number}
    website = {attraction.website}
    times = {attraction.open_time}
    rating = {attraction.star_rating}
    reviews = {attraction.reviews}
  />
}

console.log(attractions[0].name)

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
