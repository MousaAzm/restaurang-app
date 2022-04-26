import React from "react";
import { useNavigate } from "react-router-dom";
import "./Card.css";

const Card = (props) => {
  const navigate = useNavigate();
  const handleRoute = () => {
    navigate(`/dishes/${props.title}`);
  };

  return (
    <div className="app__card__item">
      <span>{props.foodType}</span>
      <img src={props.url} alt="img" />
      <div className="app__card__body">
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <h2>${props.price}</h2>
        <button type="button" onClick={handleRoute}>
          Order Now
        </button>
      </div>
    </div>
  );
};

export default Card;
