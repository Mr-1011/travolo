import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card'
import test from '../Data/test.png'
import '../Styling/Pictures.css'
import database from '../firebase'


export default function Pictures() {

  const [picture, setPicture] = useState([{}]);

  useEffect(() => {
    const unsubscribe = database.collection('pictures').onSnapshot(snapshot => {
      setPicture(snapshot.docs.map(doc => doc.data()))
    })
    return () => {
      unsubscribe();
    }
  }, [])

  return (
    <div className='pictures__div'>
      <TinderCard className='swipe' key='key' preventSwipe={['up', 'down']}>
        <div className='card__shadow' style={{ backgroundImage: `url('http://drive.google.com/uc?export=view&id=1mo3f5ileysgpjHfdsmAuqNpqQgeWBNIm')` }} >
          <h1>Continue?</h1>
        </div>
      </TinderCard>

      {picture.map(pic => (
        <TinderCard className='swipe' key='key' preventSwipe={['up', 'down']}>
          <div className='card' style={{ backgroundImage: `url(${pic.url})` }} />
        </TinderCard>
      ))}
    </div>
  )
}
