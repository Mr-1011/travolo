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

const categoryDataDE = [
  {
    title: 'Natur Wildnis Typ',
    description: 'Du bist gerne in der Natur. Zwitschernde Vögel. Plätscherndes Wasser. Eine frische Brise. Entweder Aktivitäten, die dich zum Laufen bringen oder einfach nur am Lagerfeuer sitzen. Du bist glücklich, solange du draußen bist.',
    svg: Nature,
    subTopic1: 'Wald',
    subTopic2: 'Seen',
    subTopic3: 'Berge',
    subTopic4: 'Wandern',
  },
  {
    title: 'Großstadt Tourist',
    description: 'Du bist besessen von pulsierenden Städten. Hohe Gebäude, Shopping in Boutiquen, essen in teuren Restaurants, ein Drink auf einer Rooftop Bar und Nachtleben bis die Sonne aufgeht.',
    svg: City,
    subTopic1: 'Shoppen',
    subTopic2: 'Wolkenkratzer',
    subTopic3: 'Nachtleben',
    subTopic4: 'Restaurants',
  },
  {
    title: 'Kulturliebhaber',
    description: 'Du reist, um in die örtliche Kultur einzutauchen und neue Erfahrungen zu sammeln.Museen, Sehenswürdikeiten, Kulturelle Bereicherung, Kontakt zu Locals.',
    svg: Culture,
    subTopic1: 'Museum',
    subTopic2: 'Sehenswürdigkeiten',
    subTopic3: 'Locals',
    subTopic4: 'Kulinarisches',
  },
  {
    title: 'Abenteuerlustig',
    description: 'Du liebst herausfordernde und intensive Erfahrungen, die dir das Gefühl geben, dich selbst zu verwirklichen. Körperlicher Einsatz und Adrenalin. An deine Grenzen gehen ist dein Motto.',
    svg: Adventure,
    subTopic1: 'Bungee Jumping',
    subTopic2: 'Skydiving',
    subTopic3: 'Klettern',
    subTopic4: 'Tauchen',
  },
  {
    title: 'Einfach Relaxen',
    description: 'Du möchtest entspannen und deine Reise in deiner Unterkunft in vollen Zügen genießen. Ein All-inclusive-Resort oder ein Ausflug in ein Spa. Alles, was dich vom Alltagsstress ablenkt.',
    svg: Chill,
    subTopic1: 'Resort',
    subTopic2: 'Spa',
    subTopic3: 'Kreuzfahrtschiff',
    subTopic4: 'Meditation',
  },
  {
    title: 'Party Typ',
    description: 'Du reist, um zu feiern. Eine ganze Nacht im Club mit deinen Freunden oder eine Hausparty bei Leuten die du seit 2 Tagen kennst. Party > Buch am Strand.',
    svg: Party,
    subTopic1: 'Club',
    subTopic2: 'Bar',
    subTopic3: 'Hip-Hop',
    subTopic4: 'Dance',
  },
  {
    title: 'Event Reisender',
    description: 'Du reist, um Veranstaltungen wie Konzerte, Festivals oder Fußballspiele zu besuchen. Das erste was du buchst sind immer die Eintrittskarten auch wenn der Ort nicht wirklich interessiert.',
    svg: Event,
    subTopic1: 'Konzert',
    subTopic2: 'Festival',
    subTopic3: 'Sport Event',
    subTopic4: 'Convention',
  },
  {
    title: 'Niemals Alleine',
    description: 'Du liebst es, in einer Gruppe zu reisen und genießt den sozialen Aspekt des Reisens. Du würdest lieber zuhause bleiben als allein zu reisen. Wahrscheinlich hast du bereits eine Gruppe von Freunden mit denen du regelmäßig reist.',
    svg: Group,
    subTopic1: 'Freunde',
    subTopic2: 'Partner',
    subTopic3: '',
    subTopic4: '',
  },
  {
    title: 'Solo Reisender',
    description: 'Du reist gerne allein. Nur du und dein nächstes Ziel. Du gehst, wohin du willst. Isst, was du willst, ohne Druck von jemand anderem.',
    svg: Solo,
    subTopic1: '',
    subTopic2: '',
    subTopic3: '',
    subTopic4: '',
  },
  {
    title: 'Backpack Reisen',
    description: 'Du und dein Rucksack, das ist alles, was du brauchst, um zu verreisen. Kein endloses Warten auf dein Gepäck. Ein paar T-Shirts, Hosen und Socken. Keine Verpflichtungen, Kurztrips stehen an.',
    svg: Backpack,
    subTopic1: 'Hostel',
    subTopic2: 'Per Anhalter',
    subTopic3: '',
    subTopic4: '',
  },
  {
    title: 'Road Trip',
    description: 'Du und dein Wohnmobil sind bereit zur Abreise. Pack deine Sachen und vergiss deine Landkarte nicht. Du möchtest mehr als nur ein Ziel sehen und die Freiheit haben, zu schlafen und zu übernachten, wo und wann du willst.',
    svg: RoadTrip,
    subTopic1: 'Camper',
    subTopic2: 'Per Anhalter',
    subTopic3: '',
    subTopic4: '',
  },
  {
    title: 'Budget Reisen',
    description: 'Du kennst alle Websites, um die günstigsten Flüge und Angebote zu finden. Du planst und sparst Geld für deinen nächsten Urlaub. Du weißt auch, dass du nicht viel ausgeben musst, um deine Reise zu genießen.',
    svg: Budget,
    subTopic1: '',
    subTopic2: '',
    subTopic3: '',
    subTopic4: '',
  },
  {
    title: 'Langzeit',
    description: 'Dein Job erlaubt es dir, monatelang zu reisen. Alles, was du brauchst, ist dein Laptop, und du sind bereit zu gehen. Eine Reise beginnt für dich erst, wenn sie ein paar Monate Zeit dauert. Das wird immer mehr zu einem Lebensstil als zu einer Reise.',
    svg: LongTerm,
    subTopic1: 'Steuervorteil',
    subTopic2: 'Remote Work',
    subTopic3: '',
    subTopic4: '',
  }
]

export default categoryDataDE;