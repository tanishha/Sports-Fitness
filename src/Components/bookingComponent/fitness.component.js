import React, { Component } from "react";
import {
  showSuccess,
  showWarnings,
  handleError,
} from "./../../util/notification";
import { GET } from "./../../util/httpClient";
import {Link} from 'react-router-dom'
import AlertDialog from "../../util/details";
import './fitness.component.css'

export default class FitnessComponent extends Component {
  constructor() {
    super();
    this.state = {
      // fitness:"",
      fitness: [],
    };
  }
  componentDidMount() {
    // console.log("fitness>>>");

    GET("/booking/fitness", true, {})
      .then((response) => {
        this.setState({
          fitness: response.data,
        });
        // this.state.fitness.forEach((fitness) =>
        //   console.log("fitness>>>", fitness)
        // );
        showSuccess("Fetched data");
      })

      .catch((error) => {
        handleError(error);
      });
  }

  render() {
let content=
this.state.fitness.map((items,i)=>(
  <div className="card" key={i}>
    <div className="row ">
      <div className="col-md-7 px-3">
        <div className="card-block px-6">
          <h4 className="card-title">{items.name} </h4>
          <p className="card-text">
{items.location}          </p>
          {/* <p className="card-text">Made for usage, commonly searched for. Fork, like and use it. Just move the carousel div above the col containing the text for left alignment of images</p> */}
          <br></br>
                  <AlertDialog name={items.name} id={items._id} description={items.description} link={items.link} image={items.image} latitude={items.lat} longitude={items.long} location={items.location} price={items.membership_price}></AlertDialog>
        </div>
      </div>
      <div className="col-md-5">
        <div id="CarouselTest" className="carousel slide" data-ride="carousel">
          {/* <ol className="carousel-indicators">
            <li data-target="#CarouselTest"  className="active"></li>
                     </ol> */}
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block" src={items.image} alt=""/>
            </div>
           
           
            {/* <a className="carousel-control-prev" href="#CarouselTest" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
            <a className="carousel-control-next" href="#CarouselTest" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a> */}
          </div>
        </div>
      </div>
    </div>
  </div>

//     <div className="ui main text container" key={i}>

// <div className="ui top attached  segment ">
// <div className="ui divided items">
//     <div className="item">
//          <div className=" image">
//            {/* <img src="<%=venues.image %>" alt="" className="ui centered medium image "  > */}
//          </div>
//          <div className="content">
//           <h1 className="ui content centered">{items.name}</h1>
//           <p><i className="fas fa-map-pin"></i>{items.location}</p>
//            <div className="extra">
//               <AlertDialog name={items.name} description={items.description} latitude={items.lat} longitude={items.long} location={items.location} price={items.membership_price}></AlertDialog>
//             </div>
//          </div>
//       </div>
//    </div>
// </div>
// </div>
))
    return (
      <div className="topcontainer">
          {content}
      </div>
    );
  }
}
