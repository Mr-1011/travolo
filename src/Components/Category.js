import React, { useState } from 'react'
import '../Styling/Category.css'
import Navbar from './Navbar';
import Checkbox from '@mui/material/Checkbox';
import svg from '../Data/Nature.svg';
import Grow from '@mui/material/Grow';

export default function Category() {

  const [arr, setArr] = useState([]);
  const [checked, setChecked] = useState(false);

  const handleChange = (event) =>{
    setChecked(event.target.checked);
  }

  return (
    <main>
      <Navbar title={'just choose'}/>
      <div className='categoryright__div'>
        <div className='checkbox' >
          <Checkbox onChange={handleChange} />
        </div>
        <div className='category__info'>
          <img src={svg} />
          <div className='divider' />
          <div>
            <h3 style={{ margin: '10px 0' }}>Nature Wildlife</h3>
            <p style={{ fontSize: '80%' }}>You like to go out into the wild see and feel the Fresh breath of nature.
              Good or bad weather you dont care as Long as you are in the nature. And some more desciption.</p>
          </div>
        </div>
      </div>

      <div>
        {checked ? 
        <Grow in={checked} {...(checked ? { timeout: 1000 } : {})}>
          <div>
            <div className='subcategory__div'>
              <div className='subcategory__info'>
                <Checkbox />
                <p>Nature</p>
              </div>
              <div className='subcategory__info'>
                <Checkbox />
                <p>Nature</p>
              </div>
            </div>
          </div>
        </Grow>
        :
         null}
      </div>

      <div className='categoryleft__div'>
        <div className='checkbox' >
          <Checkbox onChange={handleChange} />
        </div>
        <div className='category__info'>
          <div>
            <h3 style={{ margin: '10px 0' }}>Nature Wildlife</h3>
            <p style={{ fontSize: '80%' }}>You like to go out into the wild see and feel the Fresh breath of nature.
              Good or bad weather you dont care as Long as you are in the nature. And some more desciption.</p>
          </div>
          <div className='divider' />
          <img src={svg} />
        </div>
      </div>

      <div className='categoryright__div'>
        <div className='checkbox' >
          <Checkbox onChange={handleChange} />
        </div>
        <div className='category__info'>
          <img src={svg} />
          <div className='divider' />
          <div>
            <h3 style={{ margin: '10px 0' }}>Nature Wildlife</h3>
            <p style={{ fontSize: '80%' }}>You like to go out into the wild see and feel the Fresh breath of nature.
              Good or bad weather you dont care as Long as you are in the nature. And some more desciption.</p>
          </div>
        </div>
      </div>

      <div className='categoryleft__div'>
        <div className='checkbox' >
          <Checkbox onChange={handleChange} />
        </div>
        <div className='category__info'>
          <div>
            <h3 style={{ margin: '10px 0' }}>Nature Wildlife</h3>
            <p style={{ fontSize: '80%' }}>You like to go out into the wild see and feel the Fresh breath of nature.
              Good or bad weather you dont care as Long as you are in the nature. And some more desciption.</p>
          </div>
          <div className='divider' />
          <img src={svg} />
        </div>
      </div>

    </main>
  )
}
