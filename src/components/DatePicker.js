import React from 'react'
import {LinkedCalendar} from 'rb-datepicker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-daterangepicker/daterangepicker.css';

function Datepicker(props){
  return(
      <div >
          <LinkedCalendar onDatesChange={props.onDatesChange} showDropdowns={false} />
      </div>
        
      )
  }
export default Datepicker;