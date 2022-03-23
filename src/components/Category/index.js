import React from 'react';

import * as S from './styles';

function Category() {
  return (
      <S.Container>
         <S.Title>Last Products</S.Title>
         <S.Line/>

         <S.Categories>
            <S.Categorie>All</S.Categorie>
            <S.Categorie>Men's Clothing</S.Categorie>
            <S.Categorie>Womens's Clothing</S.Categorie>
            <S.Categorie>Jewelery</S.Categorie>
            <S.Categorie>Electronic</S.Categorie>
         </S.Categories>
      </S.Container>
  );
}

export default Category;