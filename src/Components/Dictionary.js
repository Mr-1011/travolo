import React, { useState, useEffect } from 'react';
import { Autocomplete, TextField } from '@mui/material'
import '../Styling/Dictionary.css'
import Navbar from './Navbar'
import words from '../Data/words'
import { Button } from '@mui/material';
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
                label="what are you looking for?"
                placeholder="Favorites"
              />
            )}
          />
        </form>
      </div>
      <div className='next__div' style={{ marginTop: "4vh" }}>
        <Link to='/sliders' className='next__link' >
          <Button variant="contained" size="large" sx={{ width: 160 }}>Next</Button>
        </Link>
      </div>
    </div>
  )
}