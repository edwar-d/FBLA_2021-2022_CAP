import React from "react";
import "./css/card.css";
import email from "../components/email.png"

/**
 * @param {*} props 
 * @returns card component which has all the useful information needed. 
 * Using react props to get data after filtering
 */

function Card (props) {
      return(
          <div className="card">
            <img src = {props.img} />
            <div className="card-body">
              <a className="a-name" target='blank' href={props.website}><h1>{props.name}</h1></a>
              <p className="type_of">{props.type_of}</p>
              <p>{props.loc}  |  {props.address}</p>
              <p id = 'open'>Open: {props.times}</p>
              <h2>Contact:</h2>
              <p>Phone: {props.number}</p>
              <a href = {props.website} target = 'blank'>Website 🔗</a>
              <h5>{props.rating}/5 STARS ({props.reviews} reviews)</h5>
              <button className="gmaps"><a href={props.gmaps} target = "blank">Get Directions 📍</a></button>
              <button 
                className="email-button"><a src={email} 
                href={"mailto:name@gmail.com?subject=Check out this Attraction I found on InstaTrip!&body=Hey there! I found a new " + props.type_of + " in " + props.loc + " called " + props.name + " on InstaTrip. Here is the website: " + props.website + ". It is open from " + props.times + " and can be contacted at " + props.number + ". Let me know if you are interested! If so, the address is " + props.address + "!"} 
                target="blank"
              >Share on Email ✉️</a></button>
              <button 
                className="twitter-button">
                <a 
                  src={email}  
                  href={"https://twitter.com/intent/tweet?text=Hey followers! I found a new " + props.type_of + " in " + props.loc + " called " + props.name + " on InstaTrip. It is open from " + props.times + " and can be contacted at " + props.number + ". Let me know if you are interested! If so, the address is " + props.address + "!"} 
                  target="blank"
                >Share on Twitter 📬</a></button>
            </div>
          </div>
      )    
}

export default Card;