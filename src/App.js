import "./App.css";
import Products from "./components/Products";
import Card from "./components/Card";
import axiosInstance from "./helpers/Axios";
import { useEffect, useState } from "react";
import { Grid } from "@mui/material";

function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const callApi = async () => {
    const url = "products";
    const req = await axiosInstance.get(url);
    setAllProducts(req.data);
  };

  const onAddCart = (product) => {
    let arr = [...cart, product];
    setCart(arr);
  };
  useEffect(() => {
    callApi();
  });
  return (
    <div className="App">
      <Grid container>
        <Grid item xs={8}>
          <Products data={allProducts} setCart={onAddCart} />
        </Grid>
        <Grid item xs={2}>
          <Card cart={cart} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
