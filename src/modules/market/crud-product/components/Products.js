import React, { useState, useEffect } from "react"
import { Image } from "react-bootstrap";
import "../styles/products.css";
import { useSelector } from 'react-redux';
import Error from "../../../layouts/Error";

//services
import {getProducts} from '../../providers/ProductProvider';
import { Link } from "react-router-dom";

const Products = () => {

  const messages = useSelector(state => state.languages.messages);
  const currentColors = useSelector(state => state.customization.colors);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    await getProducts().then(response => {
      setProducts(response.data);
    });
  }, []);

  const listProducts = products.map((product) =>
    <Link to={`/products-by-product/${product.id}`}>
      <div style={{
        backgroundColor: 'turquoise'
      }} key={product.id} className='product'>
        <Image roundedCircle
          width="200"
          height="200"
          src={product.image}
        />
        <h6>{product.name}</h6>
      </div>
    </Link>
  );

  return (
    <div style={{ backgroundColor: 'turquoise' }}>
      <div align="center" className="tittle">
          <h4 style={{ color: currentColors.textSecondary }}>{messages['products_featured']}</h4>
        </div>
      <div
        style={{ backgroundColor: currentColors.colorSecondary }}
        className="products-container"
      >
        
        <div style={{ backgroundColor: currentColors.colorSecondary }} className='scroll'>
          {listProducts ? listProducts : <Error mensaje={messages['products_not']} />}
        </div>
      </div>
    </div>
  )
}

export default Products;