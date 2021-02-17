// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import {Route} from 'react-router-dom';
import Sports from './container/Sports';
import Fitness from './container/Fitness';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navitems from './hoc/Navigations/Navigationitems';
import SingleVenue_sports from './container/SingleSports';
import SingleVenue_fitness from './container/SingleFitness';

import Booking from './container/Booking';
import Membership from './component/Membership/Membership';


function App() {
  return (
    <div >
         <Navitems/>
         <Route path="/api/sports" exact component={Sports}/>
         <Route path="/api/sports/:id" exact component={SingleVenue_sports}/>
         <Route path="/api/sports/:id/booking"exact component={Booking}/>
         <Route path="/api/sports/:id/membership"exact component={Membership}/>
         <Route path="/api/fitness" exact component={Fitness}/>
         <Route path="/api/fitness/:id" exact component={SingleVenue_fitness}/>
         <Route path="/api/fitness/:id/membership"exact component={Membership}/>

    </div>
  );
}

export default App;
