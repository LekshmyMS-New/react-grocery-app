import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Container, Typography, List, ListItem, ListItemText, Button } from "@mui/material";

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Your Cart</Typography>
      {cart.length === 0 ? (
        <Typography variant="body1">Your cart is empty.</Typography>
      ) : (
        <List>
          {cart.map(item => (
            <ListItem key={item.id}>
              <ListItemText primary={item.name} secondary={`$${item.price}`} />
              <Button color="secondary" onClick={() => removeFromCart(item.id)}>Remove</Button>
            </ListItem>
          ))}
        </List>
      )}
    </Container>
  );
};

export default Cart;
