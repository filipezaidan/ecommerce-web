
import image from '../../assets/bg2.jpg'
import Products from '../Products';
import  *  as S from './styles'

function Home() {
    return (
       <S.Container>
           <S.ImageBackground src={image} />
           <Products/>
       </S.Container>
    );
}

export default Home;