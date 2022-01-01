import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import '../Styling/Pictures.css';
import database from '../firebase';
import data from '../Data/data';
import { Link } from "react-router-dom";

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
  const [cont, setCont] = useState(false);
  const [end, setEnd] = useState(false);

  const more = () => {
    setCont(!cont);
    setIndex(index + 10)
  }

  const evenmore = () => {
    setEnd(!end);
    setIndex(index + 10)
  }

  return (
    <div className='pictures__div'>
      {cont ?
        <>
          {end ?
            <>
              <div className='card__stop'>
                <h1 className='card__stop__h1'>Thats all for now</h1>
                <div className='card__buttons'>
                  <Link to='/category' className='next__link'>
                    <button className='button__white'>NEXT</button>
                  </Link>
                </div>
              </div>

              {data.slice(index, index + 10).map(pic => (
                <TinderCard className='swipe' key={pic.id} preventSwipe={['up', 'down']}>
                  <div className='card' style={{ backgroundImage: `url(${pic.img})` }} />
                </TinderCard>
              ))}
            </>
            :
            <>
              <div className='card__stop'>
                <h1 className='card__stop__h1'>Continue?</h1>
                <div className='card__buttons'>
                  <button className='button__white' onClick={evenmore}>YES</button>
                  <Link to='/category' className='next__link'>
                    <button className='button__white'>NO</button>
                  </Link>
                </div>
              </div>

              {data.slice(index, index + 10).map(pic => (
                <TinderCard className='swipe' key={pic.id} preventSwipe={['up', 'down']}>
                  <div className='card' style={{ backgroundImage: `url(${pic.img})` }} />
                </TinderCard>
              ))}
            </>
          }
        </>
        :
        <div className='card__stop'>
          <h1 className='card__stop__h1'>Continue?</h1>
          <div className='card__buttons'>
            <button className='button__white' onClick={more}>YES</button>
            <Link to='/category' className='next__link'>
              <button className='button__white'>NO</button>
            </Link>
          </div>
        </div>
      }

      {data.slice(index, 10).map(pic => (
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
