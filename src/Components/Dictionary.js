import React, { useState, useEffect } from 'react';
import { Autocomplete, TextField } from '@mui/material'
import '../Styling/Dictionary.css'
import Navbar from './Navbar'
import words from '../Data/words'


export default function Dictionary() {

  const [dictionary, setDictionary] = useState(words)

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <Navbar title={'just type'} />
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
                label="what are you looking for?"
                placeholder="Favorites"
              />
            )}
          />
        </form>
      </div>
    </div>
  )
}