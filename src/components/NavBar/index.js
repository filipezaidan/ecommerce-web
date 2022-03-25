import * as I from 'react-icons/fa'
import *  as S from './styles'

function NavBar() {
    return (
        <S.Container>
            <S.Title>NOVA MODA</S.Title>
            <S.Links>
                <S.Link to='/'>Home</S.Link>
                <S.Link to='/products' >Products</S.Link>
                <S.Link to='/about'>About</S.Link>
                <S.Link to='/comtact'>Contact</S.Link>
            </S.Links>
            <S.Buttons>
                <S.Button>
                    <I.FaSignOutAlt color="black" />
                    Entrar
                </S.Button>
                <S.Button>
                    <I.FaUserPlus color="black" />
                    Register
                </S.Button>
                <S.Button>
                    <I.FaSignOutAlt color="black" />
                    Cart (0)
                </S.Button>
            </S.Buttons>
        </S.Container>
    );
}

export default NavBar;