import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import '../Styling/Pictures.css';
import database from '../firebase';
import data from '../Data/data';



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


  const [index, setIndex] = useState(0);
  const [cont, setCont] = useState(false)

  const more = () => {
    setCont(!cont);
    setIndex(index + 7)
  }

  return (
    <div className='pictures__div'>
      {cont ?
        <>
          {data.slice(index, index + 7).map(pic => (
            <TinderCard className='swipe' key={pic.id} preventSwipe={['up', 'down']}>
              <div className='card' style={{ backgroundImage: `url(${pic.img})` }} />
            </TinderCard>
          ))}
        </>
        :
        <div className='card__stop' style={{ backgroundImage: `url('http://drive.google.com/uc?export=view&id=1mo3f5ileysgpjHfdsmAuqNpqQgeWBNIm')` }} >
          <h1 className='card__stop__h1'>Continue?</h1>
          <div className='card__buttons'>
            <button className='card__button' onClick={more}>yes</button>
            <button className='card__button' onClick={more}>no</button>
          </div>
        </div>
      }

      {data.slice(index, 7).map(pic => (
        <TinderCard className='swipe' key={pic.id} preventSwipe={['up', 'down']}>
          <div className='card' style={{ backgroundImage: `url(${pic.img})` }} />
        </TinderCard>
      ))}

      {/* {picture.map(pic => (
        <TinderCard className='swipe' key='key' preventSwipe={['up', 'down']}>
          <div className='card' style={{ backgroundImage: `url(${pic.url})` }} />
        </TinderCard>
      ))} */}

    </div >
  )
}
