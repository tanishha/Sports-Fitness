import React ,{Component} from 'react';
import SingleVenue_info from '../component/SingleVenues_sports/SingleVenues' ;
class SingleVenue extends Component{
    state={
        venue:{
              id:10,
              name:"Tahachal Futsal" ,
              image:"hello",
              location:"Kalimati",
              description:"this is a playground.jhfjdhfdjfhdf",
        }
    }
    render()
    {

        return(
            <div>
           <SingleVenue_info description={this.state.venue.description} />
            </div>

        )
    }
}
export default SingleVenue;