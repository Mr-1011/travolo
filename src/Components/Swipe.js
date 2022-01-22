import React, { useState } from 'react';
import Navbar from './Navbar'
import Pictures from './Pictures'
import Pic from '../Data/help/Swipe-Tutorial.png'
import Intro from '../Data/help/Intro.png'
import '../Styling/Swipe.css'
import i18next from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';
import translationEN from '../Translation/translationEN'
import translationDE from '../Translation/translationDE'

i18next
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translationEN },
      de: { translation: translationDE },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  })


export default function Swipe() {

  const { t } = useTranslation();
  const [checked, setChecked] = useState(true);

  const handleSubmit = () => {
    setChecked(false);
    window.scrollTo({ top: 0 })
  }

  const onChange = (event) => {
    i18next.changeLanguage(event.target.value)
    console.log(i18next.language);
  }

  return (
    <main>
      {checked ?
        <div className='intro__center'>
          <div className='intro__div'>
            <select className='language__select' name='language' onChange={onChange}>
              <option value='en'>English</option>
              <option value='de'>Deutsch</option>
            </select>
            <h1 className='intro__h1'>
              Travolo
            </h1>
            <p className='intro__p'>
              {t('intro')}
            </p>
            <img className='intro__img' src={Intro} />
            <button className='intro__button' onClick={handleSubmit}>
              Start
            </button>
          </div>
        </div>
        :
        null
      }
      <Navbar title={'just swipe'} desc={t('tutorial')} pic={Pic} />
      <Pictures />
    </main>
  )
}
