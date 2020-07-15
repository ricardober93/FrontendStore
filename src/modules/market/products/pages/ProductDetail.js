import React, { useState, useEffect } from "react";
import { Card, Typography, Container, Divider } from "@material-ui/core";
import Description from "../components/Description";
import Valuation from "../components/Valuation";
import Layout from "../../../layouts/Layout";
import { getProductId } from "../providers/ProductProvider";

const ProductDetail = () => {
  //Routing para obtener el id actual
  const [product, setProduct] = useState({})

  useEffect(() => {
      fetchProduct();
  }, []);

  const fetchProduct = async () => {
    let id = window.location.pathname.split("/")[2];
    await getProductId(id).then(response => {
      setProduct(response.data);
    });
  }
  console.log(product)
  return (
    <Layout> 
    <Container>
      { product.name ?  <Description product={product} /> : null}
      <Divider />
      <Valuation />
    </Container>
    </Layout>
  );
};

export default ProductDetail;
