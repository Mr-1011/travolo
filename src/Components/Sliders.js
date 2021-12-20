import React from 'react';
import Navbar from './Navbar';
import Slider from '@mui/material/Slider';
import '../Styling/Sliders.css'
import svg from '../Data/Nature.svg'

export default function Sliders() {
  const marks = [
    {
      value: 0,
      label: 'hate it',
    },
    {
      value: 100,
      label: 'love ir',
    }
  ]

  return (
    <main>
      <Navbar title={'just slide'} />
      <div className='slider__component'>
        <div className='slider__info'>
          <h2>Nature</h2>
          <img src={svg} />
        </div>
        <div className='slider__div'>
          <Slider
            sx={{
              width: 250,
              color: 'white',
            }}
          />
        </div>
        <div className='slider__p'>
          <p>hate it</p>
          <p>love it</p>
        </div>
      </div>

      <div className='slider__component'>
        <div className='slider__info'>
          <h2>Nature</h2>
          <img src={svg} />
        </div>
        <div className='slider__div'>
          <Slider
            sx={{
              width: 250,
              color: 'white',
            }}
          />
        </div>
        <div className='slider__p'>
          <p>hate it</p>
          <p>love it</p>
        </div>
      </div>

      <div className='slider__component'>
        <div className='slider__info'>
          <h2>Nature</h2>
          <img src={svg} />
        </div>
        <div className='slider__div'>
          <Slider
            sx={{
              width: 250,
              color: 'white',
            }}
          />
        </div>
        <div className='slider__p'>
          <p>hate it</p>
          <p>love it</p>
        </div>
      </div>

      <div className='slider__component'>
        <div className='slider__info'>
          <h2>Nature</h2>
          <img src={svg} />
        </div>
        <div className='slider__div'>
          <Slider
            sx={{
              width: 250,
              color: 'white',
            }}
          />
        </div>
        <div className='slider__p'>
          <p>hate it</p>
          <p>love it</p>
        </div>
      </div>
    </main>
  )
}
