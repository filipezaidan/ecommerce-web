
import * as S from './styles';

function Product({ data }) {
    return (
    
            <S.Container to={`/product/${data.id}`}>
                <S.Image src={data.image} />
                <S.Title>{data.title}</S.Title>
                <S.Value>$ {data.price}</S.Value>
                <S.Button>Buy</S.Button>
            </S.Container >

    );
}

export default Product;