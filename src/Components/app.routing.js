import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import NavbarComponent from "./navbarComponent/navbar.component";
import ProductComponent from "./productComponent/product.component";
import LoginComponent from "./userComponent/login.component";
import RegisterComponent from "./userComponent/register.component";
import SportsComponent from "./bookingComponent/sports.component";
import FitnessComponent from "./bookingComponent/fitness.component";
import FitnessMembership from "./bookingComponent/fitness_membership";
import HomeComponent from "./homeComponent/home.component";
import ForgetPasswordComponent from "./userComponent/forgetPassword.component";
import ResetPassword from "./userComponent/resetPassword.component";
import ProductDetailComponent from "./productComponent/productDetail.component";
import ProductCartComponent from "./productComponent/productCart.component";

const NotFound = () => {
  return <h1 className="display-1">404 Not found</h1>;
};
const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        localStorage.getItem("token") ? (
          <div>
            <NavbarComponent isLoggedIn={true}></NavbarComponent>
            <Component {...routeProps}></Component>
          </div>
        ) : (
          <Redirect to="/"></Redirect>
        )
      }
    ></Route>
  );
};
const PublicRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(routeProps) => (
        <div>
          <NavbarComponent
            isloggedIn={localStorage.getItem("token") ? true : false}
          ></NavbarComponent>
          <Component {...routeProps}> </Component>
        </div>
      )}
    ></Route>
  );
};
const AppRouting = (props) => {
  return (
    <>
      <Router>
        <Switch>
          <PublicRoute exact path="/" component={LoginComponent}></PublicRoute>
          <PublicRoute
            path="/register"
            component={RegisterComponent}
          ></PublicRoute>
          <PublicRoute
            path="/forgot"
            component={ForgetPasswordComponent}
          ></PublicRoute>
          <PublicRoute
            path="/reset_password/:id"
            component={ResetPassword}
          ></PublicRoute>
          <ProtectedRoute
            path="/product"
            component={ProductComponent}
          ></ProtectedRoute>
          <ProtectedRoute
            path="/sports"
            component={SportsComponent}
          ></ProtectedRoute>
           <ProtectedRoute
            path="/fitness"
            component={FitnessComponent}
          ></ProtectedRoute>
           <ProtectedRoute
            path="/cart"
            component={ProductCartComponent}
          ></ProtectedRoute>
         <ProtectedRoute
            path="/fitness_membership/:id"
            component={FitnessMembership}
          ></ProtectedRoute>
            <ProtectedRoute
            path="/products/:id"
            component={ProductDetailComponent}
          ></ProtectedRoute>
          <ProtectedRoute
            path="/home"
            component={HomeComponent}
          ></ProtectedRoute>
          <PublicRoute component={NotFound}></PublicRoute>
        </Switch>
      </Router>
    </>
  );
};

export default AppRouting;
