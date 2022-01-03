import React from 'react';
import Navbar from './Navbar';
import SliderComp from './SliderComp';
import '../Styling/Sliders.css'
import { Link } from "react-router-dom";
import Pic from '../Data/help/Slider-Tutorial.png'

import Nature from '../Data/svg/Nature.svg'
import City from '../Data/svg/City.svg'
import Culture from '../Data/svg/Culture.svg'
import Adventure from '../Data/svg/Adventure.svg'
import Party from '../Data/svg/Party.svg'
import Event from '../Data/svg/Event.svg'
import Backpack from '../Data/svg/Backpack.svg'
import RoadTrip from '../Data/svg/Road-Trip.svg'
import Chill from '../Data/svg/Chill.svg'

export default function Sliders() {

  return (
    <main>
      <Navbar title={'just slide'} desc={'just put the slider on the following categories whether you like them or not'} pic={Pic} />

      <SliderComp
        title='Nature & Wildlife'
        svg={Nature}
      />

      <SliderComp
        title='City & Highlife'
        svg={City}
      />

      <SliderComp
        title='Culture & Art'
        svg={Culture}
      />

      <SliderComp
        title='Adventure & Action'
        svg={Adventure}
      />

      <SliderComp
        title='Road Trip & Camper'
        svg={RoadTrip}
      />

      <SliderComp
        title='Party, Clubs & Nightlife'
        svg={Party}
      />

      <SliderComp
        title='Event & Festivals'
        svg={Event}
      />

      <SliderComp
        title='Backpack Traveling'
        svg={Backpack}
      />

      <SliderComp
        title='Chill & Relax'
        svg={Chill}
      />

      <div className='next__div'>
        <Link to='/profile' className='next__link'>
          <button className='button__next'>
            NEXT
          </button>
        </Link>
      </div>

    </main>
  )
}
