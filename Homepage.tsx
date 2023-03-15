import * as React from 'react';
import { useState } from 'react';
import products from './products';
import Card from './Card';
import './style.css';
const Homepage = () => {
  const [query, setQuery] = useState('');
  const [productsList, setProductsList] = useState(products);
  const onSearch = (query: string) => {
    let temp = products.filter(
      (p) => query == '' || p.name.toLowerCase().includes(query.toLowerCase())
    );
    setProductsList(temp);
    setQuery(query);
  };
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <input
        type="text"
        value={query}
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Type to Search Product"
      />
      <div className="container">
        {productsList.map((product) => (
          <Card key={product.id} details={product} />
        ))}
      </div>
    </div>
  );
};
export default Homepage;
