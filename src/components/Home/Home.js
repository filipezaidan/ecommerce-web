
import image from '../../assets/bg2.jpg'
import  *  as S from './styles'
function Home() {
    return (
       <S.Container>
           <S.ImageBackground src={image} />
       </S.Container>
    );
}

export default Home;