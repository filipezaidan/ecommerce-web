//Libraries
import Skeleton from 'react-loading-skeleton'
//Styles
import * as S from './styles';

function LoadingProduct() {
    return (
        <S.Container>
            <S.Image>
                <Skeleton width={600} height={500} />
            </S.Image>
            <S.Info>
                <Skeleton width={600} height={80} />
                <Skeleton width={500} height={50} />
                <Skeleton width={200} height={30} />
                <Skeleton width={300} height={50} />
            </S.Info>
        </S.Container>
    );
}

export default LoadingProduct;