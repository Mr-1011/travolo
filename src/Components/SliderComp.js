import React, { useState } from 'react';
import Slider from '@mui/material/Slider';
import '../Styling/Sliders.css';

export default function SliderComp({ title, svg }) {

  const [value, setValue] = useState(50);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='slider__component'>
      <div className='slider__info'>
        <h1 className='slider__title'>{title}</h1>
        <img src={svg} className='slider__svg ' alt='' />
      </div>
      <div className='slider__div'>
        <Slider
          value={value}
          onChange={handleChange}
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
