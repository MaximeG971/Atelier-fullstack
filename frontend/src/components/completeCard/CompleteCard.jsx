/* eslint-disable react/prop-types */
import React from "react";
import { useLoaderData } from "react-router-dom";

function CompleteCard() {
  const oneClubCard = useLoaderData();
  return (
    <div className="completeCard">
      <div className="clubLogo">
        <img
          src={oneClubCard.logo}
          alt={oneClubCard.name}
          className="clubImg"
        />
      </div>
      <div>
        <h1>{oneClubCard.name}</h1>
        <h2>
          {oneClubCard.country}, {oneClubCard.league}
        </h2>
        <h3>Histoire du club</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
          mollitia iure quibusdam velit quisquam itaque labore perspiciatis
          incidunt expedita dolores dignissimos eius accusamus natus est. Illum
          voluptatem voluptatibus totam rem?
        </p>
      </div>
    </div>
  );
}

export default CompleteCard;
