import { RoomItem, AmenityItem, GalleryItem } from '../types';

import heroHotelImg from '../assets/images/hero_sanctuary_hotel_1791618760303.jpg';
import deluxeKingImg from '../assets/images/room_deluxe_king_suite_1791618778981.jpg';
import executiveDoubleImg from '../assets/images/room_executive_double_1791618795832.jpg';
import loungeInteriorImg from '../assets/images/hotel_lounge_interior_1791618810831.jpg';
import aberdeenHeritageImg from '../assets/images/aberdeen_city_heritage_1791618828090.jpg';

import amenityWifiImg from '../assets/images/amenity_wifi_1791621714104.jpg';
import amenityBathroomImg from '../assets/images/amenity_bathroom_1791621727343.jpg';
import amenityTeaCoffeeImg from '../assets/images/amenity_tea_coffee_1791621740233.jpg';
import amenityCarolinePlaceImg from '../assets/images/amenity_caroline_place_1791621755100.jpg';
import amenityHousekeepingImg from '../assets/images/amenity_housekeeping_1791621767631.jpg';
import amenityHeatingImg from '../assets/images/amenity_heating_1791621779985.jpg';
import amenityTvImg from '../assets/images/amenity_tv_1791621792423.jpg';
import amenityLuggageImg from '../assets/images/amenity_luggage_1791621804150.jpg';

export const HOTEL_INFO = {
  name: 'Sanctuary Hotel',
  tagline: 'Refined Comfort in Aberdeen',
  phone: '+447530322378',
  phoneDisplay: '+44 7530 322378',
  address: 'Caroline Pl, Aberdeen AB25 2TH, United Kingdom',
  postcode: 'AB25 2TH',
  city: 'Aberdeen',
  country: 'United Kingdom',
  email: 'reservations@sanctuaryhotelaberdeen.co.uk',
  checkInTime: 'From 15:00',
  checkOutTime: 'Until 11:00',
};

export const HOTEL_IMAGES = {
  hero: heroHotelImg,
  deluxeKing: deluxeKingImg,
  executiveDouble: executiveDoubleImg,
  lounge: loungeInteriorImg,
  aberdeenHeritage: aberdeenHeritageImg,
};

export const ROOMS_DATA: RoomItem[] = [
  {
    id: 'deluxe-king-suite',
    name: 'Deluxe King Suite',
    shortDesc: 'A spacious and lavish suite featuring a plush king-size bed, ornate wood detailing, and serene garden-view windows.',
    fullDesc: 'The Deluxe King Suite is Sanctuary Hotel’s premier retreat. Designed for exceptional comfort and tranquility, this room boasts an expansive king bed draped in premium linens, deep aubergine velvet accents, antique-style wood furnishings, a private en-suite bathroom with luxury toiletries, and an intimate seating nook bathed in gentle natural daylight.',
    image: deluxeKingImg,
    capacity: '2 Guests',
    bedType: '1 King Bed',
    size: '32 sq m',
    view: 'Garden & Historic Grounds',
    features: [
      'Private En-suite Bathroom',
      'Plush King-size Mattress & Egyptian Cotton Linens',
      'Complimentary High-Speed Wi-Fi',
      'Flat-Screen Smart Television',
      'Bespoke In-Room Tea & Coffee Station',
      'Daily Housekeeping Service',
      'Central Climate Heating Control',
      'Hairdryer & Fluffy Bath Towels'
    ]
  },
  {
    id: 'executive-double-room',
    name: 'Executive Double Room',
    shortDesc: 'Refined double accommodation with contemporary Scottish craftsmanship, tailored for solo travelers and couples.',
    fullDesc: 'Thoughtfully appointed with balanced proportions and warm lighting, the Executive Double Room provides an impeccably restful environment after a day exploring Aberdeen. Features include an upholstered double bed, dedicated desk vanity with vanity mirror, high-speed connectivity, and an en-suite shower room.',
    image: executiveDoubleImg,
    capacity: '2 Guests',
    bedType: '1 Double Bed',
    size: '24 sq m',
    view: 'Quiet Residential Street',
    features: [
      'En-suite Shower & Bathroom',
      'Comfortable Double Bed',
      'Complimentary High-Speed Wi-Fi',
      'Work Desk & Vanity Mirror',
      'Tea & Coffee Making Facilities',
      'Flat-Screen TV',
      'Wardrobe & Clothes Hanging Storage',
      'Iron & Ironing Board on Request'
    ]
  },
  {
    id: 'classic-double-room',
    name: 'Classic Double Room',
    shortDesc: 'A comfortable, warm double room offering peaceful residential surroundings and essential hospitality amenities.',
    fullDesc: 'The Classic Double Room combines quiet residential charm with full modern convenience. Enjoy restful sleep in Aberdeen’s Rosemount enclave, complete with tea and coffee facilities, fresh towels, en-suite bathroom facilities, and attentive guest service.',
    image: loungeInteriorImg,
    capacity: '2 Guests',
    bedType: '1 Double Bed',
    size: '20 sq m',
    view: 'Quiet Enclave Courtyard',
    features: [
      'En-suite Bathroom Facilities',
      'Quality Double Bedding',
      'Fast Wireless Internet',
      'Electric Kettle & Hot Drinks Selection',
      'Digital Television',
      'Bedside Reading Illumination',
      'Quiet Residential Location',
      'Luggage Storage Assistance'
    ]
  }
];

