
import * as I from 'react-icons/fa'
import  *  as S from './styles'

function NavBar() {
    return (
        <S.Container>
            <S.Title>NOVA MODA</S.Title>
            <S.Links>
                <S.Link>Home</S.Link>
                <S.Link>Products</S.Link>
                <S.Link>About</S.Link>
                <S.Link>Contact</S.Link>
            </S.Links>
            <S.Buttons>
                <S.Button>
                    <I.FaSignOutAlt color="black"/>
                     Entrar
                </S.Button>
                <S.Button>
                    <I.FaUserPlus color="black"/>
                     Register
                </S.Button>
                <S.Button>
                    <I.FaSignOutAlt color="black"/>
                     Cart (0)
                </S.Button>
            </S.Buttons>
        </S.Container>
    );
}

export default NavBar;