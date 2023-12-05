import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Post() {
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
          type="text"
          name="logo"
          value={formValue.logo}
          onChange={handleChange}
        />
        <input type="submit" />
      </h3>
    </form>
  );
}

export default Post;
