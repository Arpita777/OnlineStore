import * as React from 'react';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
const Checkout = () => {
  const [fullName, setFullName] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phnumber, setPhnumber] = useState<string>('');
  const [creditcard, setCreditcard] = useState<string>('');
  const navigate = useNavigate();
  const location = useLocation();

  const validate = () => {
    var phtest = /[0-9]{10}$/;
    var nametest = /^[A-Za-z\s]*$/;
    var creditcardtest = /[0-9]{19}$/;
    var emailtest = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!nametest.test(fullName) || fullName.length == 0) {
      alert('Invalid Full name');
      return false;
    } else if (address.length < 10) {
      alert('Invalid Address');
      return false;
    } else if (!emailtest.test(email)) {
      alert('Invalid Email');
      return false;
    } else if (!phtest.test(phnumber)) {
      alert('Invalid ph number');
      return false;
    } else if (!creditcardtest.test(creditcard)) {
      alert('Invalid credit card');
      return false;
    } else {
      return true;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      navigate('/summary', {
        state: {
          description: location.state.description,
          amount: location.state.suggestedprice,
          creditcard: creditcard,
        },
      });
    }
  };
  return (
    <div className="checkout">
      <h2>Checkout Form</h2>
      <form>
        <label>Full Name:</label>
        <br />
        <input
          type="text"
          value={fullName}
          name="fullName"
          pattern="[a-z][A-Z]"
          onChange={(e) => setFullName(e.target.value)}
          required
        />
        <br />
        <label>Address:</label>
        <br />
        <input
          type="text"
          value={address}
          name="address"
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <br />
        <label>Email:</label>
        <br />
        <input
          type="email"
          value={email}
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <label>PhNumber:</label>
        <br />
        <input
          type="text"
          value={phnumber}
          name="phnumber"
          pattern="[0-9]{10}"
          onChange={(e) => setPhnumber(e.target.value)}
          required
        />
        <br />
        <label>Credit Card Number:</label>
        <br />
        <input
          type="text"
          value={creditcard}
          name="creditcard"
          pattern="[0-9]{19}"
          onChange={(e) => setCreditcard(e.target.value)}
          required
        />
        <br />
        <input
          type="submit"
          value="Confirm order"
          onClick={(e) => handleSubmit(e)}
        />
      </form>
      <h3>Item to be checked out</h3>
      <div className="summary">
        <label>Product name:</label>
        {location.state.name}
        <br />
        <label>Total:</label>
        {`Rs. ${location.state.suggestedprice}`}
        <br />
      </div>
      <img src={location.state.picture} alt="image of product" />
    </div>
  );
};
export default Checkout;
