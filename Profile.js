import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Container, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate("/login");
  };

  return (
    <Container>
      <Typography variant="h4">Profile</Typography>
      {user ? (
        <>
          <Typography variant="body1">Name: {user.name}</Typography>
          <Typography variant="body1">Email: {user.email}</Typography>
          <Button variant="contained" color="secondary" onClick={handleLogout}>Logout</Button>
        </>
      ) : (
        <Typography variant="body1">Please log in to see your profile.</Typography>
      )}
    </Container>
  );
};

export default Profile;
