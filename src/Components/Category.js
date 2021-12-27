import React from 'react'
import '../Styling/Category.css';
import Navbar from './Navbar';
import TopicRight from './TopicRight';
import TopicLeft from './TopicLeft';

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

export default function Category() {


  return (
    <main>
      <Navbar title={'just choose'} />
      <TopicRight
        title={'Nature Wildlife'}
        description={'You like to be in the Nature. Chirping birds. Rippling water. A fresh breeze.'}
        svg={Nature}
        subTopic1={'Forrest'}
        subTopic2={'Lake'}
        subTopic3={'Mountains'}
        subTopic4={'Hiking'}
      />

      <TopicLeft
        title={'City Slicker'}
        description={'You are obsessed with vibrant cities. Shopping, find dinning, and nightlife this is your cup of tea.'}
        svg={City}
        subTopic1={'Shopping'}
        subTopic2={'Skyscrapper'}
        subTopic3={'Night Life'}
        subTopic4={'Fine Dinning'}
      />

      <TopicRight
        title={'Culture Vulture'}
        description={'You travel to immerse yourself in the local culture and cherish the cultural experiences. Cultural enrichment, connecting with locals of that place that’s what you are looking for.'}
        svg={Culture}
        subTopic1={'Museum'}
        subTopic2={'Sightseeing'}
        subTopic3={'Locals'}
        subTopic4={'Culinary'}
      />

      <TopicLeft
        title={'Adventure Seeker'}
        description={'Pushing your limits is your motto you love challenging and intense experience that give a sense of self accomplishment. Physical participation and adrenalin.'}
        svg={Adventure}
        subTopic1={''}
        subTopic2={''}
        subTopic3={''}
        subTopic4={''}
      />

      <TopicRight
        title={'Party Seeker'}
        description={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua'}
        svg={Party}
        subTopic1={''}
        subTopic2={''}
        subTopic3={''}
        subTopic4={''}
      />

      <TopicLeft
        title={'Event Traveler'}
        description={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua'}
        svg={Event}
        subTopic1={''}
        subTopic2={''}
        subTopic3={''}
        subTopic4={''}
      />

      <TopicRight
        title={'Budget Traveler'}
        description={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua'}
        svg={Budget}
        subTopic1={''}
        subTopic2={''}
        subTopic3={''}
        subTopic4={''}
      />

      <TopicLeft
        title={'Group Traveler'}
        description={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua'}
        svg={Group}
        subTopic1={''}
        subTopic2={''}
        subTopic3={''}
        subTopic4={''}
      />

      <TopicRight
        title={'Solo Traveler'}
        description={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua'}
        svg={Solo}
        subTopic1={''}
        subTopic2={''}
        subTopic3={''}
        subTopic4={''}
      />

      <TopicLeft
        title={'Backpack Traveler'}
        description={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua'}
        svg={Backpack}
        subTopic1={''}
        subTopic2={''}
        subTopic3={''}
        subTopic4={''}
      />

      <TopicRight
        title={'Long Term'}
        description={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua'}
        svg={LongTerm}
        subTopic1={''}
        subTopic2={''}
        subTopic3={''}
        subTopic4={''}
      />

      <TopicLeft
        title={'Road Trip'}
        description={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua'}
        svg={RoadTrip}
        subTopic1={''}
        subTopic2={''}
        subTopic3={''}
        subTopic4={''}
      />

      <TopicRight
        title={'Just Chilling'}
        description={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua'}
        svg={Chill}
        subTopic1={''}
        subTopic2={''}
        subTopic3={''}
        subTopic4={''}
      />

    </main>
  )
}
