import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import '../Styling/Pictures.css';
import pictureData from '../Data/pictureData';
import { Link } from "react-router-dom";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import { useTranslation } from 'react-i18next';

export default function Pictures() {
  const { t } = useTranslation();

  const [index, setIndex] = useState(0);
  const [cont, setCont] = useState(false);
  const [end, setEnd] = useState(false);

  const more = () => {
    setCont(!cont);
    setIndex(index + 10)
  }

  const evenmore = () => {
    setEnd(!end);
    setIndex(index + 15)
  }

  const [showLike, setShowLike] = useState(false);
  const [showDislike, setShowDislike] = useState(false);

  const onSwipe = (direction) => {
    if (direction === 'right') {
      setShowLike(true)
      setTimeout(() => {
        setShowLike(false)
      }, 1000);
    }
    else {
      setShowDislike(true)
      setTimeout(() => {
        setShowDislike(false)
      }, 1000);
    }
  }

  return (
    <div className='pictures__div'>
      {showLike ?
        <div className='liked__div'>
          <h1>Liked</h1>
          <ThumbUpIcon fontSize='large' />
        </div>
        :
        null
      }

      {showDislike ?
        <div className='disliked__div'>
          <h1>Disliked</h1>
          <ThumbDownAltIcon fontSize='large' />
        </div>
        :
        null
      }


      {cont ?
        <>
          {end ?
            <>
              <div className='card__stop'>
                <h1 className='card__stop__h1'>{t('swipeEnd')}</h1>
                <div className='card__buttons'>
                  <Link to='/category' className='next__link'>
                    <button className='button__white'>{t('next')}</button>
                  </Link>
                </div>
              </div>

              {pictureData.slice(index, index + 15).map(pic => (
                <TinderCard className='swipe' key={pic.id} preventSwipe={['up', 'down']} onSwipe={onSwipe}>
                  <div className='card' style={{ backgroundImage: `url(${pic.img})` }} />
                </TinderCard>
              ))}
            </>
            :
            <>
              <div className='card__stop'>
                <h1 className='card__stop__h1'>{t('swipeMore')}</h1>
                <div className='card__buttons'>
                  <button className='button__white' onClick={evenmore}>{t('yes')}</button>
                  <Link to='/category' className='next__link'>
                    <button className='button__white'>{t('no')}</button>
                  </Link>
                </div>
              </div>

              {pictureData.slice(index, index + 15).map(pic => (
                <TinderCard className='swipe' key={pic.id} preventSwipe={['up', 'down']} onSwipe={onSwipe}>
                  <div className='card' style={{ backgroundImage: `url(${pic.img})` }} />
                </TinderCard>
              ))}
            </>
          }
        </>
        :
        <div className='card__stop'>
          <h1 className='card__stop__h1'>{t('swipeMore')}</h1>
          <div className='card__buttons'>
            <button className='button__white' onClick={more}>{t('yes')}</button>
            <Link to='/category' className='next__link'>
              <button className='button__white'>{t('no')}</button>
            </Link>
          </div>
        </div>
      }

      {pictureData.slice(index, 10).map(pic => (
        <TinderCard className='swipe' key={pic.id} preventSwipe={['up', 'down']} onSwipe={onSwipe}>
          <div className='card' style={{ backgroundImage: `url(${pic.img})` }} />
        </TinderCard>
      ))}

    </div >
  )
}