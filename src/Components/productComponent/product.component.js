import React, { Component } from 'react'
import './product.component.css'
import {Link} from 'react-router-dom'

export default class ProductComponent extends Component {
    constructor(){
        super()
        this.state={
            data:[{
                id:1,
                name:"Ball",
                price:300,
                category:"cricket",
                decription:"This is a ball",
                


            },{
                id:2,
                name:"Mat",
                price:300,
                category:"yoga",
                decription:"This is a mat",  
            }]
        }
    }
    render() {
        return (
            <div>
           <Link to= '/cart'> <button style={{fontSize:"24px"}}>Button <i class="fa fa-shopping-cart"></i></button></Link>
 {this.state.data.map((item, i) => (
          <div className="flip-card" key={i}>
            <div className="flip-card-inner">
              <div className="flip-card-front my-auto" style={{backgroundImage:"url(/images/membership.jpg)" }}>
              <image src="images/signin-image.jpg" alt=""/>
                {/* <h2>{item.name}</h2> */}
              </div>
              <div className="flip-card-back">
              <h1>{item.name}</h1>
              <br />
                {/* <h6>{item.name}</h6> */}
                <div style={{ borderTop: "2px solid #fff ", marginLeft: 20, marginRight: 20 }}></div>
                <br />
                                <h4>Rs. {item.price}</h4>
                {/* <h6>{item.price}</h6> */}
                <br />
                <Link to={{
         pathname: `/products/${this.state.id}`
       }}>
                  <button className="btn btn-secondary">Show more</button>
                </Link>
                <br />
                <br />
                <p>
                  {/* <Unsave
                    title="Are you sure?"
                    submitCallback={() => this.remove(this.props, item._id, i)}
                  ></Unsave> */}
                </p>
              </div>
            </div>
          </div>
        ))   }         </div>
        )
    }
}
