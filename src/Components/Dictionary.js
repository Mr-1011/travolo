import React, { useState, useEffect } from 'react';
import { Autocomplete, TextField } from '@mui/material'
import '../Styling/Dictionary.css'
import Navbar from './Navbar'
import words from '../Data/words'
import { Link } from "react-router-dom";


export default function Dictionary() {

  const [dictionary, setDictionary] = useState(words)

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <Navbar title={'just type'} desc={'just type categories you are looking for for your next vacation'} />
      <div className='dictionary__div'>
        <form onSubmit={handleSubmit}>
          <Autocomplete
            sx={{ width: 300 }}
            multiple
            options={dictionary}
            getOptionLabel={(option) => option.label}
            filterSelectedOptions
            renderInput={(params) => (
              <TextField
                {...params}
                label="What are you looking for?"
                placeholder="Interests"
              />
            )}
          />
        </form>
      </div>
      <div className='next__div' style={{ marginTop: "4vh" }}>
        <Link to='/sliders' className='next__link' >
          <button className='button__next'>
            NEXT
          </button>
        </Link>
      </div>
    </div>
  )
}