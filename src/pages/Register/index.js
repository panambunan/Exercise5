import React, { useState } from "react";
import Button from "../../components/atom/Button";
import Input from "../../components/atom/Input";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = () => {
    const dataRegister = {
      fullName: fullName,
      username: username,
      email: email,
      phone: phone,
      address: address,
    };
    console.log(dataRegister);
  };

  return (
    <div className="container mt-4">
      <h3>Register</h3>

      <Input
        className="form-control"
        placeholder="Masukkan nama lengkap"
        label="Full Name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />
      <Input
        className="form-control"
        placeholder="Masukkan username"
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        className="form-control"
        placeholder="Masukkan email"
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        className="form-control"
        placeholder="Masukkan nomor telepon"
        label="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <Input
        className="form-control"
        placeholder="Masukkan alamat"
        label="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <br />
      <Button onSubmit={handleSubmit} text="Register" />
    </div>
  );
};

export default Register;