import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [sport, setSport] = useState([]);
  const [formValue, setFormValue] = useState({
    name: "",
    country: "",
    league: "",
    logo: "",
    sport_id: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/teams/${id}`
        );
        setFormValue(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [id]);

  const showMe = async () => {
    try {
      const response = await axios.get("http://localhost:3310/api/sports");
      setSport(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    showMe();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`${import.meta.env.VITE_BACKEND_URL}/api/teams/${id}`, formValue)
      .then((res) => {
        console.info(res);
        navigate("/");
      })
      .catch((err) => console.error(err));
  };

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
        <select
          onChange={handleChange}
          value={formValue.sport_id}
          name="sport_id"
        >
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

export default EditPage;
