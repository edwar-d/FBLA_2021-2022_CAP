import React, { Component } from "react";
import FadeIn from "components/FadeIn";
import { Row, Badge, Button, UncontrolledCollapse } from "reactstrap";

import "./css/RoomDisplay.scss";
import { Link } from "react-router-dom";
import axios from "axios";

const _rooms = require("../assets/json/rooms.json");
const extraAmenities = require("../assets/json/amenities.json");

/*
 * RoomDisplay component displays a single room with its description, image, and booking options.
 *
 * Props:
 * - roomNum (number): The room number to be displayed.
 * - children (React Node): The description of the room to be displayed.
 */
class RoomDisplay extends Component {
  constructor(props) {
    super(props);

    const ds = new Date(props.date_s[2], props.date_s[0] - 1, props.date_s[1]);
    const de = new Date(props.date_e[2], props.date_e[0] - 1, props.date_e[1]);

    const duration =
      Math.floor((de - new Date(2000, 0, 1)) / (1000 * 60 * 60 * 24)) -
      Math.floor((ds - new Date(2000, 0, 1)) / (1000 * 60 * 60 * 24));

    this.state = {
      roomNum: props.roomNum,
      dayNum: duration,
      check_in: props.date_s,
      check_out: props.date_e,
      capacity: props.capacity ? props.capacity : 2,
      price: props.price ? props.price : 150,
      extra: props.extra ? props.extra : [1, 2, 3, 5, 8],
    };
  }

  toggleFreeze = (e) => {
    if (e.target.closest(".room-booking")) return;
    let element = e.target.closest(".room-display");
    element.classList.toggle("opened-room-display");
  };

  // TODO: wrap in FadeIn component
  render() {
    const { roomNum, capacity, price, extra } = this.state;
    const swapOrder = roomNum % 2 === 0;

    return (
      <div className="room-display">
        <Row onClick={this.toggleFreeze} id={`booking-toggler-${roomNum}`}>
          <div className="room-thumbnail">
            <img
              src={require("../assets/imgs" + _rooms[roomNum - 1].img_src)}
            />
          </div>
          <div className="room-description">
            <h2>{_rooms[roomNum - 1].name}</h2>
            <div className="room-info">
              <div className="mr-1">
                Room for <strong>{capacity}</strong> &#124;
              </div>
              <div>
                Starting at <strong>${price}</strong> per night
              </div>
            </div>
            <div>{this.props.children}</div>
          </div>
        </Row>
        <RoomExtras extra={extra} />
        <UncontrolledCollapse toggler={`#booking-toggler-${roomNum}`}>
          <PreCheckout roomNum={roomNum} days={this.state.dayNum} />
        </UncontrolledCollapse>
      </div>
    );
  }
}

function PreCheckout(props) {
  const { roomNum, days } = props;

  return (
    <div>
      <div className="room-booking mx-2">
        <p>
          <strong>Details and Pricing:</strong>
          <br />
          <Receipt days={days} />
        </p>
        <Button
          className="proceed-button"
          id={`proceed-toggler-${roomNum}`}
          onClick={(event) => {
            event.target.classList.remove("proceed-button");
            event.target.classList.add("proceed-button-clicked");
          }}
        >
          {`Proceed →`}
        </Button>
        <div className="card-checkout-placeholder">
          <UncontrolledCollapse toggler={`#proceed-toggler-${roomNum}`}>
            <CheckoutOptionsGrid roomNum={roomNum} dayNum={days} />
          </UncontrolledCollapse>
        </div>
      </div>
    </div>
  );
}

function CheckoutOptionsGrid(props) {
  const { roomNum, dayNum, date_s,  date_e} = props;

  const handleClick = async () => 
  {
    const data = {
      roomNum, 
      date_s, 
      date_e
    };
    const api_url = "http://127.0.0.1:8000/api/v1.1.2/json/p/do";
    const post = JSON.stringify(data)
    console.log(post)

    try {
      const res = await axios.post(api_url, post, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });

    } catch (error) {
      // In case of a POST request error (no results in array), browser alerts user to do refresh and change query
      alert(error);
    }

    // await writeJsonFile("../assets/json/cache.json", JSON.stringify(data));
    
    // await fetch("../assets/json/cache.json", {
    //   method: 'PUT',
    //   body: JSON.stringify(data)
    // });

    console.log('JSON file saved!');
  };

  return (
    <div className="room-checkout mx-2">
      <div>
        <h4>Payment Options</h4>
        <div className="payment-grid">
          <Link 
            to={{
              pathname: "/checkout",
              state: { roomNum: roomNum, dayNum: dayNum, check_in: date_s, check_out: date_e},
            }}
            className="payment-grid-item visa"
            onClick={handleClick}
          >
            Visa
          </Link>
          <a
            href="https://www.paypal.com/webapps/shoppingcart/error?flowlogging_id=f9989561ff2bd&code=INVALID_HOSTED_BUTTON_ID"
            target="_blank"
            className="payment-grid-item paypal"
          >
            PayPal
          </a>
          <Link
            to={{
              pathname: "/checkout",
              state: { roomNum: roomNum, dayNum: dayNum },
            }}
            className="payment-grid-item mastercard"
            onClick={handleClick}
          >
            MasterCard
          </Link>
          <a
            href="https://sunrisesuites.myshopify.com/admin/api/2022-04/"
            target="_blank"
            className="payment-grid-item shopify"
          >
            Shopify
          </a>
        </div>
      </div>
    </div>
  );
}

function Receipt(props) {
  const { days } = props;

  return (
    <table className="receipt">
      <style></style>
      <tbody>
        <tr>
          <td>Room Charge</td>
          <td>
            ${(150 * days).toFixed(2)}
            <span className="small ml-3">($150.00 x {days} days)</span>
          </td>
        </tr>
        <tr>
          <td>Sales Tax (8%)</td>
          <td>${(150 * days * 0.08).toFixed(2)}</td>
        </tr>
        <tr>
          <td>Resort Fee</td>
          <td>$20.00</td>
        </tr>
        <tr>
          <td>Energy Surcharge</td>
          <td>$10.00</td>
        </tr>
        <tr>
          <td className="total">Total</td>
          <td className="total">${(150 * days * 1.08 + 30).toFixed(2)}</td>
        </tr>
      </tbody>
    </table>
  );
}

function RoomExtras(props) {
  const { extra } = props;
  return (
    <div className="room-extras">
      <Row>
        {extra.map((id) => {
          const amenity = extraAmenities[id - 1];
          return (
            <div className="extra">
              <Badge className="small mr-1">{amenity.name}</Badge>
            </div>
          );
        })}
      </Row>
    </div>
  );
}

export default RoomDisplay;
