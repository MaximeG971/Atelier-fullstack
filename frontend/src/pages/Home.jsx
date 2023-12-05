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

  const deleteTeam = (id) => {
    try {
      axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/teams/${id}`);
      const updateTeam = clubsData.filter((el) => el.id !== id);
      setClubsData(updateTeam);
      console.info("c'est ok");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    deleteTeam();
  }, []);

  return (
    <div className="container">
      {clubsData.map((sport) => (
        <div key={sport.id}>
          <Cards el={sport} deleteTeam={deleteTeam} />
        </div>
      ))}
    </div>
  );
}

export default Home;
