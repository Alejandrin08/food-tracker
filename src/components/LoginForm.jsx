import React, { useState } from "react";

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div class="form-floating mb-3">
        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email" />
      </div>
      <div class="form-floating mb-3">
        <input type="password" class="form-control" id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password" />
      </div>
      <button type="submit" class="btn btn-primary">Iniciar sesión</button>
    </form>
  );
};

export default LoginForm;
