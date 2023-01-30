import React from 'react'
import './Tracker.scss'

const Tracker = (props) => {
  return (
    <div className='app__tracker'>
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