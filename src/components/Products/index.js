import React, { useState, useEffect } from 'react';
import axios from 'axios'

import * as S from './styles';
import Product from '../Product';

function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const getProducts = async () => {
        setLoading(true);
        const products = await axios.get('https://fakestoreapi.com/products')

        if (products) {
            console.log(products.data)
            setProducts(products.data);
            setLoading(false);
        }
    }

    useEffect(() => {
        getProducts();
    }, [])

    const Loading = () => {
        return (
            <span>Carregando...</span>
        )
    }

    const ShowProducts = () => {
        return (
            <>
                {products.map(product => <Product data={product} />)}
            </>
        )
    }

    return (
      
            <S.Container>
                {loading ? <Loading /> : <ShowProducts />}
            </S.Container>
        
    );
}

export default Products;