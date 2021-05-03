import React, { useState } from "react";
import Input from "../../components/atom/Input";
import Button from "../../components/atom/Button";
import { Link } from "react-router-dom";
import Axios from "axios";
import NavBar from "../../components/molecules/Navbar";

const TambahUser = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar] = useState("https://source.unsplash.com/random");

  const handleSubmit = () => {
    const TambahUser = {
      avatar: avatar,
      first_name: firstName,
      last_name: lastName,
      email: email,
    };
    Axios.post("http://localhost:3000/users", TambahUser);
  };

  return (
    <div className="container">
      <NavBar />
      <h3 className="mt-4">Tambah User</h3>
      <Input
        className="form-control"
        label="First Name"
        placeholder="Masukkan nama depan anda"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <Input
        className="form-control"
        label="Last Name"
        placeholder="Masukkan nama belakang anda"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <Input
        className="form-control"
        label="Email"
        placeholder="Masukkan email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <Link to="/">
        <Button onSubmit={handleSubmit} text="Submit" />
      </Link>
    </div>
  );
};

export default TambahUser;