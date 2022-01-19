import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import '../Styling/Pictures.css';
import pictureData from '../Data/pictureData';
import { Link } from "react-router-dom";

export default function Pictures() {

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
                    <button className='button__white'>next</button>
                  </Link>
                </div>
              </div>

              {pictureData.slice(index, index + 10).map(pic => (
                <TinderCard className='swipe' key={pic.id} preventSwipe={['up', 'down']}>
                  <div className='card' style={{ backgroundImage: `url(${pic.img})` }} />
                </TinderCard>
              ))}
            </>
            :
            <>
              <div className='card__stop'>
                <h1 className='card__stop__h1'>Do you want to see more pictures?</h1>
                <div className='card__buttons'>
                  <button className='button__white' onClick={evenmore}>yes</button>
                  <Link to='/category' className='next__link'>
                    <button className='button__white'>no</button>
                  </Link>
                </div>
              </div>

              {pictureData.slice(index, index + 10).map(pic => (
                <TinderCard className='swipe' key={pic.id} preventSwipe={['up', 'down']}>
                  <div className='card' style={{ backgroundImage: `url(${pic.img})` }} />
                </TinderCard>
              ))}
            </>
          }
        </>
        :
        <div className='card__stop'>
          <h1 className='card__stop__h1'>Do you want to see more pictures?</h1>
          <div className='card__buttons'>
            <button className='button__white' onClick={more}>yes</button>
            <Link to='/category' className='next__link'>
              <button className='button__white'>no</button>
            </Link>
          </div>
        </div>
      }

      {pictureData.slice(index, 10).map(pic => (
        <TinderCard className='swipe' key={pic.id} preventSwipe={['up', 'down']}>
          <div className='card' style={{ backgroundImage: `url(${pic.img})` }} />
        </TinderCard>
      ))}

    </div >
  )
}