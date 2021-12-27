import React from 'react'
import Checkbox from '@mui/material/Checkbox';
import '../Styling/SubTopic.css'

export default function SubTopic({ info, check }) {
  return (
    <div className='subTopic__div'>
      <div className='subTopic__checkbox'>
        <Checkbox />
      </div>
      <p>{info}</p>
    </div>
  )
}
