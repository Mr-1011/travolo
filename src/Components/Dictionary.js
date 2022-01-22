import React, { useState } from 'react';
import { Autocomplete, TextField } from '@mui/material'
import '../Styling/Dictionary.css'
import Navbar from './Navbar'
import dictionaryData from '../Data/dictionaryData'
import { Link } from "react-router-dom";
import Pic from '../Data/help/Dictionary-Tutorial.png'
import { useTranslation } from 'react-i18next';

export default function Dictionary() {
  const { t } = useTranslation();

  const [dictionary, setDictionary] = useState(dictionaryData)

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <Navbar title={'just type'} desc={t('dictionaryTutorial')} pic={Pic} />
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
                label={t('fieldTitle')}
                placeholder={t('fieldPlaceholder')}
              />
            )}
          />
        </form>
      </div>
      <div className='next__div' style={{ marginTop: "4vh" }}>
        <Link to='/sliders' className='next__link' >
          <button className='button__next' style={{ marginBottom: '70vh' }}>
            {t('NEXT')}
          </button>
        </Link>
      </div>
    </div>
  )
}