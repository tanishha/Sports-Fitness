import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import './../Components/bookingComponent/fitness.component.css'
import {Link} from 'react-router-dom'

export default class AlertDialog extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      setOpen: false,
      isDeleting: true,
    };
  }
  handleClickOpen = (e) => {
    this.setState({
      setOpen: true,
      open: true,
    });
  };

  handleClose = () => {
    this.setState({
      setOpen: false,
      open: false,
    });
  };
 
  render() {
  
    return (
      <>
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.handleClickOpen}
        >
          View more  <i className="fas fa-angle-double-right"></i>
        </button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            <h2> {this.props.name}</h2>
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
        
              <img src={this.props.image} className="justify-content-center image" alt="book" />
              {/* <h1>hi</h1>
              <img src={this.props.image} className="justify-content-center" alt="book" /> */}

              <br />
              <div class="row">
  <div class="column">
  <iframe src={this.props.link} height="100%"></iframe>
</div>
  <div class="column">
  {this.props.description}
  </div>
 
</div>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Close
            </Button>
            <Link to={{
         pathname: `/fitness_membership/${this.props.id}`
       }}>
              <button className="btn btn-dark">Membership</button>
            </Link>
            
          </DialogActions>
        </Dialog>
      </>
    );
  }
}
