import React, { Component } from "react";
import "./user.component.css";
import { Link } from "react-router-dom";
import {
  showSuccess,

  handleError
} from './../../util/notification'
import {POST} from './../../util/httpClient'

const defaultForm = {
  name: "",
  username:"",
  email: "",
  password: "",
  phoneNumber: "",
};
export default class RegisterComponent extends Component {
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
    };
  }
  handleChange = (e) => {
    const { name, value } = e.target;
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
    let errMsg;
    switch (fieldname) {
      case "name":
        errMsg = this.state.data[fieldname] ? "" : "Required Field";
        break;
        case "username":
        errMsg = this.state.data[fieldname] ? "" : "Required Field";
        break;
      case "phoneNumber":
        errMsg = this.state.data[fieldname]
          ? this.state.data[fieldname].length !== 10
            ? "Incorrect Number"
            : ""
          : "Required Field*";
        break;
      case "password":
        errMsg = this.state.data[fieldname]
          ? this.state.data[fieldname].match(
              /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
            )
            ? ""
            : "Must contain at least one numeric digit, one uppercase and one lowercase letter, and at least 8 or more characters"
          : "Required Field*";
        break;
      case "email":
        errMsg = this.state.data[fieldname]
          ? this.state.data[fieldname].includes("@") &&
            this.state.data[fieldname].includes(".com")
            ? ""
            : "Invalid email"
          : "Required field*";
        break;
      default:
        break;
    }
    this.setState(
      (preState) => ({
        error: {
          ...preState.error,
          [fieldname]: errMsg,
        },
      }),
      () => {
        const errors = Object.values(this.state.error).filter((items) => items);
        this.setState({
          isValidForm: errors.length === 0,
        });
      }
    );
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ isSubmitting: true });
    POST("/auth/register", this.state.data, {})
      .then((response) => {
        showSuccess("Registration successfull!!")
        this.props.history.push("/"); 
      })
      .catch((err) => {
        handleError(err);
        this.setState({
          isSubmitting: false,
        });
      });
  };
  render() {
    return (
      <div>
        <section className="signup">
          <div className="container">
            <div className="signup-content">
              <div className="signup-form">
                <h2 className="form-title">Sign up</h2>
                <form
                  onSubmit={this.handleSubmit}
                  className="register-form"
                  id="register-form"
                  noValidate
                >
                  <div className="form-group">
                    <label htmlFor="name">
                      <i className="zmdi zmdi-account material-icons-name"></i>
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Your Full Name"
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                  <p className="text-danger">
                    {" "}
                    <strong>{this.state.error.name}</strong>
                  </p>
                  <div className="form-group">
                    <label htmlFor="username">
                      <i className="zmdi zmdi-account material-icons-name"></i>
                    </label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      placeholder="Your Username"
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                  <p className="text-danger">
                    {" "}
                    <strong>{this.state.error.username}</strong>
                  </p>

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
                      required
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
                      required
                    />
                  </div>
                  <p className="text-danger">
                    {" "}
                    <strong>{this.state.error.password}</strong>
                  </p>
                  <div className="form-group">
                    <label htmlFor="phoneNumber">
                      <i className="zmdi zmdi-phone"></i>
                    </label>
                    <input
                      type="number"
                      name="phoneNumber"
                      id="phoneNumber"
                      placeholder="Your number"
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                  <p className="text-danger">
                    {" "}
                    <strong>{this.state.error.phoneNumber}</strong>
                  </p>
                  <div className="form-group form-button">
                    <button
                      disabled={!this.state.isValidForm}
                      type="submit"
                      name="signup"
                      id="signup"
                      className="form-submit"
                    >
                      {this.state.isSubmitting ? "Submitting..." : "Register"}
                    </button>
                  </div>
                </form>
              </div>
              <div className="signup-image">
                <figure>
                  <img src="images/signup-image.jpg" alt="" />
                </figure>
                <Link to="/" className="signup-image-link">
                  I am already member
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
