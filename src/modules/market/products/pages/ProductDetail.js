import React, { useState, useEffect } from "react";
import { Card, Typography, Container, Divider, Grid } from "@material-ui/core";
import Description from "../components/Description";
import Valuation from "../components/Valuation";
import ProductsRandom from "../components/ProductsRandom";
import Layout from "../../../layouts/Layout";
import { getProductId, getProductsRandom } from "../../providers/ProductProvider";

const ProductDetail = () => {
  //Routing para obtener el id actual
  const [product, setProduct] = useState({})
  const [productsRandom, setProductsRandom] = useState([])

  useEffect(() => {
    fetchProduct();
    fetchProductRandom();
  }, []);

  const fetchProduct = async () => {
    let id = window.location.pathname.split("/")[2];
    await getProductId(id).then(response => {
      setProduct(response.data);
    });
  }

  const fetchProductRandom = async () => {
    await getProductsRandom().then(response => {
      setProductsRandom(response.data);
    });
  }

  return (
    <Container>
      {product.name ? <Description product={product} /> : null}
      <Divider />
      <Grid container spacing={3}>
        <Grid xs={12} sm={6}>
          <Valuation />
        </Grid>
        <Grid xs={12} sm={6}>
          <ProductsRandom productsRandom={productsRandom} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductDetail;
