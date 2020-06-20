import React, { useEffect } from "react";
import { Card, Typography, Container, Divider } from "@material-ui/core";
import { useRouter } from "next/router";
import Description from "../components/Description";
import Valuation from "../components/Valuation";
import Layout from "../../../layouts/Layout";

const ProductDetail = () => {
  //Routing para obtener el id actual
  const router = useRouter();
  const {
    query: { product_id },
  } = router;

  useEffect(() => {
    if (product_id) {
      console.log(product_id);
    }
  }, [product_id]);

  return (
    <Layout>
      <Description />
      <Divider />
      <Valuation />
    </Layout>
  );
};

export default ProductDetail;
