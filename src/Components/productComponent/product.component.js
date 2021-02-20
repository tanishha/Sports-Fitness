import React, { Component } from 'react'

export default class ProductComponent extends Component {
    constructor(){
        super()
        this.state={
            data:[{
                name:"Ball",
                price:300,
                category:"cricket",
                decription:"This is a ball",

            },{
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
 {this.state.data.map((item, i) => (
          <div className="flip-card" key={i}>
            <div className="flip-card-inner">
              <div className="flip-card-front my-auto">
                <h2>{item.name}</h2>
              </div>
              <div className="flip-card-back">
                <h1>Price:</h1>
                <h1>{item.price}</h1>
                {/* <a
                  href={item.previewLink}
                  target="_blanl"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-secondary">Visit Site</button>
                </a> */}
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
