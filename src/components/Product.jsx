import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import { CardContent } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";

import React from "react";

function Product({ data, setCart }) {
  const { image, title, description, price } = data;
  const [quantity, setQuantity] = useState(0);

  const setCartTO = () => {
    data.quan = quantity;
    setCart(data);
  };
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="green iguana"
        />
        <Typography variant="h5"> {title}</Typography>
        <Typography variant="body2" color="GrayText.secondary">
          {description}
        </Typography>
        <Typography variant="h2" color="GrayText.secondary">
          ${price}
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Button
              variant="contained"
              onClick={() => setQuantity((prev) => prev + 1)}
            >
              One more
            </Button>
          </Grid>
          <Grid item xs={4}>
            <TextField disabled value={quantity}></TextField>
          </Grid>
          <Grid item xs={4}>
            <Button
              variant="contained"
              onClick={() => setQuantity((prev) => (prev > 0 ? prev - 1 : 0))}
            >
              Minus one
            </Button>
          </Grid>
        </Grid>
        <Button fullWidth onClick={setCartTO}>
          Add To Cart
        </Button>
      </Card>
    </div>
  );
}

export default Product;
