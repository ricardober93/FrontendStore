import React, { useState, useEffect } from "react";
import { Card, Typography, Container, Divider } from "@material-ui/core";
import { useRouter } from "next/router";
import Description from "../components/Description";
import Valuation from "../components/Valuation";
import Layout from "../../../layouts/Layout";
import { getProductId } from "../providers/ProductProvider";

const ProductDetail = () => {
  //Routing para obtener el id actual
  const [product, setProduct] = useState({})
  const router = useRouter();
  const {
    query: { product_id },
  } = router;

  useEffect(() => {
    if (product_id) {
      fetchProduct();
    }
  }, [product_id]);

  const fetchProduct = async () => {
    await getProductId(product_id).then(response => {
      setProduct(response.data);
    });
  }
  console.log(product)
  return (
    <Layout>
      { product.name ?  <Description product={product} /> : null}
      <Divider />
      <Valuation />
    </Layout>
  );
};

export default ProductDetail;
