import React from "react";
import "./css/Signup.scss";
import axios from "axios";
import { Navigate } from "react-router-dom";

export default class Signup extends React.Component {
  constructor(props) {
    super(props);

    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      let j = JSON.parse(loggedInUser)["email"];
      alert("already logged in as: " + j);
      this.state = {
        fname: "",
        lname: "",
        email: "",
        password: "",
        confirm_password: "",
        phone: "",
        address: "",
        redirect: true,
      };
    } else {
      this.state = {
        fname: "",
        lname: "",
        email: "",
        password: "",
        confirm_password: "",
        phone: "",
        address: "",
        redirect: false,
      };
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setRedirectHome = this.setRedirectHome.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    console.log(this.state);
    if (this.state.confirm_password != this.state.password) {
      alert("password are not the same");
    } else {
      this.post_r();
    }

    return false;
  }

  setRedirectHome() {
    this.setState({
      redirect: true,
    });
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Navigate to="/" />;
    }
  };

  async post_r() {
    const api_url = "http://127.0.0.1:8000/api/v1.1.2/json/p/signup";

    const post = JSON.stringify({
      fname: this.state.fname,
      lname: this.state.lname,
      email: this.state.email,
      password: this.state.password,
      phone: this.state.phone,
      address: this.state.address,
    });

    try {
      const res = await axios.post(api_url, post, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });

      // Removes single-quotes from POST request result
      // JSON.parse() parses the Stringified JSON to a JSON Array
      // Stores array in this.queryData
      // this.queryData = JSON.parse(
      //   res.data.replaceAll("'", "")
      // );
      if (res.data["response"] == "success") {
        alert("signup success");

        this.setState({
          redirect: true,
        });
      }
    } catch (error) {
      // In case of a POST request error (no results in array), browser alerts user to do refresh and change query
      alert(error);
    }
  }

  render() {
    return (
      <div className="signup-page">
        <div className="actualcontainer">
          <div className="ss_logo" onClick={this.setRedirectHome}>
            {" "}
            <a className="lk"> ← Return Home </a>
          </div>
          {this.renderRedirect()}
          <div className="container">
            <div className="formtitle">Sign Up</div>
            <form action="#" onSubmit={this.handleSubmit}>
              <div className="user_details">
                <div className="input_pox">
                  <span className="details">First Name</span>
                  <input
                    name="fname"
                    type="text"
                    placeholder=" first name"
                    onChange={this.handleInputChange}
                    required
                  />
                </div>
                <div className="input_pox">
                  <span className="details">Last name</span>
                  <input
                    name="lname"
                    type="text"
                    placeholder="last name"
                    onChange={this.handleInputChange}
                    required
                  />
                </div>
                <div className="input_pox">
                  <span className="details">Email</span>
                  <input
                    name="email"
                    type="email"
                    placeholder="email"
                    onChange={this.handleInputChange}
                    required
                  />
                </div>
                <div className="input_pox">
                  <span className="details">Phone Number</span>
                  <input
                    name="phone"
                    type="number"
                    placeholder="phone"
                    onChange={this.handleInputChange}
                    required
                  />
                </div>
                <div className="input_pox">
                  <span className="details">Password</span>
                  <input
                    name="password"
                    type="password"
                    placeholder=" password"
                    onChange={this.handleInputChange}
                    required
                  />
                </div>
                <div className="input_pox">
                  <span className="details">Confirm Password</span>
                  <input
                    name="confirm_password"
                    type="password"
                    placeholder=" confirm password"
                    onChange={this.handleInputChange}
                    required
                  />
                </div>

                <div className="input_pox" id="special">
                  <span className="details">Address</span>
                  <input
                    name="address"
                    type="text"
                    placeholder="address"
                    onChange={this.handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="button">
                <input type="submit" value="Submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
