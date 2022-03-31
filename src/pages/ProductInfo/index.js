//Libraries
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
//Components
import Loading from '../../components/Loadings/Product'
// Actions
import { addCart } from '../../redux/actions/index';
//Services
import api from '../../services/api';
//Styles
import * as S from './styles';

function ProductInfo() {
  const navigate = useNavigate()
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const handleAddProduct = (product) => {
    dispatch(addCart(product));
    toast.success('Product added with success!')
  }

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
        <S.ContainerImage>
          <S.Image src={product.image} />
        </S.ContainerImage>

        <S.Info>
          <S.Category>{product.category}</S.Category>
          <S.Title>{product.title}</S.Title>
          <S.Rating>Rating {product?.rating?.rate}★</S.Rating>
          <S.Price>$ {product.price}</S.Price>
          <S.Description>{product.description}</S.Description>

          <S.Buttons>
            <S.Button
              theme={'light'}
              onClick={() => handleAddProduct(product)}
            >
              Add to Cart
            </S.Button>
            <S.Button
              onClick={() => navigate('/cart')}
              theme={'dark'}
            >
              Go to Cart
            </S.Button>
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