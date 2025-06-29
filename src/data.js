import tour1 from './images/tour-1.jpeg'
import tour2 from './images/tour-2.jpeg'
import tour3 from './images/tour-3.jpeg'
import tour4 from './images/tour-4.jpeg'

export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#services', text: 'services' },
  { id: 4, href: '#tours', text: 'tours' },
]

export const socialLinks = [
  { id: 1, href: 'https://www.twitter.com', icon: 'fab fa-facebook' },
  { id: 2, href: 'https://www.twitter.com', icon: 'fab fa-twitter' },
  { id: 3, href: 'https://www.twitter.com', icon: 'fab fa-squarespace' },
]

export const tours = [
  {
    id: 1,
    image: tour1,
    date: 'august 26th, 2020',
    title: 'Tibet Adventure',
    text: 'Explore the hidden wonders of Tibet with our exclusive adventure tour.',
    location: 'Tibet',
    duration: '6 days',
    cost: 2100,
  },
  {
    id: 2,
    image: tour2,
    date: 'september 15th, 2020',
    title: 'Best of Java',
    text: 'Experience the rich culture and stunning landscapes of Java.',
    location: 'Java, Indonesia',
    duration: '11 days',
    cost: 1400,
  },
  {
    id: 3,
    image: tour3,
    date: 'october 1th, 2020',
    title: 'Explore the Amazon',
    text: 'Journey through the heart of the Amazon rainforest.',
    location: 'Amazon, Brazil',
    duration: '10 days',
    cost: 1800,
  },
  {
    id: 4,
    image: tour4,
    date: 'november 5th, 2020',
    title: 'Safari in Kenya',
    text: 'Witness the majestic wildlife of Kenya on this unforgettable safari.',
    location: 'Kenya',
    duration: '7 days',
    cost: 2500,
  },
]

export const services = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    title: 'saving money',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
  {
    id: 2,
    icon: 'fas fa-tree fa-fw',
    title: 'endless hiking',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
  {
    id: 3,
    icon: 'fas fa-socks fa-fw',
    title: 'amazing comfort',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
]


