import * as React from 'react';
import { useLocation } from 'react-router-dom';

const Summary = () => {
  const location = useLocation();
  const random = Math.random() * 100;
  return (
    <div>
      <h2>Order Summary</h2>
      <label>Order No:</label>
      {random}
      <br />
      <label>Description:</label>
      {location.state.description}
      <p>
        Amount to be charged on credit card{' '}
        <strong>{location.state.creditcard}</strong> is {' '}
        <strong>Rs.{location.state.amount}</strong>
      </p>
    </div>
  );
};
export default Summary;
