import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';
interface propType {
  details: {
    name: string;
    actualprice: number;
    suggestedprice: number;
    description: string;
    picture: string;
  };
}
const Card = (props: propType) => {
  const { name, actualprice, suggestedprice, picture, description } =
    props.details;
  const navigate = useNavigate();
  return (
    <div>
      <div className="card">
        <img src={picture} alt="img" />
        <span>{name}</span>
        <span>
          <b>ActualPrice:</b> {actualprice}
        </span>
        <span>
          <b>SuggestedPrice:</b> {suggestedprice}
        </span>
      </div>
      <button
        onClick={() =>
          navigate('/checkout', {
            state: {
              name, actualprice, suggestedprice, picture, description

            },
          })
        }
      >
        Buy Now
      </button>
    </div>
  );
};
export default Card;
