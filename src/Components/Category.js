import React from 'react'
import '../Styling/Category.css';
import Navbar from './Navbar';
import TopicRight from './TopicRight';
import TopicLeft from './TopicLeft';
import { Link } from "react-router-dom";
import Pic from '../Data/help/Category-Tutorial.png'

import Nature from '../Data/svg/Nature.svg'
import City from '../Data/svg/City.svg'
import Culture from '../Data/svg/Culture.svg'
import Adventure from '../Data/svg/Adventure.svg'
import Party from '../Data/svg/Party.svg'
import Event from '../Data/svg/Event.svg'
import Budget from '../Data/svg/Budget.svg'
import Group from '../Data/svg/Group.svg'
import Solo from '../Data/svg/Solo.svg'
import Backpack from '../Data/svg/Backpack.svg'
import LongTerm from '../Data/svg/Long-Term.svg'
import RoadTrip from '../Data/svg/Road-Trip.svg'
import Chill from '../Data/svg/Chill.svg'

export default function Category() {


  return (
    <main>
      <Navbar title={'just choose'} desc={'just pic topics that you like'} pic={Pic} />
      <TopicRight
        title={'Nature Wildlife'}
        description={'You like to be in the Nature. Chirping birds. Rippling water. A fresh breeze. Either activities to get you running or just sitting at a firepit. You are happy as long as you are outside.'}
        svg={Nature}
        subTopic1={'Forest'}
        subTopic2={'Lakes'}
        subTopic3={'Mountains'}
        subTopic4={'Hiking'}
      />

      <TopicLeft
        title={'City Slicker'}
        description={'You are obsessed with vibrant cities. High buildings, shopping in boutiques, find dinning in restaurant, a drink at a rooftop bar, and nightlife till the sun comes up this is your cup of tea.'}
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
        description={'You love challenging and intense experience that give a sense of self accomplishment. Physical participation and adrenaline. Pushing your limits is your motto.'}
        svg={Adventure}
        subTopic1={'Bungee Jumping'}
        subTopic2={'Skydiving'}
        subTopic3={'Rockclimbing'}
        subTopic4={'Diving'}
      />

      <TopicRight
        title={'Party Seeker'}
        description={'You travel to party. Either full night in a single club with your friends or crashing the next party whenever you feel like it. Meet and make new friends every night.'}
        svg={Party}
        subTopic1={'Club'}
        subTopic2={'Bar'}
        subTopic3={'Hip-Hop'}
        subTopic4={'Dance'}
      />

      <TopicLeft
        title={'Event Traveler'}
        description={'You travel to attend events like concerts, festivals, or football matches. You have your tickets ready even if the city you are visiting doesn’t really interest you that much.'}
        svg={Event}
        subTopic1={'Concert'}
        subTopic2={'Festival'}
        subTopic3={'Sport Event'}
        subTopic4={'Convention'}
      />

      <TopicRight
        title={'Budget Traveler'}
        description={'You know all the websites to find the cheapest flights and deals. You plan and save money for vacation. You also know that you don’t have to spend a lot to enjoy your trip'}
        svg={Budget}
        subTopic1={''}
        subTopic2={''}
        subTopic3={''}
        subTopic4={''}
      />

      <TopicLeft
        title={'Group Traveler'}
        description={'You love to travel in a group and enjoy social aspect of travelling. You would rather stay instead of going alone. You probably do already have a friends group that goes on trips regularly.'}
        svg={Group}
        subTopic1={'Friends'}
        subTopic2={'Partner'}
        subTopic3={''}
        subTopic4={''}
      />

      <TopicRight
        title={'Solo Traveler'}
        description={'You like to travel alone. Just you and your next destination. You go wherever you want. Eat whatever you want without any pressure from someone else.'}
        svg={Solo}
        subTopic1={''}
        subTopic2={''}
        subTopic3={''}
        subTopic4={''}
      />

      <TopicLeft
        title={'Backpack Traveler'}
        description={'You and your backpack that’s all you need to go on a trip. No endless waiting for your luggage. Just 3 T-shirts, 2 shorts, and socks. No commitment just short trips.'}
        svg={Backpack}
        subTopic1={'Hostel'}
        subTopic2={'Hitchhiking'}
        subTopic3={''}
        subTopic4={''}
      />

      <TopicRight
        title={'Long Term'}
        description={'Your job allows you to travel for months. All you need is your laptop, and you are ready to go. A trip for you only starts with taking a few months. This becomes more of a lifestyle than a trip.'}
        svg={LongTerm}
        subTopic1={'Tax Advantage'}
        subTopic2={'Remote Work'}
        subTopic3={''}
        subTopic4={''}
      />

      <TopicLeft
        title={'Road Trip'}
        description={'You and your camper are ready to go. Pack your stuff and don’t forget your map. You like seeing more than just one destination and the freedom to sleep and stay anywhere you want.'}
        svg={RoadTrip}
        subTopic1={'Camper'}
        subTopic2={'Hitchhiking'}
        subTopic3={''}
        subTopic4={''}
      />

      <TopicRight
        title={'Just Chilling'}
        description={'You like to chill relax and enjoy you trip to the fullest at your accommodation. Could be a full all-inclusive resort. Or a trip to a spa. Anything to get you away from the daily stress.'}
        svg={Chill}
        subTopic1={'Resort'}
        subTopic2={'Spa'}
        subTopic3={'Cruise Ship'}
        subTopic4={'Meditation'}
      />
      <div className='next__div'>
        <Link to='/sliders' className='next__link'>
          <button className='button__next' onClick={() => window.scrollTo({ top: 0 })}>
            NEXT
          </button>
        </Link>
      </div>
    </main>
  )
}
