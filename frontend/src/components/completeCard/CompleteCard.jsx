/* eslint-disable react/prop-types */
import React from "react";
import { useLoaderData, Link } from "react-router-dom";
import "./CompleteCard.css";

function CompleteCard() {
  const oneClubCard = useLoaderData();
  console.info(oneClubCard);
  return (
    <div className="boutonRetour">
      <Link to="/">
        <input type="button" value="Retour" />
      </Link>
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
          <h2>{oneClubCard.sport}</h2>
          <h2>
            {oneClubCard.country}, {oneClubCard.league}
          </h2>
          <h3>Histoire du club</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
            mollitia iure quibusdam velit quisquam itaque labore perspiciatis
            incidunt expedita dolores dignissimos eius accusamus natus est.
            Illum voluptatem voluptatibus totam rem? Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Placeat qui nemo repudiandae
            perferendis sunt asperiores dolor vitae iste ipsam autem, possimus
            iusto! Est porro, aspernatur quidem sed perferendis eos deserunt.
          </p>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
            ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
            egestas semper. Aenean ultricies mi vitae est. Mauris placerat
            eleifend leo. Pellentesque habitant morbi tristique senectus et
            netus et malesuada fames ac turpis egestas. Vestibulum tortor quam,
            feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
            libero sit amet quam egestas semper.
          </p>
          <p>
            Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque
            sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi,
            condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean
            fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci,
            sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar
            facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus,
            tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam
            erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor,
            facilisis luctus, metus
          </p>
        </div>
      </div>
    </div>
  );
}

export default CompleteCard;
