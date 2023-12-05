import { useEffect, useState } from "react";
import axios from "axios";
import Cards from "../components/cards/Cards";

function Home() {
  const [clubsData, setClubsData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3310/api/teams")
      .then((response) => {
        setClubsData(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des données", error);
      });
  }, []);
  return (
    <div className="container">
      {clubsData.map((sport) => (
        <Cards key={sport.id} el={sport} />
      ))}
    </div>
  );
}

export default Home;
