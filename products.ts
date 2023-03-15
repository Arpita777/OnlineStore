const products = [
  {
    id: 1,
    name: 'iPhone 9',
    description: 'An apple mobile which is nothing like apple',
    actualprice: 549,
    suggestedprice: 243,
    discountPercentage: 12.96,
    picture: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
  },
  {
    id: 2,
    name: 'iPhone X',
    description:
      'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...',
    actualprice: 899,
    suggestedprice: 587,
    discountPercentage: 17.94,
    picture: 'https://i.dummyjson.com/data/products/2/thumbnail.jpg',
  },
  {
    id: 3,
    name: 'Samsung Universe 9',
    description:
      "Samsung's new variant which goes beyond Galaxy to the Universe",
    actualprice: 1249,
    suggestedprice: 877,
    discountPercentage: 15.46,
    picture: 'https://i.dummyjson.com/data/products/3/thumbnail.jpg',
  },
  {
    id: 4,
    name: 'OPPOF19',
    description: 'OPPO F19 is officially announced on April 2021.',
    actualprice: 280,
    suggestedprice: 112,
    discountPercentage: 17.91,
    picture: 'https://i.dummyjson.com/data/products/4/thumbnail.jpg',
  },
  {
    id: 5,
    name: 'Huawei P30',
    description:
      'Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.',
    actualprice: 499,
    suggestedprice: 233,
    discountPercentage: 10.58,
    picture: 'https://i.dummyjson.com/data/products/5/thumbnail.jpg',
  },
  {
    id: 6,
    name: 'MacBook Pro',
    description:
      'MacBook Pro 2021 with mini-LED display may launch between September, November',
    actualprice: 1749,
    suggestedprice: 800,
    discountPercentage: 11.02,
    picture: 'https://i.dummyjson.com/data/products/6/thumbnail.png',
  },
  {
    id: 7,
    name: 'Samsung Galaxy Book',
    description:
      'Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched',
    actualprice: 1499,
    suggestedprice: 800,
    discountPercentage: 4.15,
    picture: 'https://i.dummyjson.com/data/products/7/thumbnail.jpg',
  },
  {
    id: 8,
    name: 'Microsoft Surface Laptop 4',
    description:
      'Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.',
    actualprice: 1499,
    suggestedprice: 600,
    discountPercentage: 10.23,
    picture: 'https://i.dummyjson.com/data/products/8/thumbnail.jpg',
  },
  {
    id: 9,
    name: 'Infinix INBOOK',
    description:
      'Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty',
    actualprice: 1099,
    suggestedprice: 500,
    discountPercentage: 11.83,
    picture: 'https://i.dummyjson.com/data/products/9/thumbnail.jpg',
  },
  {
    id: 10,
    name: 'HP Pavilion 15-DK1056WM',
    description:
      'HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10',
    actualprice: 1099,
    suggestedprice: 788,
    discountPercentage: 6.18,
    picture: 'https://i.dummyjson.com/data/products/10/thumbnail.jpeg',
  },
  {
    id: 11,
    name: 'iPhone 9',
    description: 'An apple mobile which is nothing like apple',
    actualprice: 549,
    suggestedprice: 243,
    discountPercentage: 12.96,
    picture: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
  },
  {
    id: 12,
    name: 'iPhone X',
    description:
      'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...',
    actualprice: 899,
    suggestedprice: 587,
    discountPercentage: 17.94,
    picture: 'https://i.dummyjson.com/data/products/2/thumbnail.jpg',
  },
  {
    id: 13,
    name: 'Samsung Universe 9',
    description:
      "Samsung's new variant which goes beyond Galaxy to the Universe",
    actualprice: 1249,
    suggestedprice: 877,
    discountPercentage: 15.46,
    picture: 'https://i.dummyjson.com/data/products/3/thumbnail.jpg',
  },
  {
    id: 14,
    name: 'OPPOF19',
    description: 'OPPO F19 is officially announced on April 2021.',
    actualprice: 280,
    suggestedprice: 112,
    discountPercentage: 17.91,
    picture: 'https://i.dummyjson.com/data/products/4/thumbnail.jpg',
  },
  {
    id: 15,
    name: 'Huawei P30',
    description:
      'Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.',
    actualprice: 499,
    suggestedprice: 233,
    discountPercentage: 10.58,
    picture: 'https://i.dummyjson.com/data/products/5/thumbnail.jpg',
  },
  {
    id: 16,
    name: 'MacBook Pro',
    description:
      'MacBook Pro 2021 with mini-LED display may launch between September, November',
    actualprice: 1749,
    suggestedprice: 800,
    discountPercentage: 11.02,
    picture: 'https://i.dummyjson.com/data/products/6/thumbnail.png',
  },
  {
    id: 17,
    name: 'Samsung Galaxy Book',
    description:
      'Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched',
    actualprice: 1499,
    suggestedprice: 800,
    discountPercentage: 4.15,
    picture: 'https://i.dummyjson.com/data/products/7/thumbnail.jpg',
  },
  {
    id: 18,
    name: 'Microsoft Surface Laptop 4',
    description:
      'Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.',
    actualprice: 1499,
    suggestedprice: 600,
    discountPercentage: 10.23,
    picture: 'https://i.dummyjson.com/data/products/8/thumbnail.jpg',
  },
  {
    id: 19,
    name: 'Infinix INBOOK',
    description:
      'Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty',
    actualprice: 1099,
    suggestedprice: 500,
    discountPercentage: 11.83,
    picture: 'https://i.dummyjson.com/data/products/9/thumbnail.jpg',
  },
  {
    id: 20,
    name: 'HP Pavilion 15-DK1056WM',
    description:
      'HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10',
    actualprice: 1099,
    suggestedprice: 788,
    discountPercentage: 6.18,
    picture: 'https://i.dummyjson.com/data/products/10/thumbnail.jpeg',
  },
];
export default products;
