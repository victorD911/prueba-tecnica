import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [pin, setPin] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      username,
      pin,
    };

    localStorage.setItem(
      "user",
      JSON.stringify(userData)
    );

    navigate("/");
  };

 return (
  <div className="login-container">

    <form
      onSubmit={handleSubmit}
      className="login-card"
    >

      <h1>Inicia Sesión</h1>

      <label className="login-label">
        Usuario:
      </label>

      <input
        type="text"
        placeholder="Ingresa tu usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input"
        required
      />

      <label className="login-label">
        PIN:
      </label>

      <input
        type="password"
        placeholder="********"
        value={pin}
        onChange={(e) => setPin(e.target.value)}
        className="input"
        required
      />

      <button
        type="submit"
        className="btn btn-primary"
      >
        Entrar
      </button>

      <div className="login-footer">
        
      </div>

    </form>

  </div>
);
}

export default Login;