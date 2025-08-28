import "./css/Home.scss";
import React from "react";

import NavBar from "components/NavBar";
import Footer from "components/Footer";
import AttractionsGrid from "components/AttractionsGrid";
import AboutText from "components/AboutText";

export default class HomePage extends React.Component 
{
  render() {
    return (
      <div className="homepage-wrapper">
        <div className="intro">
          <NavBar />
          <img
            className="logo"
            src={require("../assets/imgs/misc/sunrise_suites_logo_2.png")}
          ></img>
          <p class="lbtl t1">Waterfront Bed and </p>
          <p class="lbtl t2">Breakfast resort</p>
          <div id="scroll-down-animation">
            <span className="mouse">
              <span className="move"></span>
            </span>
            <h2>Scroll down</h2>
          </div>
        </div>

          <div className="advc" >
            <div class="advc-container">
              <h1>Find True Perfection: <a href="/rooms" id="redirectb2"><span className="book-button"> Book Now !</span></a></h1> 
              {/* <a href="/rooms" > Book </span></a> */}
            </div>
          </div>

        <div className="about" name="about" id="about">
        {/* <div className="advc">
          <h1>Gambetta</h1>
          <p>Smooth hover effect achieved by using variable fonts.</p>
          <p>Write your own words to try it out.</p>
        </div> */}
            <AboutText />
            <AttractionsGrid />
        </div>
          <Footer />
      </div>
    );
  }
}
