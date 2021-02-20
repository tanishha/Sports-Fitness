import React, { Component } from "react";
import {Link} from 'react-router-dom'
import { handleError } from "../../util/notification";
import { GET } from "./../../util/httpClient";
import './../userComponent/user.component.css'
export default class FitnessMembership extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      contact: "",
      requirements: "",
      isSubmitting: false,
      details:{}
    };
  }
  componentDidMount(){
    this.venueId = this.props.match.params["id"];
GET( `/booking/fitness/${this.venueId}/membership`,true)
.then((response)=>{
  this.setState({
    details:response.data
  })
})
.catch((err)=>{
  handleError(err);
})
  }
  render() {
    console.log('props',this.props.location.state)

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
              <h2 >Membership</h2>

              <h4 className="form-title">Starting price : {this.state.details.membership_price} </h4>

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
                      required
                    />
                  </div>

                  <div className="form-group form-button">
                    <button
                      type="submit"
                      name="signup"
                      id="signup"
                      className="form-submit"
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
