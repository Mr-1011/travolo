import React from 'react'
import Checkbox from '@mui/material/Checkbox';
import '../Styling/SubTopic.css'

export default function SubTopic({ info, check }) {
  return (
    <div className='subTopic__div'>
      <div className='subTopic__checkbox'>
        <Checkbox sx={{
          color: 'white',
          '&.Mui-checked': { color: 'white' }
        }} />
      </div>
      <p className='subTopic__p'>{info}</p>
    </div>
  )
}
