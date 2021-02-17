import React, { Component } from "react";
import "./navbar.component.css";
import { Link, withRouter } from "react-router-dom";

const logout = (history) => {
    let keysToRemove = ["password", "token"];
  
    var item=localStorage.getItem('remember_me')
    item? keysToRemove.forEach(k =>
      localStorage.removeItem(k))
     : localStorage.clear();
  
    history.push('/')
  };
class NavbarComponent extends Component {
  render() {
    let nav = localStorage.getItem('token')? (
      <>
        {" "}
        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4 active">
          <Link
            className="nav-link dropdown-toggle"
            data-toggle="dropdown"
            to="/home"
            role="button"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Home
          </Link>
        </li>
        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
          <Link className="nav-link" to="/booking">
            Boooking
          </Link>
        </li>
        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
          <Link className="nav-link" to="/product">
            Product
          </Link>
        </li>
        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
          <Link
            className="nav-link"
            onClick={() => logout(this.props.history)}
            to="#"
          >
            Logout
          </Link>
        </li>
      </>
    ) : (
      <>
        {" "}
        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4 active">
          <Link
            className="nav-link dropdown-toggle"
            data-toggle="dropdown"
            to="/home"
            role="button"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Home
          </Link>
        </li>
        
        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
          <Link className="nav-link" to="/">
            <i className="fas fa-user"></i>
          </Link>
        </li>
      </>
    );
    return (
      <div className="hero-anime">
        <div
          className="navigation-wrap bg-light start-header start-style"
          id="navigation-wrap"
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <nav className="navbar navbar-expand-md navbar-light">
                  <Link className="navbar-brand" to="#" target="_blank">
                    <p className="title">SPORTS&FITNESS</p>
                  </Link>

                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>

                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav ml-auto py-4 py-md-0">{nav}</ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(NavbarComponent);
