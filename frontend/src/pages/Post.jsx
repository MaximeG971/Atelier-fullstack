import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Post() {
  const [sport, setSport] = useState([]);

  const [formValue, setFormValue] = useState({
    name: "",
    country: "",
    league: "",
    logo: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/api/teams`, formValue)
      .then((res) => {
        console.info(res);
        navigate("/");
      })
      .catch((err) => console.error(err));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const selectFunc = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/sports/`
      );
      setSport(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  console.info(sport);
  useEffect(() => {
    selectFunc();
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <h3>
        Nom:
        <input
          type="text"
          name="name"
          value={formValue.name}
          onChange={handleChange}
        />
      </h3>
      <h3>
        Pays:
        <input
          type="text"
          name="country"
          value={formValue.country}
          onChange={handleChange}
        />
      </h3>
      <h3>
        Ligue:
        <input
          type="text"
          name="league"
          value={formValue.league}
          onChange={handleChange}
        />
      </h3>
      <h3>
        Logo (inserér un URL) :
        <input
          type="url"
          name="logo"
          value={formValue.logo}
          onChange={handleChange}
        />
      </h3>
      <h3>
        Sport :
        <select onChange={handleChange} name="sport_id">
          <option value="">Choisissez votre sport</option>
          {sport.map((el) => (
            <option key={el.id} value={el.id}>
              {el.name}
            </option>
          ))}
        </select>
      </h3>
      <input type="submit" />
    </form>
  );
}

export default Post;
