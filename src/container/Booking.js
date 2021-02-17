import React,{Component} from 'react';
import {Row,Col} from 'react-bootstrap';
import Datepicker from '../component/Datepicker/Datepicker';
import Form from '../component/BookingForm/Form';
class Booking extends Component{
    state={
        booking:{
            start_time:"9:30",
            end_time:"5:30",
            difference:"60"
        }
        
    }
    render()
    {
        return(
            <Row>
                <Col style={{paddingTop:'25px',paddingLeft:'30px'}}>
               <Datepicker/>
                </Col>
                <Col style={{paddingTop:'25px',paddingLeft:'30px'}}>
                    <h3>Choose a slot</h3>
                <Form start_time={this.state.booking.start_time} end_time={this.state.booking.end_time} difference={this.state.booking.difference}/>
                </Col>
            </Row>
        )
    }

   
}

export default Booking;