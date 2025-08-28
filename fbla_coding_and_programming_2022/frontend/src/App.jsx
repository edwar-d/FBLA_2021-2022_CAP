import "./App.css";
import axios from "axios";
import React, { Component } from "react";
import Card from "./components/Card";
import Bridge from "./components/ggb.jpg"
import lostTourist from "./components/losttourist.png"

let empty = false;
let queuelength = 0;
let needhelp = false;

// Function creates an attraction Card using the Card.jsx component
function createCard(tourist) {
  // Returns a Card component with the specified React properties
  return (
    <Card
      key={tourist.name} // Setting name as the unique key property
      img={tourist.img_url}
      type_of={tourist.type_of}
      name={tourist.name}
      loc={tourist.loc}
      address={tourist.address}
      number={tourist.number}
      website={tourist.website}
      times={tourist.open_time}
      rating={tourist.star_rating}
      reviews={tourist.reviews}
      gmaps={tourist.gmaps}
    />
  );
}

function refreshPage() {
  window.location.reload(false);
}

let win;
function gethelp()
{
  win = window.open("https://arnavnc.github.io/help.html", "", "width=500,height=500");
  //https://arnavnc.github.io/help.html
}

class App extends Component {
  constructor() {
    super();
    this.state = JSON.parse(window.localStorage.getItem("state")) || {
      optionRender: false,
      data: [],
    };

    if (this.state.optionRender === true) {
      this.Reverse();
    }

    /**
     * Creating the initial loaded page for our website with the login form
     * Selection form for search query
     */
    this.menu = 
    (
      <div className="Image">
      <button className="helpButton" onClick={gethelp} >?</button>
      <img src={Bridge} alt="Golden Gate Bridge" className = "Bridge"/>
        <div className="LoginFrom">
          <div className="SubLogin">
            <div className="hi">
              <h1>InstaTrip</h1>
            </div>

            <div className="category">
              <label htmlFor="city">City: </label>

              <select name="city" id="city">
                <option value="op_1">Select</option>
                <option value="op_2">San Francisco</option>
                <option value="op_3">San Jose</option>
                <option value="op_4">Los Altos</option>
              </select>
            </div>

            <div className="category">
              <label htmlFor="attraction_type">Type: </label>

              <select name="attraction_type" id="attraction_type">
                <option value="op_1">Select</option>
                <option value="op_2">Restaurant</option>
                <option value="op_3">Monuments</option>
                <option value="op_4">Parks</option>
                <option value="op_5">Galleries</option>
                <option value="op_6">Hotels</option>
                <option value="op_7">Shopping</option>
              </select>
            </div>

            <div className="category">
              <label htmlFor="rating">Rating: </label>

              <select name="rating" id="rating">
                <option value="op_1">No Filter</option>
                <option value="op_2">Sort by Highest</option>
              </select>
            </div>

            <div className="category">
              <label htmlFor="tour"> Guided Tours: </label>
              <select name="tour" id="tour">
                <option value="op_1">Select</option>
                <option value="op_2">Yes</option>
                <option value="op_3">No</option>
              </select>
            </div>

            <div className="category">
              <label htmlFor="numOfReviews"> Review Count: </label>
              <select name="numOfReviews" id="numOfReviews">
                <option value="op_1">Select</option>
                <option value="op_2">1-10</option>
                <option value="op_3">10-100</option>
                <option value="op_4">100-500</option>
                <option value="op_5">500-1000</option>
                <option value="op_6">1000+</option>
              </select>
            </div>

            <div className="button">
              <button className="submit-button" onClick={() => this.submitEvent()}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    );

    this.submitEvent = this.submitEvent.bind(this);
    this.render = this.render.bind(this);
  }

  setState(state) {
    window.localStorage.setItem("state", JSON.stringify(state));

    super.setState(state);
  }

  Reverse = () => {
    return this.setState({
      ...this.state,
      optionRender: !this.state.optionRender,
    });
  };

  /**
   * Sending a post request to a local SQLite database
   */

  async post_r() {
    const api_url = "http://127.0.0.1:8000/api/v1/json/call";

    const pos_t = JSON.stringify({
      city: document.getElementById("city").selectedOptions[0].text,
      rating: document.getElementById("rating").selectedOptions[0].text,
      guided_tours: document.getElementById("tour").selectedOptions[0].text,
      number_of_reviews:
        document.getElementById("numOfReviews").selectedOptions[0].text,
      type_of:
        document.getElementById("attraction_type").selectedOptions[0].text,
    });

    try {
      const res = await axios.post(api_url, pos_t, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });

      // Removes single-quotes from POST request result
      // JSON.parse() parses the Stringified JSON to a JSON Array
      // Stores array in this.queryData
      this.queryData = JSON.parse(
        res.data.replaceAll("'", "")
      );

      queuelength = this.queryData.length;

      super.setState({ data: this.queryData });
    } catch (error) {
      // In case of a POST request error (no results in array), browser alerts user to do refresh and change query
      empty = true;
    }

  }

  /**
   *
   * @param {*} time
   * @returns make sures that the post request does not take too much time to load
   */

  sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
/**
 *
 * @param {*} event
 * Handling the submit event when you press the submit button in your login form
 */
  submitEvent = (event) => {
    this.post_r();
    this.sleep(100).then(() => {
      this.Reverse();
    });
  };

  render() {
    console.log(empty);
    // if(needhelp)
    // {
    //   return(
    //     <div className="no-results">
    //       <img src={lostTourist} alt="lost tourist" className = "tourist-image"/>
    //       <h1 className="unmain-header">HELP MENU:</h1>
    //       <button className="lost-refresh-button" onClick={refreshPage}> Return to Main Menu</button>
    //     </div>
    //   )
    // }else 
    if (this.state.optionRender === false) {
      return this.menu;
    } else if(empty){
      console.log("in");
      return(
        <div className="no-results">
          <img src={lostTourist} alt="lost tourist" className = "tourist-image"/>
          <h1 className="unmain-header">Unfortunately, there were no results which match your desires :(</h1>
          <button className="lost-refresh-button" onClick={refreshPage}> Return to Main Menu</button>
        </div>
      )
    }
      return (
        <div>
         <div className = "header">
          <h1 className="main-header">Your Suggested Attractions... ({queuelength} Results)</h1>
          <button className="refresh-button" onClick={refreshPage}>Main Menu</button>
         </div>
          {/* Use the createCard() inside the map() function to create
          attraction card from the JSON array 'this.queryData' */}
          {this.queryData?.map(createCard)}

        </div>
      );
    }
}

export default App;
