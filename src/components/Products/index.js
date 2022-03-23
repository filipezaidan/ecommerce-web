import React, { useState, useEffect } from 'react';
import axios from 'axios'

import * as S from './styles';
import Product from '../Product';
import Category from '../Category';

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
            <S.Wrapper>
                <Category/>
                <S.Container>
                    {products.map(product => <Product data={product} key={product.id} />)}
                </S.Container>
            </S.Wrapper>
        )
    }

    return (
        <>
            {loading ? <Loading /> : <ShowProducts />}
        </>
    );
}

export default Products;