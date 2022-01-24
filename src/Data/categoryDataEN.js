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
import Shopping from '../Data/svg/Shopping.svg'
import Social from '../Data/svg/Social-Media.svg'
import Sunny from '../Data/svg/Sunny.svg'
import Snowy from '../Data/svg/Snowy.svg'

const categoryDataEN = [
  {
    id: 1,
    title: 'Nature Wildlifer',
    description: 'You love to be in the Nature. Chirping birds. Rippling water. A fresh breeze. Either activities to get you going or just sitting at a firepit. You are happy as long as you are outside.',
    svg: Nature,
    subTopic1: 'Forest',
    subTopic2: 'Wildlife',
    subTopic3: 'Mountains',
    subTopic4: 'Hiking',
    subTopic5: 'Camping',
    subTopic6: 'Climbing',
    subTopic7: 'Lakes',
    subTopic8: 'Hunting',
  },
  {
    id: 2,
    title: 'City Slicker',
    description: 'You are obsessed with vibrant cities. Skyscrapers, shopping in boutiques, fine dinning in restaurants, a drink at a rooftop bar, and nightlife till the sun comes up this is your cup of tea.',
    svg: City,
    subTopic1: 'Shopping',
    subTopic2: 'Skyscrapper',
    subTopic3: 'Night Life',
    subTopic4: 'Fine Dinning',
    subTopic5: 'Street Art',
    subTopic6: 'Walk in the Park',
  },
  {
    id: 3,
    title: 'Sunny Beacher',
    description: 'You love to be in the sun either tanning and reading a book at the beach or some activities like beach volleyball or swimming. You are happy as long as it’s warm.',
    svg: Sunny,
    subTopic1: 'Sun Bathing',
    subTopic2: 'Swimming',
    subTopic3: 'Island Hopping',
    subTopic4: 'Surfing',
  },
  {
    id: 4,
    title: 'Snow Lover',
    description: 'You love the sound of footsteps on new snow. A warm jacket, snowboard or ski equipment and you are ready to tackle the next ski slope.',
    svg: Snowy,
    subTopic1: 'Skiing ',
    subTopic2: 'Snowboarding',
  },
  {
    id: 5,
    title: 'Culture Lover',
    description: 'You travel to immerse yourself in the local culture and cherish new cultural experiences. Cultural enrichment, connecting with locals, maybe an afternoon in a museum that’s what you are looking for.',
    svg: Culture,
    subTopic1: 'Museum',
    subTopic2: 'Sightseeing',
    subTopic3: 'Locals',
    subTopic4: 'Culinary',
    subTopic5: 'Art',
    subTopic6: 'City Guide',
  },
  {
    id: 6,
    title: 'Adventure Seeker',
    description: 'You love challenging and intense experiences that give you a sense of self accomplishment. Physical participation, adrenaline and pushing your limits is your motto.',
    svg: Adventure,
    subTopic1: 'Biking',
    subTopic2: 'Kayaking',
    subTopic3: 'Rockclimbing',
    subTopic4: 'Diving',
    subTopic5: 'Bungee Jumping',
    subTopic6: 'Skydiving',
  },
  {
    id: 7,
    title: 'Just Chilling',
    description: 'You like to chill, relax, and enjoy you trip to the fullest at your accommodation. Could be a full all-inclusive resort. Or a trip to a spa. Anything to get you away from the daily stress.',
    svg: Chill,
    subTopic1: 'Resort',
    subTopic2: 'Spa',
    subTopic3: 'Cruise Ship',
    subTopic4: 'Meditation',
  },
  {
    id: 8,
    title: 'Party Seeker',
    description: 'You travel to party. Either a full night in a single club with your friends or crashing the next party whenever you feel like it. Meet and make new friends every night.',
    svg: Party,
    subTopic1: 'Club',
    subTopic2: 'Bar',
    subTopic3: 'Hip-Hop',
    subTopic4: 'Dance',
  },
  {
    id: 9,
    title: 'Event Traveler',
    description: 'You travel to attend events like concerts, festivals, or football matches. You have your event tickets ready even if the city you are visiting doesn’t really interest you that much.',
    svg: Event,
    subTopic1: 'Concert',
    subTopic2: 'Festival',
    subTopic3: 'Sport Event',
    subTopic4: 'Convention',
  },
  {
    id: 10,
    title: 'Social Media',
    description: 'You love the lifestyle of influencers either sharing your trip with friends or family or to your followers only. You capture every moment with your phone or your camera.',
    svg: Social,
  },
  {
    id: 11,
    title: 'Shopping Queen',
    description: 'You travel the world to fill your luggage with stuff you find all around the world. Clothes, souvenirs, or deals you buy them to either have them as memories or the exclusivity.',
    svg: Shopping,
    subTopic1: 'Deals',
    subTopic2: 'Brands',
    subTopic3: 'Vintage',
    subTopic4: 'Window Shopping',
  },
  {
    id: 12,
    title: 'Group Traveler',
    description: 'You love to travel in a group and enjoy social aspect of travelling. You would rather stay home instead of going alone. You probably do already have a group of friends that goes on trips regularly.',
    svg: Group,
    subTopic1: 'Friends',
    subTopic2: 'Partner',
  },
  {
    id: 13,
    title: 'Solo Traveler',
    description: 'You like to travel alone. Just you and your next destination. You go wherever and whenever you want. You set the budget, time, and place without any pressure from someone else.',
    svg: Solo,
  },
  {
    id: 14,
    title: 'Backpack Tripper',
    description: 'You and your backpack that’s all you need to go on a trip. No endless waiting for your luggage or heavy carrying. Just a pair of T-shirts, shorts, and socks. No commitment just short trips.',
    svg: Backpack,
    subTopic1: 'Hostel',
    subTopic2: 'Hitchhiking',
  },
  {
    id: 15,
    title: 'Road Tripper',
    description: 'You and your camper or car are ready to go. Pack your stuff and don’t forget your map. You like seeing more than just one destination and love the freedom to sleep and stay anywhere you want.',
    svg: RoadTrip,
    subTopic1: 'Camper',
    subTopic2: 'Car',
  },
  {
    id: 16,
    title: 'Budget Traveler',
    description: 'You know all the websites to find the cheapest flights and deals. You plan and save money for your vacation. You also know that you don’t have to spend a lot to enjoy your trip.',
    svg: Budget,
  },
  {
    id: 17,
    title: 'Long Term',
    description: 'Your job allows you to travel for months. All you need is your laptop, and you are ready to go. A trip for you only starts with taking a few months. This becomes more of a lifestyle than a trip.',
    svg: LongTerm,
    subTopic1: 'Tax Advantage',
    subTopic2: 'Remote Work',
  }
]

export default categoryDataEN;