export const AMENITIES_DATA: AmenityItem[] = [
  {
    id: 'wifi',
    title: 'High-Speed Wi-Fi',
    description: 'Complimentary high-speed wireless connectivity available across all guest rooms and public hotel areas.',
    category: 'convenience',
    image: amenityWifiImg,
  },
  {
    id: 'ensuite',
    title: 'Private En-suite Bathrooms',
    description: 'All accommodations feature private en-suite bathroom facilities with fresh towels and essential toiletries.',
    category: 'comfort',
    image: amenityBathroomImg,
  },
  {
    id: 'tea-coffee',
    title: 'In-Room Tea & Coffee',
    description: 'Electric kettle and complimentary selection of fine teas, coffees, and hot beverages in every room.',
    category: 'comfort',
    image: amenityTeaCoffeeImg,
  },
  {
    id: 'quiet-location',
    title: 'Quiet Caroline Place Setting',
    description: 'Peaceful residential ambiance situated within easy walking and transit distance to Aberdeen city center.',
    category: 'convenience',
    image: amenityCarolinePlaceImg,
  },
  {
    id: 'housekeeping',
    title: 'Daily Housekeeping',
    description: 'Meticulous daily cleaning and fresh towel services to ensure your stay remains pristine and welcoming.',
    category: 'services',
    image: amenityHousekeepingImg,
  },
  {
    id: 'heating',
    title: 'Central Heating & Climate Control',
    description: 'Individual warmth and cozy temperature regulation for comfortable stays throughout all Scottish seasons.',
    category: 'comfort',
    image: amenityHeatingImg,
  },
  {
    id: 'entertainment',
    title: 'Flat-Screen Televisions',
    description: 'Digital entertainment in every room for quiet evenings and relaxation after exploring the Granite City.',
    category: 'convenience',
    image: amenityTvImg,
  },
  {
    id: 'luggage',
    title: 'Luggage Storage & Assistance',
    description: 'Secure luggage holding available for guests arriving prior to check-in or departing later in the afternoon.',
    category: 'services',
    image: amenityLuggageImg,
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Sanctuary Hotel Facade',
    category: 'aberdeen',
    image: heroHotelImg,
    caption: 'Classic granite exterior with warm lantern illumination at Caroline Place, Aberdeen.'
  },
  {
    id: 'g2',
    title: 'Deluxe King Suite Sanctuary',
    category: 'rooms',
    image: deluxeKingImg,
    caption: 'Opulent master bedroom with wood panelling, velvet accents, and grand window views.'
  },
  {
    id: 'g3',
    title: 'Executive Double Room',
    category: 'rooms',
    image: executiveDoubleImg,
    caption: 'Refined modern guest accommodation with warm ambient lighting and plush furnishings.'
  },
  {
    id: 'g4',
    title: 'Resident Guest Lounge',
    category: 'lounge',
    image: loungeInteriorImg,
    caption: 'Intimate drawing room and lounge area with dark wood detailing and warm fireplace glow.'
  },
  {
    id: 'g5',
    title: 'Historic Aberdeen Neighborhood',
    category: 'aberdeen',
    image: aberdeenHeritageImg,
    caption: 'Atmospheric granite streets and historic Scottish architecture surrounding Caroline Place.'
  }
];

export const LOCAL_ATTRACTIONS = [
  {
    name: 'His Majesty’s Theatre & Union Terrace',
    distance: '0.8 miles',
    desc: 'Aberdeen’s premier Edwardian theatre and beautifully restored sunken public gardens.'
  },
  {
    name: 'Union Street & City Centre',
    distance: '0.9 miles',
    desc: 'The vibrant granite thoroughfare with shopping, fine dining, cafes, and historic architecture.'
  },
  {
    name: 'Aberdeen Art Gallery & Museum',
    distance: '0.8 miles',
    desc: 'Award-winning cultural destination housing world-class Scottish and international collections.'
  },
  {
    name: 'Aberdeen Beach & Esplanade',
    distance: '1.9 miles',
    desc: 'Golden sandy coastline, seaside promenades, and scenic views of the North Sea.'
  }
];
