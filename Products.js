import React, { useState } from 'react';
import { Card, CardContent, Button, Typography, Grid } from '@mui/material';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: 2 }}>
      <img src={product.image} alt={product.name} style={{ width: '100%' }} />
      <CardContent>
        <Typography variant="h6">{product.name}</Typography>
        <Typography variant="body2" color="textSecondary">
          {product.description}
        </Typography>
        <Typography variant="h6" color="primary">
          ${product.price}
        </Typography>
        <Button onClick={() => onAddToCart(product)} variant="contained" color="primary">
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

const ProductsPage = () => {
  const [cart, setCart] = useState([]);
  const products = [
    { id: 1, name: 'Apple', price: 1.5, description: 'Fresh red apples', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Banana', price: 0.99, description: 'Fresh ripe bananas', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Orange', price: 2.0, description: 'Citrusy and tangy oranges', image: 'https://via.placeholder.com/150' },
  ];

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Products</h1>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <ProductCard product={product} onAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProductsPage;
