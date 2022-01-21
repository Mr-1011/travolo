import React, { useState } from 'react';
import Navbar from './Navbar'
import Pictures from './Pictures'
import Pic from '../Data/help/Swipe-Tutorial.png'
import Intro from '../Data/help/Intro.png'
import '../Styling/Swipe.css'
import i18next from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';

const translationEn = {
  intro: 'Welcome. You will now see 4 different models to find out what your travel interests really are. The objective of this project is to find new ways of questioning, you will therefore unfortunately not receive any recommendations yet. No data will be stored or received by us. Test our models and take part on our survey.',
  tutorial: 'just swipe right if you like what you see and left if you dont',
  tutorial2: 'just click your way through personas and categories you like'
}
const translationDe = {
  intro: 'Willkommen. Sie werden nun 4 verschiedene Modelle sehen, um herauszufinden, was Ihre Reiseinteressen wirklich sind. Das Ziel dieses Projektes ist es, neue Wege der Befragung zu finden, daher werden Sie leider noch keine Empfehlungen erhalten. Es werden keine Daten gespeichert oder von uns erhalten. Testen Sie unsere Modelle und nehmen Sie an unserer Umfrage teil. ',
  tutorial: 'swipe nach rechts wenn dir gefällt was du sieht oder links wenn nicht',
  tutorial2: 'Klicke dich einfach durch die Personas und Kategorien und wähle aus was dir gefällt'
}

i18next
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translationEn },
      de: { translation: translationDe },
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
            <h1 className='intro__h1'>
              Travolo
            </h1>
            <select name='language' onChange={onChange}>
              <option value='en'>English</option>
              <option value='de'>Deutsch</option>
            </select>
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
