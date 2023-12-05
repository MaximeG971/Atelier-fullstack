/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import React from "react";
import "./Cards.css";

function Cards({ el, deleteTeam }) {
  return (
    <div className="container">
      <div key={el.id} className="cards">
        <div className="cardsInfos">
          <h2>{el.name}</h2>
          <p>{el.country}</p>
          <p>{el.league}</p>
          <img src={el.logo} alt={el.name} />
          <Link to={`/teams/${el.id}`} key={el.id}>
            <input type="button" value="Détails" />
          </Link>
          <button type="button" onClick={() => deleteTeam(el.id)}>
            Supprimer
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
