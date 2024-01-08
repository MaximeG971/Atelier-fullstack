import axios from "axios";
import { useState } from "react";

function Signup() {
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Vérifier si les mots de passe correspondent
    if (formValue.password !== formValue.passwordConfirm) {
      console.error("Les mots de passe ne correspondent pas");
      setPasswordsMatch(false);
      return;
    }

    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/api/signup`, formValue)
      .then((res) => {
        console.info(res);
      })
      .catch((err) => console.error(err));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setPasswordsMatch(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>
        Email
        <input
          type="email"
          name="email"
          value={formValue.email}
          onChange={handleChange}
        />
      </h3>
      <h3>
        Password
        <input
          type="password"
          name="password"
          value={formValue.password}
          onChange={handleChange}
        />
      </h3>
      <h3>
        Confirm password
        <input
          type="password"
          name="passwordConfirm"
          value={formValue.passwordConfirm}
          onChange={handleChange}
        />
      </h3>
      {!passwordsMatch && (
        <p style={{ color: "red" }}>Les mots de passe ne correspondent pas</p>
      )}
      <input type="submit" />
    </form>
  );
}

export default Signup;
