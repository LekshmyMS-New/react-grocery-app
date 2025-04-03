import { useState } from "react";
import { Container, TextField, Button, Typography } from "@mui/material";
import { registerUser } from "../services/userService";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    const response = await registerUser(credentials);
    if (response.success) {
      alert("Registration successful, please login.");
      navigate("/login");
    } else {
      alert("Registration failed.");
    }
  };

  return (
    <Container>
      <Typography variant="h4">Register</Typography>
      <TextField name="name" label="Name" fullWidth margin="normal" onChange={handleChange} />
      <TextField name="email" label="Email" fullWidth margin="normal" onChange={handleChange} />
      <TextField name="password" label="Password" type="password" fullWidth margin="normal" onChange={handleChange} />
      <Button variant="contained" color="primary" onClick={handleRegister}>Register</Button>
    </Container>
  );
};

export default Register;
