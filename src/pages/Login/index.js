import React, { useState } from "react";
import Button from "../../components/atom/Button";
import Input from "../../components/atom/Input";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    const dataLogin = {
      username: username,
      password: password,
    };
    console.log(dataLogin);
  };

  return (
    <div className="container mt-5">
      <h3>Login</h3>
      <Input
        className="form-control"
        label="Username"
        placeholder="Masukkan username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        className="form-control"
        label="Password"
        placeholder="Masukkan password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <Button onSubmit={handleSubmit} text="Submit" />
    </div>
  );
};

export default Login;