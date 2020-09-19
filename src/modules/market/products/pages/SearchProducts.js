import React, { useState, useEffect } from "react";
import { Container } from '@material-ui/core'
import Products from "../components/Products";
import { getProductsBySearch, getProducts } from "../../providers/ProductProvider";

export default function SearchProducts(search) {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, [search]);

    const fetchProducts = async () => {

        let pathname = (window.location.pathname).split('/')[2];
        let search = pathname.replace("%20", " ");

        await getProductsBySearch(search).then(response => {
            setProducts(response.data);
        });

    }

    return (
        <div>
            {products.length > 0 ? <Products products={products} /> : <Container>No hay resultados</Container>}
        </div>
    );
}
