import React from 'react';

import * as S from './styles';

function Category({  categorySelected, handleFilterProducts }) {
   return (
      <S.Container>
         <S.Title>Last Products</S.Title>
         <S.Line />

         <S.Categories>
            <S.Categorie 
            onClick={() => handleFilterProducts("all")}>All</S.Categorie>
            <S.Categorie onClick={() => handleFilterProducts("men's clothing")}>Men's Clothing</S.Categorie>
            <S.Categorie onClick={() => handleFilterProducts("women's clothing")}>Women's Clothing</S.Categorie>
            <S.Categorie onClick={() => handleFilterProducts("jewelery")}>Jewelery</S.Categorie>
            <S.Categorie onClick={() => handleFilterProducts("electronics")}>Electronics</S.Categorie>
         </S.Categories>
      </S.Container>
   );
}

export default Category;