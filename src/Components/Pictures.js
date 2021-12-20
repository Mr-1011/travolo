import React from 'react'
import TinderCard from 'react-tinder-card'
import test from '../Data/test.png'
import '../Styling/Pictures.css'


export default function Pictures() {
  return (
    <div className='pictures__div'>
      <TinderCard className='swipe' key='key' preventSwipe={['up', 'down']}>
        <div className='card' style={{ backgroundImage: `url(${test})` }}/>
      </TinderCard>
      <TinderCard className='swipe' key='key' preventSwipe={['up', 'down']}>
        <div className='card' style={{ backgroundImage: `url(${test})` }}/>
      </TinderCard>
      <TinderCard className='swipe' key='key' preventSwipe={['up', 'down']}>
        <div className='card' style={{ backgroundImage: `url(${test})` }}/>
      </TinderCard>
    </div>
  )
}
