import React ,{Component} from 'react';
import Venues from '../component/Venues_fitness/Venue_ind';
import Search from '../component/Search/Search';
class Venue extends Component{
    state={
        venue:{
              id:10,
              name:"Tahachal Futsal" ,
              image:"hello",
              location:"Kalimati"
        }
    }
    render()
    {

        return(
            <div>
            <Search/>
       <Venues id={this.state.venue.id} 
       name={this.state.venue.name} 
       image={this.state.venue.image} 
       location={this.state.venue.location}/>         
  
            </div>

        )
    }
}
export default Venue;