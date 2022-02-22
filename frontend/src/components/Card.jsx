import React from "react";
import "./css/card.css";

function Card (props) {
      return(
          <div className="card">
            <div className="card-body">
              <h1>{props.name}</h1>
              <p>{props.loc}  |  {props.address}</p>
              <p id = 'open'>Open: {props.times}</p>
              <h2>Contact</h2>
              <p>Phone: {props.number}</p>
              <p>Website: {props.website}</p>
              <h5>{props.rating} ({props.reviews} reviews)</h5>
            </div>
          </div>
      )    
}

export default Card;