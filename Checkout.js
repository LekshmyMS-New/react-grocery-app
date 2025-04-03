import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Container, Typography, Button } from "@mui/material";

const Checkout = () => {
  const { cart, setCart } = useContext(CartContext);

  const handleCheckout = () => {
    alert("Order placed successfully!");
    setCart([]); // Clear the cart after checkout
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Checkout</Typography>
      <Typography variant="body1">Total Items: {cart.length}</Typography>
      <Button variant="contained" color="primary" onClick={handleCheckout}>Place Order</Button>
    </Container>
  );
};

export default Checkout;
