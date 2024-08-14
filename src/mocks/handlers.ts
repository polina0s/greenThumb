import { http, HttpResponse } from 'msw';

import img1 from '../assets/images/image 10.png';
import img2 from '../assets/images/image 13.png';
import img3 from '../assets/images/image 14.png';
import img4 from '../assets/images/image 16.png';

const plants = [
  {
    id: 1,
    name: 'Marble Queen Pothos',
    price: 350,
    description:
      'Marble queen pothos is a popular houseplant that is known for its beautiful foliage. It is a relatively easy plant to care for, making it a good choice for beginners.',
    images: [
      { src: img1, alt: 'Marble Queen Pothos', id: 1 },
      { src: img2, alt: 'Marble Queen Pothos', id: 2 },
      { src: img3, alt: 'Marble Queen Pothos', id: 3 },
      { src: img4, alt: 'Marble Queen Pothos', id: 4 },
    ],
    sizes: [
      { value: 'S', disabled: false },
      { value: 'M', disabled: false },
      { value: 'L', disabled: false },
    ],
  },
  {
    id: 2,
    name: 'Neon Pothos',
    price: 350,
    description:
      'Marble queen pothos is a popular houseplant that is known for its beautiful foliage. It is a relatively easy plant to care for, making it a good choice for beginners.',
    images: [
      { src: img1, alt: 'Marble Queen Pothos', id: 1 },
      { src: img2, alt: 'Marble Queen Pothos', id: 2 },
      { src: img3, alt: 'Marble Queen Pothos', id: 3 },
      { src: img4, alt: 'Marble Queen Pothos', id: 4 },
    ],
    sizes: [
      { value: 'S', disabled: false },
      { value: 'M', disabled: false },
      { value: 'L', disabled: false },
    ],
  },
  {
    id: 3,
    name: 'Syngonium Rayii',
    price: 350,
    description:
      'Marble queen pothos is a popular houseplant that is known for its beautiful foliage. It is a relatively easy plant to care for, making it a good choice for beginners.',
    images: [
      { src: img1, alt: 'Marble Queen Pothos', id: 1 },
      { src: img2, alt: 'Marble Queen Pothos', id: 2 },
      { src: img3, alt: 'Marble Queen Pothos', id: 3 },
      { src: img4, alt: 'Marble Queen Pothos', id: 4 },
    ],
    sizes: [
      { value: 'S', disabled: false },
      { value: 'M', disabled: false },
      { value: 'L', disabled: false },
    ],
  },
  {
    id: 4,
    name: 'Peruvian Cactus',
    price: 350,
    description:
      'Marble queen pothos is a popular houseplant that is known for its beautiful foliage. It is a relatively easy plant to care for, making it a good choice for beginners.',
    images: [
      { src: img1, alt: 'Marble Queen Pothos', id: 1 },
      { src: img2, alt: 'Marble Queen Pothos', id: 2 },
      { src: img3, alt: 'Marble Queen Pothos', id: 3 },
      { src: img4, alt: 'Marble Queen Pothos', id: 4 },
    ],
    sizes: [
      { value: 'S', disabled: false },
      { value: 'M', disabled: false },
      { value: 'L', disabled: false },
    ],
  },
  {
    id: 5,
    name: 'Pineapple',
    price: 350,
    description:
      'Marble queen pothos is a popular houseplant that is known for its beautiful foliage. It is a relatively easy plant to care for, making it a good choice for beginners.',
    images: [
      { src: img1, alt: 'Marble Queen Pothos', id: 1 },
      { src: img2, alt: 'Marble Queen Pothos', id: 2 },
      { src: img3, alt: 'Marble Queen Pothos', id: 3 },
      { src: img4, alt: 'Marble Queen Pothos', id: 4 },
    ],
    sizes: [
      { value: 'S', disabled: false },
      { value: 'M', disabled: false },
      { value: 'L', disabled: false },
    ],
  },
  {
    id: 6,
    name: 'African Milk Tree',
    price: 350,
    description:
      'Marble queen pothos is a popular houseplant that is known for its beautiful foliage. It is a relatively easy plant to care for, making it a good choice for beginners.',
    images: [
      { src: img1, alt: 'Marble Queen Pothos', id: 1 },
      { src: img2, alt: 'Marble Queen Pothos', id: 2 },
      { src: img3, alt: 'Marble Queen Pothos', id: 3 },
      { src: img4, alt: 'Marble Queen Pothos', id: 4 },
    ],
    sizes: [
      { value: 'S', disabled: false },
      { value: 'M', disabled: false },
      { value: 'L', disabled: false },
    ],
  },
  {
    id: 7,
    name: 'Pothos',
    price: 350,
    description:
      'Marble queen pothos is a popular houseplant that is known for its beautiful foliage. It is a relatively easy plant to care for, making it a good choice for beginners.',
    images: [
      { src: img1, alt: 'Marble Queen Pothos', id: 1 },
      { src: img2, alt: 'Marble Queen Pothos', id: 2 },
      { src: img3, alt: 'Marble Queen Pothos', id: 3 },
      { src: img4, alt: 'Marble Queen Pothos', id: 4 },
    ],
    sizes: [
      { value: 'S', disabled: false },
      { value: 'M', disabled: false },
      { value: 'L', disabled: false },
    ],
  },
  {
    id: 8,
    name: 'Chinese Evergreen',
    price: 350,
    description:
      'Marble queen pothos is a popular houseplant that is known for its beautiful foliage. It is a relatively easy plant to care for, making it a good choice for beginners.',
    images: [
      { src: img1, alt: 'Marble Queen Pothos', id: 1 },
      { src: img2, alt: 'Marble Queen Pothos', id: 2 },
      { src: img3, alt: 'Marble Queen Pothos', id: 3 },
      { src: img4, alt: 'Marble Queen Pothos', id: 4 },
    ],
    sizes: [
      { value: 'S', disabled: false },
      { value: 'M', disabled: false },
      { value: 'L', disabled: false },
    ],
  },
  {
    id: 9,
    name: 'String of Hearts',
    price: 350,
    description:
      'Marble queen pothos is a popular houseplant that is known for its beautiful foliage. It is a relatively easy plant to care for, making it a good choice for beginners.',
    images: [
      { src: img1, alt: 'Marble Queen Pothos', id: 1 },
      { src: img2, alt: 'Marble Queen Pothos', id: 2 },
      { src: img3, alt: 'Marble Queen Pothos', id: 3 },
      { src: img4, alt: 'Marble Queen Pothos', id: 4 },
    ],
    sizes: [
      { value: 'S', disabled: false },
      { value: 'M', disabled: false },
      { value: 'L', disabled: false },
    ],
  },
  {
    id: 10,
    name: 'Red Secret Alocasia',
    price: 350,
    description:
      'Marble queen pothos is a popular houseplant that is known for its beautiful foliage. It is a relatively easy plant to care for, making it a good choice for beginners.',
    images: [
      { src: img1, alt: 'Marble Queen Pothos', id: 1 },
      { src: img2, alt: 'Marble Queen Pothos', id: 2 },
      { src: img3, alt: 'Marble Queen Pothos', id: 3 },
      { src: img4, alt: 'Marble Queen Pothos', id: 4 },
    ],
    sizes: [
      { value: 'S', disabled: false },
      { value: 'M', disabled: false },
      { value: 'L', disabled: false },
    ],
  },
];

export const handlers = [
  http.get('http://localhost:8000/shopItems/:id', ({ params }) => {
    const { id } = params;
    const plant = plants.find((el) => el.id === +id);
    return HttpResponse.json(plant);
  }),
  http.get('http://localhost:8000/shopItems', () => {
    return HttpResponse.json({
      items: plants,
    });
  }),
];
