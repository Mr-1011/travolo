import React from 'react';
import { Autocomplete, TextField } from '@mui/material';
import '../Styling/Dictionary.css';
import Navbar from './Navbar';
import Pic from '../Data/help/Dictionary-Tutorial.png';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import dictionaryDataEN from '../Data/dictionaryDataEN';
import dictionaryDataDE from '../Data/dictionaryDataDE';

export default function Dictionary() {
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleClick = () => {
    if (i18next.language === 'en') {
      window.location.href = 'https://www.umfrageonline.com/c/travolo'
    }
    else {
      window.location.href = 'https://www.umfrageonline.com/c/travolo-de'
    }
  }

  return (
    <div>
      <Navbar title={'just type'} desc={t('dictionaryTutorial')} pic={Pic} />
      <div className='dictionary__div'>
        <form onSubmit={handleSubmit} className='dictionary__form'>
          <Autocomplete
            multiple
            options={i18next.language === 'en' ? dictionaryDataEN : dictionaryDataDE}
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
        <button onClick={handleClick} className='button__next' style={{ marginBottom: '70vh' }} >
          {t('Survey')}
        </button>
      </div>
    </div>
  )
}