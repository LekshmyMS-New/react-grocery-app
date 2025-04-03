import React from 'react';
import { Box, Grid, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#f1f1f1', padding: '1rem' }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="body1">
            <Link href="/" color="inherit">Home</Link>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="body1">
            <Link href="/products" color="inherit">Products</Link>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="body1">
            <Link href="/contact" color="inherit">Contact</Link>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
