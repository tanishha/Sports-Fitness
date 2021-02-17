import React, { Component } from "react";
import "./user.component.css";
import {Link} from 'react-router-dom'
import {
  showSuccess,

  handleError
} from './../../util/notification'
import {POST} from './../../util/httpClient'

const defaultForm = {
  username: "",
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
  componentDidMount() {
    if (localStorage.length !== 0) {
      this.setState(
        (preState) => ({
          data: {
            username: localStorage.username,
          },
          remember_me:true
        }),
      )
    }
    console.log('username',this.state.data.username)
}
  handleChange = (e) => {
    let { type, name, value, checked } = e.target;
    if (type === "checkbox") {
      return this.setState({
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
    let errMsg = this.state.data[fieldname] ? "" : `${fieldname} is required`;
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
    POST("/auth/login", this.state.data, {})
    .then((response) => {
      showSuccess("Welcome " + response.data.user.username + '!!');
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("username", response.data.user.username);
      localStorage.setItem("password", response.data.user.password)
      localStorage.setItem("remember_me", this.state.remember_me);
      this.props.history.push("/home");
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
              <Link to="/register" className="signup-image-link">
            Create an account
              </Link>
            </div>

            <div className="signin-form">
              <h2 className="form-title">Sign in</h2>
              <form  className="register-form" id="login-form" onSubmit={this.handleSubmit} noValidate>
                <div className="form-group">
                  <label htmlFor="username">
                    <i className="zmdi zmdi-account material-icons-name"></i>
                  </label>
                  <input value={this.state.data.username}
                  // {localStorage.getItem('username')===null?"":localStorage.getItem('username')}
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Your Username"
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
                    id="remember_me"
                    className="agree-term"
                    checked={this.state.remember_me}
                    onChange={this.handleChange}

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
            
            </div>
          </div>
        </div>
      </section>
    );
  }
}
