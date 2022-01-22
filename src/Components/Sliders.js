import React from 'react';
import Navbar from './Navbar';
import SliderComp from './SliderComp';
import '../Styling/Sliders.css'
import { Link } from "react-router-dom";
import Pic from '../Data/help/Slider-Tutorial.png'
import sliderData from '../Data/sliderData';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

export default function Sliders() {
  const { t } = useTranslation();

  return (
    <main>
      <Navbar title={'just slide'} desc={t('sliderTutorial')} pic={Pic} />

      {sliderData.map(slid => (
        <SliderComp
          title={slid.title}
          svg={slid.svg}
        />
      ))}

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
