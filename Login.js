import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Container, TextField, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/userService";

const Login = () => {
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    const user = await loginUser(credentials);
    if (user) {
      setUser(user);
      navigate("/profile");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <Container>
      <Typography variant="h4">Login</Typography>
      <TextField name="email" label="Email" fullWidth margin="normal" onChange={handleChange} />
      <TextField name="password" label="Password" type="password" fullWidth margin="normal" onChange={handleChange} />
      <Button variant="contained" color="primary" onClick={handleLogin}>Login</Button>
    </Container>
  );
};

export default Login;
