import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3310/api/teams")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des données", error);
      });
  }, []);
  console.info(data);
  return (
    <div className="title">
      <h1>Atelier Fullstack</h1>
      <div className="container">
        {data.map((el) => (
          <div key={el.id} className="cards">
            <div className="cardsInfos">
              <h2>{el.name}</h2>
              <p>{el.country}</p>
              <p>{el.league}</p>
              <img src={el.logo} alt={el.name} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
