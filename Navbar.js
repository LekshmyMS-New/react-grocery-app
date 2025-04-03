import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText, Box, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  return (
    <AppBar position="sticky" color="primary">
      <Toolbar>
        <IconButton edge="start" color="inherit" onClick={() => toggleDrawer(true)} sx={{ display: { xs: 'block', sm: 'none' } }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Grocery Shop
        </Typography>
        <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/products">Products</Button>
          <Button color="inherit" component={Link} to="/cart">Cart</Button>
          <Button color="inherit" component={Link} to="/checkout">Checkout</Button>
        </Box>
      </Toolbar>

      <Drawer anchor="left" open={drawerOpen} onClose={() => toggleDrawer(false)}>
        <List>
          <ListItem button component={Link} to="/" onClick={() => toggleDrawer(false)}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component={Link} to="/products" onClick={() => toggleDrawer(false)}>
            <ListItemText primary="Products" />
          </ListItem>
          <ListItem button component={Link} to="/cart" onClick={() => toggleDrawer(false)}>
            <ListItemText primary="Cart" />
          </ListItem>
          <ListItem button component={Link} to="/checkout" onClick={() => toggleDrawer(false)}>
            <ListItemText primary="Checkout" />
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
