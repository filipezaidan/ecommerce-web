//Components
import Products from '../../components/Products';
//Assets
import image from '../../assets/bg2.jpg'
//Styles
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