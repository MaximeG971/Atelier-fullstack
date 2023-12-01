/* eslint-disable react/prop-types */
import React from "react";
import "./Cards.css";

function Cards({ el }) {
  return (
    <div className="container">
      <div key={el.id} className="cards">
        <div className="cardsInfos">
          <h2>{el.name}</h2>
          <p>{el.country}</p>
          <p>{el.league}</p>
          <img src={el.logo} alt={el.name} />
        </div>
      </div>
    </div>
  );
}

export default Cards;
