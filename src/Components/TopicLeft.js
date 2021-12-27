import React, { useState } from 'react'
import Checkbox from '@mui/material/Checkbox';
import Grow from '@mui/material/Grow';
import SubTopic from './SubTopic';
import '../Styling/Category.css'


export default function TopicLeft({ title, description, svg, subTopic1, subTopic2, subTopic3, subTopic4 }) {

  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  }

  return (
    <div>
      <div className='categoryleft__div'>
        <div className='checkbox' >
          <Checkbox onChange={handleChange} />
        </div>
        <div className='category__info'>
          <div>
            <h3 style={{ margin: '10px 0' }}>{title}</h3>
            <p style={{ fontSize: '80%' }}>{description}</p>
          </div>
          <div className='divider' />
          <img className='category__svg' src={svg} alt={''} />
        </div>
      </div>
      <div>
        {checked ?
          <Grow in={checked} {...(checked ? { timeout: 1000 } : {})}>
            <div>
              <div className='subcategory__div'>
                <SubTopic info={subTopic1} />
                <SubTopic info={subTopic2} />
              </div>
              <div className='subcategory__div'>
                <SubTopic info={subTopic3} />
                <SubTopic info={subTopic4} />
              </div>
            </div>
          </Grow>
          :
          null}
      </div>
    </div>
  )
}
