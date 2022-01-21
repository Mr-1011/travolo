import React from 'react';
import Navbar from './Navbar';
import SliderComp from './SliderComp';
import '../Styling/Sliders.css'
import { Link } from "react-router-dom";
import Pic from '../Data/help/Slider-Tutorial.png'
import sliderData from '../Data/sliderData';

export default function Sliders() {

  return (
    <main>
      <Navbar title={'just slide'} desc={'just put the slider on the following categories whether you like them or not'} pic={Pic} />

      {sliderData.map(slid => (
        <SliderComp
          title={slid.title}
          svg={slid.svg}
        />
      ))}

      <div className='next__div'>
        <Link to='/dictionary' className='next__link'>
          <button className='button__next' onClick={() => window.scrollTo({ top: 0 })} >
            NEXT
          </button>
        </Link>
      </div>

    </main >
  )
}
