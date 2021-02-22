import React, { Component } from "react";
import { Link } from "react-router-dom";
import { showSuccess, handleError } from "../../util/notification";
import { GET, POST } from "./../../util/httpClient";

import "./../userComponent/user.component.css";
export default class FitnessMembership extends Component {
  constructor() {
    super();
    this.state = {
      data: {
        name: "",
        email: "",
        contact: "",
        requirements: "",
      },

      isSubmitting: false,
      details: {},
    };
  }
  componentDidMount() {
    this.venueId = this.props.match.params["id"];
    GET(`/booking/fitness/${this.venueId}/membership`, true)
      .then((response) => {
        this.setState({
          details: response.data,
        });
      })
      .catch((err) => {
        handleError(err);
      });
  }
  handleChange=(e)=>{
    const{name,value}=e.target
    this.setState((preState)=>({
data:{
  ...preState.data,
  [name]:value
}
    }))
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ isSubmitting: true });
    console.log("data is>>", this.state.data);
    POST(`/booking/venue/${this.venueId}/membership`, this.state.data, {})
      .then((response) => {
        showSuccess("Submitted!!");
        this.props.history.push("/fitness");
        console.log('hi',response)
        this.setState({
          isSubmitting: false,
        });      })
      .catch((err) => {
        handleError(err);
        this.setState({
          isSubmitting: false,
        });
      });
      this.props.history.push("/fitness");

  };

  render() {

    return (
      <div>
        <div className="container">
          <div className="signin-content">
            <div className="signin-image">
              <figure>
                <img src="images/membership.jpg" alt="" />
              </figure>
              <Link to="/fitness" className="signup-image-link">
                {`<<`} Back to venues
              </Link>
            </div>

            <div className="signin-form">
              <h2>Membership</h2>

              <h4 className="form-title">
                Starting price : {this.state.details.membership_price}{" "}
              </h4>

              <form
                className="register-form"
                id="login-form"
                onSubmit={this.handleSubmit}
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
                    placeholder="Your Name"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">
                    <i className="zmdi zmdi-account material-icons-name"></i>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    onChange={this.handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact">
                    <i className="zmdi zmdi-lock"></i>
                  </label>
                  <input
                    type="number"
                    name="contact"
                    id="contact"
                    placeholder="Your Number"
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="requirements">
                    <i className="zmdi zmdi-lock"></i>
                  </label>
                  <input
                    type="text"
                    name="requirements"
                    id="requirements"
                    placeholder="Your Requirements"
                    onChange={this.handleChange}
                    required
                  />
                </div>

                <div className="form-group form-button">
                  <button
                    type="submit"
                    name="signup"
                    id="signup"
                    className="form-submit"
                    on
                  >
                    {this.state.isSubmitting ? "Subitting in..." : "Submit"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
