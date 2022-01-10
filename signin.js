import React, { Component } from "react";
import { Button } from "react-bootstrap";

export default class signin extends Component {
  render() {
    return (
      <div>
        <form className="form">
          <label for="email/phone" className="label1">
            Email or Phone
          </label>
          <br />
          <input
            type="text"
            id="email"
            name="email"
            placeholder="  enter email id or phone"
            className="input"
          />
          <br />
          <label for="password" className="label2">
            Password
          </label>
          <br />
          <input
            type="password"
            id="password"
            name="password"
            placeholder=" enter your password"
            className="input"
          />
          <br />
        </form>
        <Button className="login" type="button" onclick="myFunction()">
          <span>Login</span>
        </Button>
        <br />
        <Button className="forgot">
          <span>Forgot Password?</span>
        </Button>
      </div>
    );
  }
}
