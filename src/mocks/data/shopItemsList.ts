import african1 from '../../assets/images/1-African-Milk-Tree.png';
import chinese1 from '../../assets/images/1-Chinese-Evergreen.png';
import peruvian1 from '../../assets/images/1-Peruvian.png';
import pineapple1 from '../../assets/images/1-Pineapple.png';
import pothos1 from '../../assets/images/1-Pothos.png';
import neonPothos1 from '../../assets/images/1-Pothos-Neon.png';
import red1 from '../../assets/images/1-Red-Secret-Alocasia.png';
import strings1 from '../../assets/images/1-String-Of-Hearts.png';
import syngonium4 from '../../assets/images/1-Syngonium.png';
import african2 from '../../assets/images/2-African-Milk-Tree.png';
import chinese2 from '../../assets/images/2-Chinese-Evergreen.png';
import peruvian2 from '../../assets/images/2-Peruvian.png';
import pineapple2 from '../../assets/images/2-Pineapple.png';
import pothos2 from '../../assets/images/2-Pothos.png';
import neonPothos2 from '../../assets/images/2-Pothos-Neon.png';
import red2 from '../../assets/images/2-Red-Secret-Alocasia.png';
import strings2 from '../../assets/images/2-String-Of-Hearts.png';
import syngonium1 from '../../assets/images/2-Syngonium.png';
import african3 from '../../assets/images/3-African-Milk-Tree.png';
import chinese3 from '../../assets/images/3-Chinese-Evergreen.png';
import peruvian3 from '../../assets/images/3-Peruvian.png';
import pineapple3 from '../../assets/images/3-Pineapple.png';
import pothos3 from '../../assets/images/3-Pothos.png';
import neonPothos3 from '../../assets/images/3-Pothos-Neon.png';
import red3 from '../../assets/images/3-Red-Secret-Alocasia.png';
import strings3 from '../../assets/images/3-String-Of-Hearts.png';
import syngonium2 from '../../assets/images/3-Syngonium.png';
import african4 from '../../assets/images/4-African-Milk-Tree.png';
import chinese4 from '../../assets/images/4-Chinese-Evergreen.png';
import peruvian4 from '../../assets/images/4-Peruvian.png';
import pineapple4 from '../../assets/images/4-Pineapple.png';
import pothos4 from '../../assets/images/4-Pothos.png';
import neonPothos4 from '../../assets/images/4-Pothos-Neon.png';
import red4 from '../../assets/images/4-Red-Secret-Alocasia.png';
import strings4 from '../../assets/images/4-String-Of-Hearts.png';
import syngonium3 from '../../assets/images/4-Syngonium.png';
import img1 from '../../assets/images/image 10.png';
import img2 from '../../assets/images/image 13.png';
import img3 from '../../assets/images/image 14.png';
import img4 from '../../assets/images/image 16.png';

