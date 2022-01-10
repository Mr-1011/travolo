import React, { useState } from 'react';
import Navbar from './Navbar'
import Pictures from './Pictures'
import Pic from '../Data/help/Swipe-Tutorial.png'
import Intro from '../Data/help/Intro.png'
import '../Styling/Swipe.css'

export default function Swipe() {

  const [checked, setChecked] = useState(true);

  const handleSubmit = () => {
    setChecked(false);
  }

  return (
    <main>
      {checked ?
        <div className='intro__center'>
          <div className='intro__block' />
          <div className='intro__div'>
            <h1 className='intro__h1'>
              Travolo
            </h1>
            <p className='intro__p'>
              Welcome, you will now see 5 different models to find out what your travel interests really are.
              The objective of this project is to find new ways of questioning, you will therefore unfortunately not receive any recommendations yet.
              No data will be stored or received by us. Test our models and take part on our survey.
            </p>
            <img className='intro__img' src={Intro} />
            <button className='intro__button' onClick={handleSubmit}>
              Let's Start
            </button>
          </div>
        </div>
        :
        null
      }
      <Navbar title={'just swipe'} desc={'just swipe right if you like what you see and left if you dont'} pic={Pic} />
      <Pictures />
    </main>
  )
}
