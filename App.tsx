import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import products from './products';
import Homepage from './Homepage';
import Checkout from './Checkout';
import Summary from './Summary';
import './style.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/summary" element={<Summary />} />
      </Routes>
    </Router>
  );
}
