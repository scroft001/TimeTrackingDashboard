import React from 'react'
import './Tracker.scss'


const Tracker = (props) => {
  let idDef = () =>{
    if(props.title === "Self Care"){
      return "self-care"
    }
    else{
      return props.title
    }
  }
  return (
    <div className='app__tracker' id={idDef()}>
      <div className='app__tracker-stats'>
        <div className='title'>
          <h2>{props.title}</h2>
          <p>...</p>
        </div>
        <div className='stats'>
          <p className='hours'>{props.time}hrs</p>
          <p className='past-hours'>Last Week - {props.pastHours}hrs</p>
        </div>
      </div>
    </div>
  )
}

export default Tracker