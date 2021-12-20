import React, { useState } from 'react'
import '../Styling/Category.css'
import Navbar from './Navbar';
import Checkbox from '@mui/material/Checkbox';
import svg from '../Data/Nature.svg';
import Grow from '@mui/material/Grow';

export default function Category() {

  const [arr, setArr] = useState([]);
  const [checked, setChecked] = useState(false);

  const toggleShow = (id) => {
    arr.includes(id) ? setArr(arr.filter((item) => item !== id)) : setArr([...arr, id]);
    console.log(arr);
  }

  const handleChange = (event) =>{
    setChecked(event.target.checked);
  }

  return (
    <main>
      <Navbar title={'just choose'}/>
      <div className='categoryright__div'>
        <div className='checkbox' >
          <Checkbox onChange={() => toggleShow(1)} />
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
        {arr.includes(1) ? 
        <Grow in={arr.includes(1)} {...(arr.includes(1) ? { timeout: 1000 } : {})}>
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
          <Checkbox onChange={() => toggleShow(2)} />
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
      <div>
        {arr.includes(2) ? 
        <Grow in={arr.includes(2)} {...(arr.includes(2) ? { timeout: 1000 } : {})}>
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

      <div className='categoryright__div'>
        <div className='checkbox' >
          <Checkbox onChange={() => toggleShow(3)} />
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
        {arr.includes(3) ? 
        <Grow in={arr.includes(3)} {...(arr.includes(3) ? { timeout: 1000 } : {})}>
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
          <Checkbox onChange={() => toggleShow(4)} />
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
      <div>
        {arr.includes(4) ? 
        <Grow in={arr.includes(4)} {...(arr.includes(4) ? { timeout: 1000 } : {})}>
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

    </main>
  )
}
