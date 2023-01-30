import React from 'react'
import { PersonCard, Tracker } from '..'
import './Dashboard.scss'

const Dashboard = () => {
  return (
    <div className='app__dashboard'>
      <PersonCard />
      <div className='app__dashboard-tasks'>
        <Tracker title="Work" time="32" pastHours="36" />
        <Tracker title="Play" time="10" pastHours="8" />
        <Tracker title="Study" time="4" pastHours="7" />
        <Tracker title="Exercise" time="4" pastHours="5" />
        <Tracker title="Social" time="5" pastHours="10" />
        <Tracker title="Self Care" time="2" pastHours="2" />
      </div>
    </div>
  )
}

export default Dashboard