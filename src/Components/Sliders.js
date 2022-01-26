import React from 'react';
import Navbar from './Navbar';
import SliderComp from './SliderComp';
import '../Styling/Sliders.css'
import { Link } from "react-router-dom";
import Pic from '../Data/help/Slider-Tutorial.png'
import sliderDataEN from '../Data/sliderDataEN';
import sliderDataDE from '../Data/sliderDataDE';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

export default function Sliders() {
  const { t } = useTranslation();

  return (
    <main>
      <Navbar title={'just slide'} desc={t('sliderTutorial')} pic={Pic} />

      {i18next.language === 'en' ?
        sliderDataEN.map(slid => (
          <SliderComp
            title={slid.title}
            svg={slid.svg}
            key={slid.id}
          />
        ))
        :
        sliderDataDE.map(slid => (
          <SliderComp
            title={slid.title}
            svg={slid.svg}
            key={slid.id}
          />
        ))
      }


      <div className='next__div'>
        <Link to='/dictionary' className='next__link'>
          <button className='button__next' onClick={() => window.scrollTo({ top: 0 })} >
            {t('NEXT')}
          </button>
        </Link>
      </div>

    </main >
  )
}
