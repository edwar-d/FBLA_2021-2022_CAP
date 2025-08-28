import React from "react";
import "../components/LoginBox.scss";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";

export default class LoginBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      redirect: false,
      redirect2: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setRedirectSignup = this.setRedirectSignup.bind(this);
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
    this.post_r();
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Navigate to="/" />; //DEBUG
    }
    if (this.state.redirect2) {
      return <Navigate to="/signup" />;
    }
  };

  async post_r() {
    const api_url = "http://127.0.0.1:8000/api/v1.1.2/json/p/login";

    const post = JSON.stringify({
      email: this.state.email,
      password: this.state.password,
    });

    try {
      const res = await axios.post(api_url, post, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });

      if (res.data["user"] == this.state.email) {
        alert("login success");

        const per_auth = JSON.stringify({
          email: res.data["user"],
          auth_cookie: res.data["auth-cookie"],
        });

        localStorage.setItem("user", per_auth);
        console.log(per_auth);

        this.setState({
          redirect: true,
        });
      } else {
        alert(res.data["response"]);
      }
    } catch (error) {
      // In case of a POST request error (no results in array), browser alerts user to do refresh and change query
      alert(error);
    }
  }

  setRedirectSignup() {
    window.location.reload();
  }

  render() {
    return (
      <div className="login-box-wrapper popup-box">
        <div className="box">
          <span className="close-icon" onClick={this.props.handleClose}></span>

          <section className="login">
            {this.renderRedirect()}

            <div className="login_box">
              <div className="left">
                <div className="top_link">
                  {/* <a onClick={this.setRedirectSignup}> */}
                  <a href="/">
                    <img src={require("../imgs/misc/cross.png")} />
                  </a>{" "}
                </div>{" "}
                <div className="contact">
                  <form action="" onSubmit={this.handleSubmit}>
                    <h3>LOG IN</h3>
                    <input
                      type="text"
                      name="email"
                      placeholder="email"
                      onChange={this.handleInputChange}
                    />

                    <input
                      className="pswd"
                      type="password"
                      name="password"
                      placeholder="password"
                      onChange={this.handleInputChange}
                    />
                    <button type="submit" className="submit" value="Submit">
                      Log In
                    </button>
                  </form>
                </div>
              </div>
              <div className="right">
                <div className="right-text">
                  <h2>Sunrise Suites</h2>
                  <h5>Oceanside Lodging</h5>
                </div>
              </div>
            </div>
          </section>

          {/*         
          <div className="cont">
            <form className="form sign-in" onSubmit={this.handleSubmit}>
              
              {this.renderRedirect()}
              <h2>Welcome Back</h2>
              <label>
                <span>Email</span>
                <input name="email" type="email"
                  placeholder="email"
                  onChange={this.handleInputChange} />
              </label>
              <label>
                <span>Password</span>
                <input name="password" type="password"
                  placeholder=" password"
                  onChange={this.handleInputChange} />
              </label>
              <p className="forgot-pass">Forgot password?</p>
              <button type="submit" className="submit" value="Submit">Sign In</button>
              <button type="button" className="fb-btn">Connect with <span>facebook</span></button>
            </form>
            <div className="sub-cont">
              <div className="img">
                <div className="img__text m--up">
                  <h2>New here?</h2>
                  <p>Sign up and discover great amount of new opportunities!</p>
                </div>
                <div className="img__text m--in">
                  <h2>One of us?</h2>
                  <p>If you already has an account, just sign in. We've missed you!</p>
                </div>
                <button className="img__btn" onClick={this.setRedirectSignup}>
                  <span className="m--up">Sign Up</span>
                  <span className="m--in">Sign In</span>
                </button>
              </div>
            </div>
          </div>*/}
          {this.props.content}
        </div>
      </div>
    );
  }
}
