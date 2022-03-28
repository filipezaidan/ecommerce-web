

import * as S from './styles';

function Category({ categorySelected, handleFilterProducts }) {

   const handleChangeCategory = (category) => {
      handleFilterProducts(category);
   }

   return (
      <S.Container>
         <S.Title>Products</S.Title>
         <S.Line />

         <S.Categories>
            <S.Categorie
               onClick={() => handleChangeCategory("all")}
               select={categorySelected === "all"}
            >
               All
            </S.Categorie>

            <S.Categorie
               onClick={() => handleChangeCategory("men's clothing")}
               select={categorySelected === "men's clothing"}
            >
               Men's Clothing
            </S.Categorie>
            <S.Categorie
               onClick={() => handleChangeCategory("women's clothing")}
               select={categorySelected === "women's clothing"}
            >
               Women's Clothing
            </S.Categorie>
            <S.Categorie
               onClick={() => handleChangeCategory("jewelery")}
               select={categorySelected === "jewelery"}
            >
               Jewelery
            </S.Categorie>
            <S.Categorie
               onClick={() => handleChangeCategory("electronics")}
               select={categorySelected === "electronics"}
            >
               Electronics
            </S.Categorie>
         </S.Categories>
      </S.Container>
   );
}

export default Category;