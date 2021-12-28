import React from 'react';
import Slider from '@mui/material/Slider';
import '../Styling/Sliders.css';

export default function SliderComp({ title, svg }) {

  return (
    <div className='slider__component'>
      <div className='slider__info'>
        <h1>{title}</h1>
        <img src={svg} className='slider__svg ' alt='' />
      </div>
      <div className='slider__div'>
        <Slider
          value={50}
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
    </div >
  )
}
