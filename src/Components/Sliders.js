import React from 'react';
import Navbar from './Navbar';
import SliderComp from './SliderComp';
import '../Styling/Sliders.css'

import Nature from '../Data/Nature.svg'
import City from '../Data/City.svg'
import Culture from '../Data/Culture.svg'
import Adventure from '../Data/Adventure.svg'
import Party from '../Data/Party.svg'
import Event from '../Data/Event.svg'
import Budget from '../Data/Budget.svg'
import Group from '../Data/Group.svg'
import Solo from '../Data/Solo.svg'
import Backpack from '../Data/Backpack.svg'
import LongTerm from '../Data/Long Term.svg'
import RoadTrip from '../Data/Road Trip.svg'
import Chill from '../Data/Chill.svg'

export default function Sliders() {

  return (
    <main>
      <Navbar title={'just slide'} />

      <SliderComp
        title='Nature'
        svg={Nature}
      />

      <SliderComp
        title='City'
        svg={City}
      />

      <SliderComp
        title='Culture'
        svg={Culture}
      />

      <SliderComp
        title='Adventure'
        svg={Adventure}
      />

      <SliderComp
        title='Party'
        svg={Party}
      />

      <SliderComp
        title='Event'
        svg={Event}
      />

    </main>
  )
}
