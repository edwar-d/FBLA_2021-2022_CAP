import './App.css';
import SearchBar from './Components/SearchBar';
import { Button } from '@material-ui/core';
import touristData from "./Data.json";
import styled from 'styled-components';



function App() {
  return (
    <div className="App">
     <h2> Tourist spots </h2>
     <Button variant="contained">Restaurants</Button>
     <Button variant="contained">Musuems</Button>
     <Button variant="contained">Hills</Button>
     <Button variant="contained">Parks</Button>



      <SearchBar placeholder="Enter tourist location" data={touristData}/>;
    </div>
  );
}

export default App;
