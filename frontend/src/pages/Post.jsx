import React, { useState } from "react";

function Post() {
  const [formValue, setFormValue] = useState({
    name: "",
    country: "",
    league: "",
    logo: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
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
