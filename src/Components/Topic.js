import React, { useState } from 'react'
import Checkbox from '@mui/material/Checkbox';
import Grow from '@mui/material/Grow';
import SubTopic from './SubTopic';
import '../Styling/Category.css'


export default function Topic({ title, description, svg, subTopic1, subTopic2, subTopic3, subTopic4, subTopic5, subTopic6, subTopic7, subTopic8 }) {

  const [checked, setChecked] = useState(false);
  const [more, setMore] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);

  }

  const handleMore = () => {
    setMore(true);
  }

  return (
    <div>
      <div className='category__div'>
        <div className='checkbox' >
          <Checkbox onChange={handleChange} sx={{
            color: 'white',
            '&.Mui-checked': { color: 'white' }
          }} />
        </div>
        <div className='category__info'>
          <img className='category__svg' src={svg} alt={title} />
          <div className='divider' />
          <div className='category__text'>
            <h1 className='category__h1' >{title}</h1>
            <p className='category__p' >{description}</p>
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
                <Grow in={checked} {...(checked ? { timeout: 1000 } : {})}>
                  <div className='subcategory__div'>
                    <SubTopic info={subTopic3} />
                    <SubTopic info={subTopic4} />
                  </div>
                </Grow>
                :
                null
              }
              {subTopic5 && !more ?
                <Grow in={checked} {...(checked ? { timeout: 1000 } : {})}>
                  <div className='subcategory__div'>
                    <button className='subcategory__button' onClick={handleMore}>more</button>
                  </div>
                </Grow>
                :
                null
              }
              {more ?
                <Grow in={checked} {...(checked ? { timeout: 1000 } : {})}>
                  <div>
                    <div className='subcategory__div'>
                      <SubTopic info={subTopic5} />
                      <SubTopic info={subTopic6} />
                    </div>
                    {subTopic7 ?
                      <div className='subcategory__div'>
                        <SubTopic info={subTopic7} />
                        <SubTopic info={subTopic8} />
                      </div>
                      :
                      null
                    }

                  </div>
                </Grow>
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
