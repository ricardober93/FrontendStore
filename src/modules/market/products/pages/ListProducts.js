import React, { useState, useEffect } from "react";
import Layout from "../../../layouts/Layout";
import Products from "../components/Products";
import { getProducts } from "../providers/ProductProvider";

export default function ListProduct() {
  
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    await getProducts().then(response => {
      setProducts(response.data);
    });
  }

  return (
    <Layout>
      { products.length > 0 ? <Products products={products} /> : null}
    </Layout>
  );
}
