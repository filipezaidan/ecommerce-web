//Libraries
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
//Components
import Loading from '../../components/Loadings/Product'
//Services
import api from '../../services/api';
//Styles
import * as S from './styles';

function ProductInfo() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);

  const handleGetProduct = async () => {
    setLoading(true);
    const response = await api.get(`/products/${id}`)

    if (response.data) {
      setProduct(response.data)
      setLoading(false)
    }
  }

  const Product = () => {
    return (
      <S.Container>
        <S.Image src={product.image} />

        <S.Info>
          <S.Category>{product.category}</S.Category>
          <S.Title>{product.title}</S.Title>
          <S.Rating>Rating {product?.rating?.rate}★</S.Rating>
          <S.Price>$ {product.price}</S.Price>
          <S.Description>{product.description}</S.Description>

          <S.Buttons>
            <S.Button theme={'light'}>Add to Cart</S.Button>
            <S.Button theme={'dark'}>Go to Cart</S.Button>
          </S.Buttons>
        </S.Info>

      </S.Container>
    );
  }

  useEffect(() => {
    handleGetProduct()
  }, [])

  return (
    <>
      {loading ? <Loading /> : <Product />}
    </>
  );
}

export default ProductInfo;