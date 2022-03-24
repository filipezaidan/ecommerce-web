//Libraries
import React, { useState, useEffect } from 'react';
import axios from 'axios'
//Components
import Product from '../Product';
import Loading from '../Loading';
import Category from '../Category';
//Styles
import * as S from './styles';

function Products() {
    const [products, setProducts] = useState([]);
    const [filterProducts, setFilterProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [category, setCategory] = useState("all")

    const getProducts = async () => {
        setLoading(true);
        const products = await axios.get('https://fakestoreapi.com/products')

        if (products.data) {
            setProducts(products.data);
            setFilterProducts(products.data);
            setLoading(false);
        }
    }

    const handleFilterProducts = (category) => {
        if (category === 'all'){
            setCategory(category)
            setFilterProducts(products);
            return ;
        }
        
        let newProducts = products.filter(product => product.category === category);
        setFilterProducts(newProducts);
        setCategory(category);

    }

    useEffect(() => {
        getProducts();
    }, [])


    const ShowProducts = () => {
        return (
            <S.Wrapper>
                <Category
                    categorySelected={category}
                    handleFilterProducts={handleFilterProducts}
                />
                <S.Container>
                    {filterProducts.map(product => <Product data={product} key={product.id} />)}
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