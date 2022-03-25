//Libraries
import Skeleton from 'react-loading-skeleton'
//Styles
import * as S from './styles';

function Loading() {
  return (
    <S.Wrapper>
      {Array(8)
        .fill()
        .map((item, index) => (
          <S.Container key={index}>
            <Skeleton width={250} height={250} />
            <Skeleton width={200} height={20} />
            <Skeleton width={100} height={20} />
          </S.Container>
        ))}
    </S.Wrapper>
  );
}

export default Loading;