import React from 'react'
import jeremy from '../../images/image-jeremy.png'
import './PersonCard.scss'

const PersonCard = () => {
  return (
    <section className='app__personCard'>
        <div className='app__personCard-profile'>
            <img className='app__personCard-profile-img' src={jeremy} alt='' />
            <p>Report for</p>
            <h1>Jeremy Robson</h1>
        </div>
        <div className='app__personCard-timeframe'>
            <p className='time'>Daily</p>
            <p className='time active'>Weekly</p>
            <p className='time'>Monthly</p>
        </div>
    </section>
  )
}

export default PersonCard