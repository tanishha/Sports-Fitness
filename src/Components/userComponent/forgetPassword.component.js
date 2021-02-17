import React, { Component } from "react";
import "./user.component.css";
import { Link } from "react-router-dom";

import {
    showInfo,
    handleError
  } from './../../util/notification'
  import {POST} from './../../util/httpClient'
export default class ForgetPasswordComponent extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      emailerr: "",
      isSubmitting: false,
      isValidForm: false,
    };
  }
  handleChange = (e) => {
    let { name, value } = e.target;

    this.setState(
      () => ({
        [name]: value,
      }),
      () => {
        this.validateForm(name);
      }
    );
  };
  validateForm() {
    let errMsg;
    errMsg = this.state.email
    ? this.state.email.includes("@") &&
      this.state.email.includes(".com")
      ? ""
      : "Invalid email"
    : "Required field*";
   
    this.setState(
      () => ({
        emailerr: errMsg,
      }),
      () => {
        const errors = Object.values(this.state.emailerr).filter((err) => err);
        this.setState({
          isValidForm: errors.length === 0,
        });
      }
    );
  }
  handleSubmit=(e)=>{
    e.preventDefault();
    this.setState({
      isSubmitting:true
    })
    POST("/auth/forgot_password", {email:this.state.email})
    .then((response) => {
      showInfo("Password Reset Link Sent ");
      this.setState({
          isSubmitting: false,
        });
    })
    .catch((error) => {
      handleError(error);
      this.setState({
        isSubmitting: false,
      });
     
    });
   
};
  render() {
    return (
      <section className="sign-in">
        <div className="container">
          <div className="signin-content">
            <div className="signin-image">
              <figure>
                <img src="images/signin-image.jpg" alt="" />
              </figure>
              <Link to="/" className="signup-image-link">
            Back to sign in
              </Link>
            </div>

            <div className="signin-form">
              <h2 className="form-title">Forgot password? </h2>
              <form
                className="register-form"
                id="login-form"
                onSubmit={this.handleSubmit}
                noValidate
              >
                <div className="form-group">
                  <label htmlFor="email">
                    <i className="zmdi zmdi-lock"></i>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Please enter your email address"
                    onChange={this.handleChange}
                  />
                </div>
                <p className="text-danger">
                  {" "}
                  <strong>{this.state.emailerr}</strong>
                </p>

                <div className="form-group form-button">
                  <button
                    disabled={!this.state.isValidForm}
                    type="submit"
                    name="signup"
                    id="signup"
                    className="form-submit"
                  >
                    {this.state.isSubmitting ? "Sending.." : "Send email"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
