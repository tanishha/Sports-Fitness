import React from 'react';
import { Container } from 'react-bootstrap';
import classes from './Membership.module.css';
const Membership =()=>(

    <div>
        

    <h2 style={{textAlign:'center',paddingTop:'5px',color:'#33ff33'}}>Membership form</h2>
    <p className={classes.Text}><strong>Starting membership price :Rs.1000</strong></p>
    <p className={classes.Text}>Price may vary according to your requirements.Please submit the form.You will recieve an email for further details. </p>
    <Container className={classes.Form}>
  <form >
      <label>Name: </label>
      <input type="text" name="membership[name]" placeholder=" Name" required/><br/>
      <label className={classes.label}>Email:</label>
      <input type="email" name="membership[email]" placeholder=" Email" required/><br/>
      <label className={classes.label}>Contact: </label>
      <input type="number" name="membership[contact]" placeholder="Contact" required/><br/>
      <label className={classes.label}>Gender: </label><br/>
           <input type="radio" id="male" name="membership[gender]" value="male"/>
            <label for="male">Male</label><br/>
            <input type="radio" id="female" name="membership[gender]" value="female"/>
            <label for="female">Female</label><br/>
            <input type="radio" id="other" name="membership[gender]" value="other"/>
            <label for="other">Other</label><br/>
        <label className={classes.label}>Requirements: </label>
      <input type="text" name="membership[requirements]" placeholder="Enter your requirements" style={{height: '90px', width: '60%'}}/><br/>
      <button >Submit</button>
      </form>
      </Container>
    
    </div>

)

export default Membership;