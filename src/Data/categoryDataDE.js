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


const categoryDataDE = [
  {
    id: 1,
    title: 'Natur & Wildnis',
    description: 'Du bist gerne in der Natur. Zwitschernde Vögel. Plätscherndes Gewässer. Entweder Aktivitäten, die dich zum Laufen bringen oder einfach nur am Lagerfeuer sitzen. Du bist glücklich, solange du draußen bist.',
    svg: Nature,
    subTopic1: 'Wald',
    subTopic2: 'Wildtiere',
    subTopic3: 'Berge',
    subTopic4: 'Wandern',
    subTopic5: 'Campen',
    subTopic6: 'Klettern',
    subTopic7: 'Seen',
    subTopic8: 'Jagen',
  },
  {
    id: 2,
    title: 'Großstadt Tourist',
    description: 'Du bist besessen von pulsierenden Städten. Wolkenkratzer, Shoppen in Boutiquen, essen in teuren Restaurants, ein Drink in einer Rooftop Bar, Party und Nachtleben bis die Sonne aufgeht.',
    svg: City,
    subTopic1: 'Shoppen',
    subTopic2: 'Wolkenkratzer',
    subTopic3: 'Nachtleben',
    subTopic4: 'Restaurants',
    subTopic5: 'Street Art',
    subTopic6: 'Spaziergang im Park',
  },
  {
    id: 3,
    title: 'Sonne & Strand',
    description: 'Du liebst es, in der Sonne zu sein. Dich zu sonnen. Ein Buch am Strand zu lesen oder vielleicht Aktivitäten wie Beachvolleyball oder Schwimmen. Du bist glücklich, solange es warm ist.',
    svg: Sunny,
    subTopic1: 'Bräunen',
    subTopic2: 'Schwimmen',
    subTopic3: 'Insel Hopping',
    subTopic4: 'Surfen',
    subTopic5: 'Beachvolleyball',
    subTopic6: 'Pool',
  },
  {
    id: 4,
    title: 'Schnee & Berge',
    description: 'Du liebst das Geräusch von Schritten auf neuem Schnee. Eine warme Jacke, ein Snowboard oder eine Skiausrüstung und du bist bereit, die nächste Piste in Angriff zu nehmen.',
    svg: Snowy,
    subTopic1: 'Snowboard',
    subTopic2: 'Ski',
  },
  {
    id: 5,
    title: 'Kulturliebhaber',
    description: 'Du reist, um in die örtliche Kultur einzutauchen und neue Erfahrungen zu sammeln. Von kultureller Bereicherung über Kontakte mit Locals hinzu einem Nachmittag in Museum.',
    svg: Culture,
    subTopic1: 'Museum',
    subTopic2: 'Sehens-würdigkeiten',
    subTopic3: 'Locals',
    subTopic4: 'Kulinarisches',
    subTopic5: 'Kunst',
    subTopic6: 'City Guide',
  },
  {
    id: 6,
    title: 'Abenteuerlustig',
    description: 'Du liebst herausfordernde und intensive Erlebnisse, die dir ein Gefühl der Selbstverwirklichung geben. Körperlicher Einsatz, Adrenalin und an deine Grenzen zu gehen ist dein Motto.',
    svg: Adventure,
    subTopic1: 'Mountain Bike',
    subTopic2: 'Kajak',
    subTopic3: 'Klettern',
    subTopic4: 'Tauchen',
    subTopic5: 'Bungee Jumping',
    subTopic6: 'Fallschirm-springen',
  },
  {
    id: 7,
    title: 'Einfach Relaxen',
    description: 'Du möchtest entspannen und deine Reise in deiner Unterkunft in vollen Zügen genießen. Das kann ein All-inclusive-Resort sein. Oder ein Ausflug in ein Spa. Alles, was Sie vom Alltagsstress ablenkt.',
    svg: Chill,
    subTopic1: 'Resort',
    subTopic2: 'Spa',
    subTopic3: 'Kreuzfahrtschiff',
    subTopic4: 'Meditation',
    subTopic5: 'All Inclusive',
    subTopic6: 'Massage',
  },
  {
    id: 8,
    title: 'Party & Clubs',
    description: 'Du reist, um zu feiern und deinen Urlaub mit Musik zu genießen. Eine ganze Nacht im Club mit deinen Freunden oder eine Hausparty bei Leuten die du seit 2 Tagen kennst. Party > Buch am Strand.',
    svg: Party,
    subTopic1: 'Club',
    subTopic2: 'Bar',
    subTopic3: 'Hip-Hop',
    subTopic4: 'Dance',
  },
  {
    id: 9,
    title: 'Event Reisender',
    description: 'Du reist, um Veranstaltungen wie Konzerte, Festivals oder Fußballspiele zu besuchen. Das erste was du buchst sind immer die Eintrittskarten auch wenn der Ort dich nicht wirklich interessiert.',
    svg: Event,
    subTopic1: 'Konzert',
    subTopic2: 'Festival',
    subTopic3: 'Sport Event',
    subTopic4: 'Convention',
  },
  {
    id: 10,
    title: 'Social Media',
    description: 'Du liebst den Lifestyle von Influencern und teilst deine Reise entweder mit Freunden und Familie oder nur mit deinen Followern. Du hältst jeden Moment mit deinem Handy oder deiner Kamera fest.',
    svg: Social,
    subTopic1: 'Fotografie',
    subTopic2: 'Film',
  },
  {
    id: 11,
    title: 'Shopping Queen',
    description: 'Du reist um dein Gepäck zu füllen mit Dingen die man überall auf der Welt findet. Du kaufst Kleidung, Andenken oder findest Angebote, um sie entweder als Erinnerung oder für die Exklusivität zu haben.',
    svg: Shopping,
    subTopic1: 'Angebote',
    subTopic2: 'Marken',
    subTopic3: 'Vintage',
    subTopic4: 'Souvenir',
  },
  {
    id: 12,
    title: 'Nie Alleine',
    description: 'Du liebst es, in einer Gruppe zu reisen und genießt den sozialen Aspekt des Reisens. Du würdest lieber zuhause bleiben als allein zu reisen. Wahrscheinlich hast du bereits eine Gruppe von Freunden mit denen du regelmäßig unterwegs bist.',
    svg: Group,
    subTopic1: 'Freunde',
    subTopic2: 'Partner',
  },
  {
    id: 13,
    title: 'Solo Reisender',
    description: 'Du reist gerne allein. Nur du und dein nächstes Ziel. Du reist, wohin und wann du willst. Du bestimnst das Budget, die Zeit und den Ort, ohne dass jemand anderes Druck ausübt.',
    svg: Solo,
  },
  {
    id: 14,
    title: 'Backpack Reisen',
    description: 'Du und dein Rucksack, das ist alles, was du brauchst, um zu verreisen. Kein endloses Warten auf dein Gepäck. Ein paar T-Shirts, Hosen und Socken. Keine Verpflichtungen, Kurztrips stehen an.',
    svg: Backpack,
    subTopic1: 'Hostel',
    subTopic2: 'Per Anhalter',
  },
  {
    id: 15,
    title: 'Road Trip',
    description: 'Du und dein Wohnmobil oder Auto seid bereit zur Abreise. Pack deine Sachen und vergiss deine Landkarte nicht. Du möchtest mehr als nur einen Ort sehen und die Freiheit haben, zu schlafen, wann und wo du willst.',
    svg: RoadTrip,
    subTopic1: 'Camper',
    subTopic2: 'Auto',
  },
  {
    id: 16,
    title: 'Budget Reisen',
    description: 'Du kennst alle Webseiten, um die günstigsten Flüge und Angebote zu finden. Du planst und sparst Geld für deinen nächsten Urlaub. Du weißt auch, dass du nicht viel ausgeben musst, um deine Reise zu genießen.',
    svg: Budget,
  },
  {
    id: 17,
    title: 'Langzeit',
    description: 'Dein Job erlaubt es dir, monatelang zu reisen. Alles, was du brauchst, ist dein Laptop, und du bist bereit zu gehen. Eine Reise beginnt für dich erst, wenn sie ein paar Monate dauert. Das wird immer mehr zu einem Lebensstil als zu einer Reise.',
    svg: LongTerm,
    subTopic1: 'Steuervorteil',
    subTopic2: 'Remote Work',
  }
];

export default categoryDataDE;