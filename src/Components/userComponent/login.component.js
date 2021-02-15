import React, { Component } from "react";
import "./user.component.css";
const defaultForm = {
  email: "",
  password: "",
};
export default class LoginComponent extends Component {
  constructor() {
    super();
    this.state = {
      data: {
        ...defaultForm,
      },
      error: {
        ...defaultForm,
      },
      isSubmitting: false,
      isValidForm: false,
      remember_me:false
    };
  }
  handleChange = (e) => {
    let { type, name, value, checked } = e.target;
    if (type === "checkbox") {
      return this.state({
        [name]: checked,
      });
    }
    this.setState(
      (preState) => ({
        data: {
          ...preState.data,
          [name]: value,
        },
      }),
      () => {
        this.validateForm(name);
      }
    );
  };
  validateForm(fieldname) {
    let errMsg = this.state.data[fieldname] ? "" : `${fieldname.toUpperCse()} is required`;
    this.setState(
      (preState) => ({
        error: {
          ...preState.error,
          [fieldname]: errMsg,
        },
      }),
      () => {
        const errors = Object.values(this.state.error).filter((err) => err);
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
    const {username,password}=this.state;
  }
  render() {
    return (
      <section className="sign-in">
        <div className="container">
          <div className="signin-content">
            <div className="signin-image">
              <figure>
                <img src="images/signin-image.jpg" alt="sing up image" />
              </figure>
              <a href="#" className="signup-image-link">
                Create an account
              </a>
            </div>

            <div className="signin-form">
              <h2 className="form-title">Sign in</h2>
              <form  className="register-form" id="login-form" onSubmit={this.handleSubmit} noValidate>
                <div className="form-group">
                  <label htmlFor="email">
                    <i className="zmdi zmdi-email"></i>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    onChange={this.handleChange}
                  />
                </div>
                <p className="text-danger">
                    {" "}
                    <strong>{this.state.error.email}</strong>
                  </p>

                <div className="form-group">
                  <label htmlFor="password">
                    <i className="zmdi zmdi-lock"></i>
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    onChange={this.handleChange}
                  />
                </div>
                <p className="text-danger">
                    {" "}
                    <strong>{this.state.error.password}</strong>
                  </p>

                <div className="form-group">
                  <input
                    type="checkbox"
                    name="remember_me"
                    id="remember-me"
                    className="agree-term"
                  />
                  <label htmlFor="remember_me" className="label-agree-term">
                    <span>
                      <span></span>
                    </span>
                    Remember me
                  </label>
                </div>
                <div className="form-group form-button">
                <button disabled={!this.state.isValidForm}
                      type="submit"
                      name="signup"
                      id="signup"
                      className="form-submit"
                    >{
                        this.state.isSubmitting ? "Logging in..." : "Login"
                      }</button>
                </div>
              </form>
              <div className="social-login">
                <span className="social-label">Or login with</span>
                <ul className="socials">
                  <li>
                    <a href="#">
                      <i className="display-flex-center zmdi zmdi-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="display-flex-center zmdi zmdi-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="display-flex-center zmdi zmdi-google"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
