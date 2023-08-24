let products = [
  {
    id: '1',
    title: 'Zelda, Tears of the Kingdom',
    colors: ['Red'],
    sizes: [36, 38, 40, 42, 44, 46],
  },
  {
    id: '2',
    title: 'Final Fantasy 7 Remake',
    colors: ['Yellow', 'Blue'],
    sizes: [36, 38, 40, 42, 44, 46],
  },
  {
    id: '3',
    title: 'Elden Ring',
    colors: ['Yellow', 'Blue', 'Green'],
    sizes: [36, 38, 40, 42, 44, 46],
  },
  {
    id: '4',
    title: 'Mario Kart',
    colors: ['Red'],
    sizes: [36, 38, 40, 42, 44, 46],
  },
  {
    id: '5',
    title: 'Pokemon Scarlet',
    colors: ['Yellow', 'Blue', 'Green'],
    sizes: [36, 38, 40, 42, 44, 46],
  },
];

let authors = [
  { id: '1', name: 'Mario', isAdmin: true },
  { id: '2', name: 'Yoshi', isAdmin: false },
  { id: '3', name: 'Peach', isAdmin: true },
];

let reviews = [
  {
    id: '1',
    rating: 9,
    content: 'lorem ipsum',
    author_id: '1',
    product_id: '2',
  },
  {
    id: '2',
    rating: 10,
    content: 'lorem ipsum',
    author_id: '2',
    product_id: '1',
  },
  {
    id: '3',
    rating: 7,
    content: 'lorem ipsum',
    author_id: '3',
    product_id: '3',
  },
  {
    id: '4',
    rating: 5,
    content: 'lorem ipsum',
    author_id: '2',
    product_id: '4',
  },
  {
    id: '5',
    rating: 8,
    content: 'lorem ipsum',
    author_id: '2',
    product_id: '5',
  },
  {
    id: '6',
    rating: 7,
    content: 'lorem ipsum',
    author_id: '1',
    product_id: '2',
  },
  {
    id: '7',
    rating: 10,
    content: 'lorem ipsum',
    author_id: '3',
    product_id: '1',
  },
];

export default { products, authors, reviews };
