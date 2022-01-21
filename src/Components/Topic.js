import React, { useState } from 'react'
import Checkbox from '@mui/material/Checkbox';
import Grow from '@mui/material/Grow';
import SubTopic from './SubTopic';
import '../Styling/Category.css'


export default function Topic({ title, description, svg, subTopic1, subTopic2, subTopic3, subTopic4 }) {

  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  }

  return (
    <div>
      <div className='categoryright__div'>
        <div className='checkbox' >
          <Checkbox onChange={handleChange} sx={{
            color: 'white',
            '&.Mui-checked': { color: 'white' }
          }} />
        </div>
        <div className='category__info'>
          <img className='category__svg' src={svg} alt={''} />
          <div className='divider' />
          <div className='category__text'>
            <h3 style={{ margin: '10px 0 5px 0' }}>{title}</h3>
            <p style={{ fontSize: '80%' }}>{description}</p>
          </div>
        </div>
      </div>
      <div>
        {checked && subTopic1 ?
          <Grow in={checked} {...(checked ? { timeout: 1000 } : {})}>
            <div>
              <div className='subcategory__div'>
                <SubTopic info={subTopic1} />
                <SubTopic info={subTopic2} />
              </div>
              {subTopic3 ?
                <div className='subcategory__div'>
                  <SubTopic info={subTopic3} />
                  <SubTopic info={subTopic4} />
                </div>
                :
                null
              }
            </div>
          </Grow>
          :
          null}
      </div>
    </div>
  )
}
