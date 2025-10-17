import {OfferProps} from '../types/offer.ts';
import {CardType} from '../types/cities-card.ts';

export const offers: OfferProps[] = [
  {
    id: '2efbdbe4-96cd-4d31-9708-30b718cc66af',
    title: 'House in countryside',
    type: CardType.Room,
    price: 249,
    city: {
      name: 'Astana',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.868610000000004,
      longitude: 2.342499,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 1,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 1,
    goods: [
      'Kitchen',
      'Washing machine',
      'Washer',
      'Wi-Fi',
      'Laptop friendly workspace'
    ],
    host: {
      name: 'Evgenia',
      avatarUrl: 'https://14.design.htmlacademy.pro/static/host/avatar-angelina.jpg',
      isPro: true
    },
    images: [
      'https://14.design.htmlacademy.pro/static/hotel/19.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/4.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/3.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/2.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/15.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/10.jpg'
    ],
    maxAdults: 3,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/14.jpg'
  },

  {
    id: 'ea0b32c9-aa1e-4310-b403-010526c7966f',
    title: 'Perfectly located Castro',
    description: 'Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.',
    type: CardType.House,
    price: 651,
    images: [
      'https://14.design.htmlacademy.pro/static/hotel/19.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/13.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/12.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/10.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/15.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/18.jpg'
    ],
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.87961000000001,
      longitude: 2.353499,
      zoom: 16
    },
    goods: [
      'Laptop friendly workspace',
      'Fridge',
      'Cable TV',
      'Air conditioning',
      'Washer',
      'Dishwasher'
    ],
    host: {
      isPro: true,
      name: 'Kora',
      avatarUrl: 'https://14.design.htmlacademy.pro/static/host/avatar-angelina.jpg'
    },
    isPremium: false,
    isFavorite: false,
    rating: 3.2,
    bedrooms: 3,
    maxAdults: 10,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/8.jpg'
  },

  {
    id: 'abd4505f-f003-4571-871e-a27758cf8c83',
    title: 'The Pondhouse - A Magical Place',
    description: 'I rent out a very sunny and bright apartment only 7 minutes walking distance to the metro station. The apartment has a spacious living room with a kitchen, one bedroom and a bathroom with mit bath. A terrace can be used in summer.',
    type: CardType.Room,
    price: 103,
    images: [
      'https://14.design.htmlacademy.pro/static/hotel/1.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/14.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/15.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/12.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/9.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/10.jpg'
    ],
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.834610000000005,
      longitude: 2.335499,
      zoom: 16
    },
    goods: [
      'Heating',
      'Kitchen',
      'Washer',
      'Fridge',
      'Baby seat',
      'Towels',
      'Air conditioning',
      'Coffee machine',
      'Dishwasher',
      'Breakfast',
      'Cable TV',
      'Washing machine',
      'Wi-Fi'
    ],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl: 'https://14.design.htmlacademy.pro/static/host/avatar-angelina.jpg'
    },
    isPremium: true,
    isFavorite: false,
    rating: 1.5,
    bedrooms: 1,
    maxAdults: 3,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/13.jpg'
  },

  {
    id: 'b51fb7aa-a95a-4b36-91a8-2a6d346fbda2',
    title: 'The Pondhouse - A Magical Place',
    description: 'I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!',
    type: CardType.House,
    price: 115,
    images: [
      'https://14.design.htmlacademy.pro/static/hotel/14.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/11.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/20.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/9.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/1.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/8.jpg'
    ],
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.85761,
      longitude: 2.358499,
      zoom: 16
    },
    goods: [
      'Cable TV',
      'Air conditioning',
      'Breakfast',
      'Coffee machine',
      'Laptop friendly workspace',
      'Towels',
      'Fridge',
      'Baby seat',
      'Kitchen'
    ],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl: 'https://14.design.htmlacademy.pro/static/host/avatar-angelina.jpg'
    },
    isPremium: true,
    isFavorite: true,
    rating: 4,
    bedrooms: 5,
    maxAdults: 10,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/6.jpg'
  }

];
