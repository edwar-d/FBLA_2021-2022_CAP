import "./App.css";
import axios from "axios";
import React, { Component } from "react";
import Card from "./components/Card";
import attractions from "./testdata";
import Bridge from "./components/ggb.jpg"

// Function creates an attraction Card using the Card.jsx component
function createCard(tourist) {
  // Returns a Card component with the specified React properties
  return (
    <Card
      key={tourist.name} // Setting name as the unique key property
      img={tourist.img}
      name={tourist.name}
      loc={tourist.loc}
      address={tourist.address}
      number={tourist.number}
      website={tourist.website}
      times={tourist.open_time}
      rating={tourist.star_rating}
      reviews={tourist.reviews}
    />
  );
}

class App extends Component {
  constructor() {
    super();
    this.state = JSON.parse(window.localStorage.getItem("state")) || {
      optionRender: false,
      data: [],
    };

    if (this.state.optionRender == true) {
      this.Reverse();
    }

    this.initial_defPage = (
      
      <div className="Image">
      <img src={Bridge} className = "Bridge"/>
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
              <label htmlFor="numOfReviews"> Number of Reviews: </label>
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
              <button onClick={() => this.submitEvent()}>Submit</button>
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

      super.setState({ data: this.queryData });
    } catch (error) {
      // In case of a POST request error (no results in array), browser alerts user to do refresh and change query
      alert(
        "Unfortunately, no attractions match your search. Click 'OK' to refresh page"
      );
      window.location.reload(false);
    }
  }

  sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  submitEvent = (event) => {
    this.post_r();
    this.sleep(100).then(() => {
      this.Reverse();
    });
  };

  render() {
    if (this.state.optionRender === false) {
      return this.initial_defPage;
    } else {
      return (
        <div>
          <h1 className="main-header">Your Suggested Attractions...</h1>
          {/* Use the createCard() inside the map() function to create attraction card from the JSON array 'this.queryData' */}
          {this.queryData?.map(createCard)} 
          
          
          
          {/* Test Data Render: */}
          {/* {attractions.map(createCard)}  */}
        </div>
      );
    }
  }
}

export default App;