export const shopItems = [
  {
    id: 1,
    category: 'bonsai',
    type: 'planter',
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
    care: [
      { id: 1, name: 'Watering', text: 'Once a week or two.' },
      { id: 2, name: 'Sunlight', text: 'Bright, indirect sunlight.' },
      {
        id: 3,
        name: 'Soil & Fertilizing',
        text: 'A mix with equal parts potting soil, perlite, and peat moss promotes aeration and drainage, crucial to prevent root rot.',
      },
      { id: 4, name: 'Humidity', text: '40-60%.' },
      {
        id: 5,
        name: 'Toxicity',
        text: 'Chewing or biting into this plant will release these crystals causing tissue penetration and irritation the mouth and GI tract.',
      },
      {
        id: 6,
        name: 'Benefits',
        text: 'Help remove formaldehyde and benzene fumes form the air.',
      },
      {
        id: 7,
        name: 'Origin story',
        text: 'Traces its roots to the Society Islands of French Polynesia.',
      },
      {
        id: 8,
        name: 'Scientific',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      },
    ],
  },
  {
    id: 2,
    category: 'bonsai',
    type: 'planter',
    name: 'Neon Pothos',
    price: 450,
    description:
      'Marble queen pothos is a popular houseplant that is known for its beautiful foliage. It is a relatively easy plant to care for, making it a good choice for beginners.',
    images: [
      { src: neonPothos1, alt: 'Neon Pothos', id: 1 },
      { src: neonPothos2, alt: 'Neon Pothos', id: 2 },
      { src: neonPothos3, alt: 'Neon Pothos', id: 3 },
      { src: neonPothos4, alt: 'Neon Pothos', id: 4 },
    ],
    sizes: [
      { value: 'S', disabled: false },
      { value: 'M', disabled: false },
      { value: 'L', disabled: false },
    ],
    care: [
      { id: 1, name: 'Watering', text: 'Once a week or two.' },
      { id: 2, name: 'Sunlight', text: 'Bright, indirect sunlight.' },
      {
        id: 3,
        name: 'Soil & Fertilizing',
        text: 'A mix with equal parts potting soil, perlite, and peat moss promotes aeration and drainage, crucial to prevent root rot.',
      },
      { id: 4, name: 'Humidity', text: '40-60%.' },
      {
        id: 5,
        name: 'Toxicity',
        text: 'Chewing or biting into this plant will release these crystals causing tissue penetration and irritation the mouth and GI tract.',
      },
      {
        id: 6,
        name: 'Benefits',
        text: 'Help remove formaldehyde and benzene fumes form the air.',
      },
      {
        id: 7,
        name: 'Origin story',
        text: 'Traces its roots to the Society Islands of French Polynesia.',
      },
      {
        id: 8,
        name: 'Scientific',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      },
    ],
  },
  {
    id: 3,
    category: 'cacti',
    type: 'flowers',
    name: 'Syngonium Rayii',
    price: 850,
    description:
      'Marble queen pothos is a popular houseplant that is known for its beautiful foliage. It is a relatively easy plant to care for, making it a good choice for beginners.',
    images: [
      { src: syngonium1, alt: 'Syngonium Rayii', id: 1 },
      { src: syngonium2, alt: 'Syngonium Rayii', id: 2 },
      { src: syngonium3, alt: 'Syngonium Rayii', id: 3 },
      { src: syngonium4, alt: 'Syngonium Rayii', id: 4 },
    ],
    sizes: [
      { value: 'S', disabled: false },
      { value: 'M', disabled: false },
      { value: 'L', disabled: false },
    ],
    care: [
      { id: 1, name: 'Watering', text: 'Once a week or two.' },
      { id: 2, name: 'Sunlight', text: 'Bright, indirect sunlight.' },
      {
        id: 3,
        name: 'Soil & Fertilizing',
        text: 'A mix with equal parts potting soil, perlite, and peat moss promotes aeration and drainage, crucial to prevent root rot.',
      },
      { id: 4, name: 'Humidity', text: '40-60%.' },
      {
        id: 5,
        name: 'Toxicity',
        text: 'Chewing or biting into this plant will release these crystals causing tissue penetration and irritation the mouth and GI tract.',
      },
      {
        id: 6,
        name: 'Benefits',
        text: 'Help remove formaldehyde and benzene fumes form the air.',
      },
      {
        id: 7,
        name: 'Origin story',
        text: 'Traces its roots to the Society Islands of French Polynesia.',
      },
      {
        id: 8,
        name: 'Scientific',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      },
    ],
  },
  {
    id: 4,
    category: 'cacti',
    type: 'flowers',
    name: 'Peruvian Cactus',
    price: 450,
    description:
      'Marble queen pothos is a popular houseplant that is known for its beautiful foliage. It is a relatively easy plant to care for, making it a good choice for beginners.',
    images: [
      { src: peruvian1, alt: 'Marble Queen Pothos', id: 1 },
      { src: peruvian2, alt: 'Marble Queen Pothos', id: 2 },
      { src: peruvian3, alt: 'Marble Queen Pothos', id: 3 },
      { src: peruvian4, alt: 'Marble Queen Pothos', id: 4 },
    ],
    sizes: [
      { value: 'S', disabled: false },
      { value: 'M', disabled: false },
      { value: 'L', disabled: false },
    ],
    care: [
      { id: 1, name: 'Watering', text: 'Once a week or two.' },
      { id: 2, name: 'Sunlight', text: 'Bright, indirect sunlight.' },
      {
        id: 3,
        name: 'Soil & Fertilizing',
        text: 'A mix with equal parts potting soil, perlite, and peat moss promotes aeration and drainage, crucial to prevent root rot.',
      },
      { id: 4, name: 'Humidity', text: '40-60%.' },
      {
        id: 5,
        name: 'Toxicity',
        text: 'Chewing or biting into this plant will release these crystals causing tissue penetration and irritation the mouth and GI tract.',
      },
      {
        id: 6,
        name: 'Benefits',
        text: 'Help remove formaldehyde and benzene fumes form the air.',
      },
      {
        id: 7,
        name: 'Origin story',
        text: 'Traces its roots to the Society Islands of French Polynesia.',
      },
      {
        id: 8,
        name: 'Scientific',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      },
    ],
  },
  {
    id: 5,
    category: 'creepers',
    type: 'flowers',
    name: 'Pineapple',
    price: 670,
    description:
      'Marble queen pothos is a popular houseplant that is known for its beautiful foliage. It is a relatively easy plant to care for, making it a good choice for beginners.',
    images: [
      { src: pineapple1, alt: 'Pineapple', id: 1 },
      { src: pineapple2, alt: 'Pineapple', id: 2 },
      { src: pineapple3, alt: 'Pineapple', id: 3 },
      { src: pineapple4, alt: 'Pineapple', id: 4 },
    ],
    sizes: [
      { value: 'S', disabled: false },
      { value: 'M', disabled: false },
      { value: 'L', disabled: false },
    ],
    care: [
      { id: 1, name: 'Watering', text: 'Once a week or two.' },
      { id: 2, name: 'Sunlight', text: 'Bright, indirect sunlight.' },
      {
        id: 3,
        name: 'Soil & Fertilizing',
        text: 'A mix with equal parts potting soil, perlite, and peat moss promotes aeration and drainage, crucial to prevent root rot.',
      },
      { id: 4, name: 'Humidity', text: '40-60%.' },
      {
        id: 5,
        name: 'Toxicity',
        text: 'Chewing or biting into this plant will release these crystals causing tissue penetration and irritation the mouth and GI tract.',
      },
      {
        id: 6,
        name: 'Benefits',
        text: 'Help remove formaldehyde and benzene fumes form the air.',
      },
      {
        id: 7,
        name: 'Origin story',
        text: 'Traces its roots to the Society Islands of French Polynesia.',
      },
      {
        id: 8,
        name: 'Scientific',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      },
    ],
  },
  {
    id: 6,
    category: 'succulents',
    type: 'care',
    name: 'African Milk Tree',
    price: 590,
    description:
      'Marble queen pothos is a popular houseplant that is known for its beautiful foliage. It is a relatively easy plant to care for, making it a good choice for beginners.',
    images: [
      { src: african1, alt: 'African Milk Tree', id: 1 },
      { src: african2, alt: 'African Milk Tree', id: 2 },
      { src: african3, alt: 'African Milk Tree', id: 3 },
      { src: african4, alt: 'African Milk Tree', id: 4 },
    ],
    sizes: [
      { value: 'S', disabled: false },
      { value: 'M', disabled: false },
      { value: 'L', disabled: false },
    ],
    care: [
      { id: 1, name: 'Watering', text: 'Once a week or two.' },
      { id: 2, name: 'Sunlight', text: 'Bright, indirect sunlight.' },
      {
        id: 3,
        name: 'Soil & Fertilizing',
        text: 'A mix with equal parts potting soil, perlite, and peat moss promotes aeration and drainage, crucial to prevent root rot.',
      },
      { id: 4, name: 'Humidity', text: '40-60%.' },
      {
        id: 5,
        name: 'Toxicity',
        text: 'Chewing or biting into this plant will release these crystals causing tissue penetration and irritation the mouth and GI tract.',
      },
      {
        id: 6,
        name: 'Benefits',
        text: 'Help remove formaldehyde and benzene fumes form the air.',
      },
      {
        id: 7,
        name: 'Origin story',
        text: 'Traces its roots to the Society Islands of French Polynesia.',
      },
      {
        id: 8,
        name: 'Scientific',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      },
    ],
  },
  {
    id: 7,
    category: 'seeds',
    type: 'care',
    name: 'Pothos',
    price: 990,
    description:
      'Marble queen pothos is a popular houseplant that is known for its beautiful foliage. It is a relatively easy plant to care for, making it a good choice for beginners.',
    images: [
      { src: pothos1, alt: 'Pothos', id: 1 },
      { src: pothos2, alt: 'Pothos', id: 2 },
      { src: pothos3, alt: 'Pothos', id: 3 },
      { src: pothos4, alt: 'Pothos', id: 4 },
    ],
    sizes: [
      { value: 'S', disabled: false },
      { value: 'M', disabled: false },
      { value: 'L', disabled: false },
    ],
    care: [
      { id: 1, name: 'Watering', text: 'Once a week or two.' },
      { id: 2, name: 'Sunlight', text: 'Bright, indirect sunlight.' },
      {
        id: 3,
        name: 'Soil & Fertilizing',
        text: 'A mix with equal parts potting soil, perlite, and peat moss promotes aeration and drainage, crucial to prevent root rot.',
      },
      { id: 4, name: 'Humidity', text: '40-60%.' },
      {
        id: 5,
        name: 'Toxicity',
        text: 'Chewing or biting into this plant will release these crystals causing tissue penetration and irritation the mouth and GI tract.',
      },
      {
        id: 6,
        name: 'Benefits',
        text: 'Help remove formaldehyde and benzene fumes form the air.',
      },
      {
        id: 7,
        name: 'Origin story',
        text: 'Traces its roots to the Society Islands of French Polynesia.',
      },
      {
        id: 8,
        name: 'Scientific',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      },
    ],
  },
  {
    id: 8,
    category: 'gifts',
    type: 'heatPack',
    name: 'Chinese Evergreen',
    price: 250,
    description:
      'Marble queen pothos is a popular houseplant that is known for its beautiful foliage. It is a relatively easy plant to care for, making it a good choice for beginners.',
    images: [
      { src: chinese1, alt: 'Chinese Evergreen', id: 1 },
      { src: chinese2, alt: 'Chinese Evergreen', id: 2 },
      { src: chinese3, alt: 'Chinese Evergreen', id: 3 },
      { src: chinese4, alt: 'Chinese Evergreen', id: 4 },
    ],
    sizes: [
      { value: 'S', disabled: false },
      { value: 'M', disabled: false },
      { value: 'L', disabled: false },
    ],
    care: [
      { id: 1, name: 'Watering', text: 'Once a week or two.' },
      { id: 2, name: 'Sunlight', text: 'Bright, indirect sunlight.' },
      {
        id: 3,
        name: 'Soil & Fertilizing',
        text: 'A mix with equal parts potting soil, perlite, and peat moss promotes aeration and drainage, crucial to prevent root rot.',
      },
      { id: 4, name: 'Humidity', text: '40-60%.' },
      {
        id: 5,
        name: 'Toxicity',
        text: 'Chewing or biting into this plant will release these crystals causing tissue penetration and irritation the mouth and GI tract.',
      },
      {
        id: 6,
        name: 'Benefits',
        text: 'Help remove formaldehyde and benzene fumes form the air.',
      },
      {
        id: 7,
        name: 'Origin story',
        text: 'Traces its roots to the Society Islands of French Polynesia.',
      },
      {
        id: 8,
        name: 'Scientific',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      },
    ],
  },
  {
    id: 9,
    category: 'gifts',
    type: 'heatPack',
    name: 'String of Hearts',
    price: 620,
    description:
      'Marble queen pothos is a popular houseplant that is known for its beautiful foliage. It is a relatively easy plant to care for, making it a good choice for beginners.',
    images: [
      { src: strings1, alt: 'String of Hearts', id: 1 },
      { src: strings2, alt: 'String of Hearts', id: 2 },
      { src: strings3, alt: 'String of Hearts', id: 3 },
      { src: strings4, alt: 'String of Hearts', id: 4 },
    ],
    sizes: [
      { value: 'S', disabled: false },
      { value: 'M', disabled: false },
      { value: 'L', disabled: false },
    ],
    care: [
      { id: 1, name: 'Watering', text: 'Once a week or two.' },
      { id: 2, name: 'Sunlight', text: 'Bright, indirect sunlight.' },
      {
        id: 3,
        name: 'Soil & Fertilizing',
        text: 'A mix with equal parts potting soil, perlite, and peat moss promotes aeration and drainage, crucial to prevent root rot.',
      },
      { id: 4, name: 'Humidity', text: '40-60%.' },
      {
        id: 5,
        name: 'Toxicity',
        text: 'Chewing or biting into this plant will release these crystals causing tissue penetration and irritation the mouth and GI tract.',
      },
      {
        id: 6,
        name: 'Benefits',
        text: 'Help remove formaldehyde and benzene fumes form the air.',
      },
      {
        id: 7,
        name: 'Origin story',
        text: 'Traces its roots to the Society Islands of French Polynesia.',
      },
      {
        id: 8,
        name: 'Scientific',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      },
    ],
  },
  {
    id: 10,
    name: 'Red Secret Alocasia',
    type: 'heatPack',
    price: 350,
    description:
      'Marble queen pothos is a popular houseplant that is known for its beautiful foliage. It is a relatively easy plant to care for, making it a good choice for beginners.',
    images: [
      { src: red1, alt: 'Red Secret Alocasia', id: 1 },
      { src: red2, alt: 'Red Secret Alocasia', id: 2 },
      { src: red3, alt: 'Red Secret Alocasia', id: 3 },
      { src: red4, alt: 'Red Secret Alocasia', id: 4 },
    ],
    sizes: [
      { value: 'S', disabled: false },
      { value: 'M', disabled: false },
      { value: 'L', disabled: false },
    ],
    care: [
      { id: 1, name: 'Watering', text: 'Once a week or two.' },
      { id: 2, name: 'Sunlight', text: 'Bright, indirect sunlight.' },
      {
        id: 3,
        name: 'Soil & Fertilizing',
        text: 'A mix with equal parts potting soil, perlite, and peat moss promotes aeration and drainage, crucial to prevent root rot.',
      },
      { id: 4, name: 'Humidity', text: '40-60%.' },
      {
        id: 5,
        name: 'Toxicity',
        text: 'Chewing or biting into this plant will release these crystals causing tissue penetration and irritation the mouth and GI tract.',
      },
      {
        id: 6,
        name: 'Benefits',
        text: 'Help remove formaldehyde and benzene fumes form the air.',
      },
      {
        id: 7,
        name: 'Origin story',
        text: 'Traces its roots to the Society Islands of French Polynesia.',
      },
      {
        id: 8,
        name: 'Scientific',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      },
    ],
  },
];
