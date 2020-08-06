import React, { useState, useEffect } from "react";
import {Container} from '@material-ui/core'
import Products from "../components/Products";
import { getProducts } from "../../providers/ProductProvider";

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
    <div>
      { products.length > 0 ? <Products products={products} /> : null}
    </div>
  );
}
