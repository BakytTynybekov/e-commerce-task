import React from "react";
import Product from "./Product";
import { Grid } from "@mui/material";

function Products({ data, setCart }) {
  return (
    <div>
      <h1>Products</h1>
      <Grid container>
        {data.map((pr) => {
          return (
            <Grid item xs={6}>
              <Product setCart={setCart} data={pr} key={pr.id} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default Products;
