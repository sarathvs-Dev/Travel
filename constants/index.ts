// NAVIGATION
export const NAV_LINKS = [
  { href: '/', key: 'home', label: 'Home' },
  { href: '/how-it-works', key: 'how_travel_buddy_works', label: 'How Travel Buddy Works?' },
  { href: '/services', key: 'services', label: 'Services' },
  { href: '/pricing', key: 'pricing', label: 'Pricing' },
  { href: '/contact-us', key: 'contact_us', label: 'Contact Us' },
];

// HOW IT WORKS SECTION
export const HOW_IT_WORKS_STEPS = [
  {
    step: '01',
    title: 'Download the App',
    description:
      'Get Travel Buddy from the App Store or Play Store and create your free account in under a minute.',
  },
  {
    step: '02',
    title: 'Pick Your Destination',
    description:
      'Browse offline-ready maps and choose from hundreds of camping and hiking locations worldwide.',
  },
  {
    step: '03',
    title: 'Plan the Adventure',
    description:
      'Set your schedule, invite friends, and let augmented reality guide you along the trail.',
  },
  {
    step: '04',
    title: 'Explore With Confidence',
    description:
      'Head out knowing your maps work offline, so you always find your way back safely.',
  },
];

// SERVICES SECTION
export const SERVICES = [
  {
    title: 'Guided Trekking',
    icon: '/camp.svg',
    description:
      'Join experienced local guides on curated treks through the safest and most scenic trails.',
  },
  {
    title: 'Gear Rental',
    icon: '/folded-map.svg',
    description:
      'Rent tents, backpacks, and climbing gear on demand, delivered straight to your starting point.',
  },
  {
    title: 'Offline Navigation',
    icon: '/map.svg',
    description:
      'Download detailed trail maps that work even without signal, so you never lose your way.',
  },
  {
    title: 'Trip Planning',
    icon: '/calendar.svg',
    description:
      'Build a day-by-day itinerary and share it with your group so everyone stays in sync.',
  },
];

// PRICING SECTION
export const PRICING_PLANS = [
  {
    name: 'Explorer',
    price: 'Free',
    period: '',
    description: 'For casual hikers getting started with Travel Buddy.',
    features: [
      'Offline maps for 3 locations',
      'Basic trip scheduling',
      'Community trail reviews',
    ],
    variant: 'btn_outline_dark',
  },
  {
    name: 'Adventurer',
    price: '₹299',
    period: '/month',
    description: 'For regular climbers who explore every month.',
    features: [
      'Unlimited offline maps',
      'Augmented reality trail guide',
      'Group trip planning',
      'Priority local guide booking',
    ],
    variant: 'btn_green',
  },
  {
    name: 'Expedition Pro',
    price: '₹599',
    period: '/month',
    description: 'For serious expeditions and trekking teams.',
    features: [
      'Everything in Adventurer',
      'Offline gear rental discounts',
      'Dedicated safety support',
      'Custom expedition routes',
    ],
    variant: 'btn_dark_green',
  },
];

// CAMP SECTION
export const PEOPLE_URL = [
  '/person-1.png',
  '/person-2.png',
  '/person-3.png',
  '/person-4.png',
];

// FEATURES SECTION
export const FEATURES = [
  {
    title: 'Real Maps Can Be Offline',
    icon: '/map.svg',
    variant: 'green',
    description:
      'We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location',
  },
  {
    title: 'Set an Adventure Schedule',
    icon: '/calendar.svg',
    variant: 'green',
    description:
      "Schedule an adventure with friends. On holidays, there are many interesting offers from Travel Buddy. That way, there's no more discussion",
  },
  {
    title: 'Technology Using Augmented Reality',
    icon: '/tech.svg',
    variant: 'green',
    description:
      'Technology uses augmented reality as a guide to your hiking trail in the forest to the top of the mountain. Already supported by the latest technology without an internet connection',
  },
  {
    title: 'Many New Locations Every Month',
    icon: '/location.svg',
    variant: 'orange',
    description:
      'Lots of new locations every month, because we have a worldwide community of climbers who share their best experiences with climbing',
  },
];

// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    title: 'Learn More',
    links: [
      'About Travel Buddy',
      'Press Releases',
      'Environment',
      'Jobs',
      'Privacy Policy',
      'Contact Us',
    ],
  },
  {
    title: 'Our Community',
    links: ['Climbing Community', 'Hiking Trails', 'Travel Buddy Camps'],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: 'Contact Us',
  links: [
    { label: 'Admin Officer', value: '+91 98765 43210' },
    { label: 'Email Officer', value: 'hello@travelbuddy.in' },
  ],
};

export const SOCIALS = {
  title: 'Social',
  links: [
    '/facebook.svg',
    '/instagram.svg',
    '/twitter.svg',
    '/youtube.svg',
    '/wordpress.svg',
  ],
};
