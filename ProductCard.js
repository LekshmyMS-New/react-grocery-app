import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";

const ProductCard = ({ product }) => {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia component="img" height="200" image={product.image} alt={product.name} />
      <CardContent>
        <Typography variant="h6">{product.name}</Typography>
        <Typography variant="body1">${product.price}</Typography>
        <Button variant="contained" color="primary">Add to Cart</Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
