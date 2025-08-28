import React from "react";
import { DateRangePicker } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import "./css/Book.scss";
import axios from "axios";
import { Navigate } from "react-router-dom";

const {
  allowedMaxDays,
  allowedDays,
  allowedRange,
  beforeToday,
  afterToday,
  combine,
} = DateRangePicker;

export default class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date_s: [],
      date_e: [],
      rooms: [],
    };
  }

  getDate = (range) => {
    this.setState(
      {
        date_s: [
          range[0].getMonth() + 1,
          range[0].getDate(),
          range[0].getFullYear(),
        ],
        date_e: [
          range[1].getMonth() + 1,
          range[1].getDate(),
          range[1].getFullYear(),
        ],
      },
      () => {
        this.post_r();
        setTimeout(() => {
          this.props.upd();
        }, 1000);
      }
    );
  }

  async post_r() {
    const api_url = "http://127.0.0.1:8000/api/v1.1.2/json/p/gar";
    let check_in_ =
      this.state.date_s[2].toString() +
      "-" +
      this.state.date_s[0].toString() +
      "-" +
      this.state.date_s[1].toString();
    let check_out_ =
      this.state.date_e[2].toString() +
      "-" +
      this.state.date_e[0].toString() +
      "-" +
      this.state.date_e[1].toString();

    const post = JSON.stringify({
      check_in: check_in_,
      check_out: check_out_,
    });

    console.log(post);

    try {
      const res = await axios.post(api_url, post, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });

      // alert(res.data["rooms"]);
      this.setRooms(res.data["rooms"]);

    } catch (error) 
    {
      this.setRooms([1, 2, 3, 4]);
    }

    //this.setRooms(res.data["rooms"]); // TODO: figure out how the axios stuff works and remove this
  }

  setRooms = (newRooms) => {
    this.setState({ rooms: newRooms });
  }

  render() {
    return (
      <div className="book-wrapper">
        <div className="mcontainer">
          <div className="ss_logo">
            {" "}
            <i className="fa fa-home"></i>
          </div>
        </div>
        <div className="dateRanger">
          <p>Select a time slot</p>
          <p></p>
          <DateRangePicker className="ranger" onChange={this.getDate} />
        </div>
      </div>
    );
  }
}
