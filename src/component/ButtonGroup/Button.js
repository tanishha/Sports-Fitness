import React,{useState} from 'react';
import {ButtonGroup,ToggleButton} from 'react-bootstrap';
import classes from './Button.module.css';

const Slot =(props)=>{
    const [radioValue, setRadioValue] = useState('1');
    const radios = [
        { name: 'Active', value: '1' },
        { name: 'Radio', value: '2' },
        { name: 'Radio', value: '3' },
      ];
    
    return(
        <ButtonGroup aria-label="Basic example" >
            {
                Array.from(Array(3), (e, i) => {
                 return  (
                    <ToggleButton
                    key="2"
                    type="radio"
                    name="radio"
                    value="1"
                    variant="success"
                    onChange={(e) => setRadioValue(e.currentTarget.value)}
                    style={{marginRight:'3px'}}
                    >
                    9:00-10:00
                  </ToggleButton>
                 )
            }
        ) }
</ButtonGroup>
    )
}
export default Slot;