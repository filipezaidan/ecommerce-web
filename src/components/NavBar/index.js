//Libraries
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
//Icons
import * as I from 'react-icons/fa'
//Styles
import *  as S from './styles'

function NavBar() {

    const state = useSelector(state => state.handleCart)
    const navigate = useNavigate();

    return (
        <S.Container>
            <Link to='/'>
                <S.Title>ECOMMERCE WEB</S.Title>
            </Link>
            <S.Links>
                <S.Link to='/'>Home</S.Link>
                <S.Link to='/products' >Products</S.Link>
                <S.Link to='/about'>About</S.Link>
                <S.Link to='/comtact'>Contact</S.Link>
            </S.Links>
            <S.Buttons>
                <S.Button>
                    <I.FaSignOutAlt />
                    Entrar
                </S.Button>
                <S.Button>
                    <I.FaUserPlus />
                    Register
                </S.Button>
                <S.Button onClick={() => navigate('/cart')}>
                    <I.FaSignOutAlt />
                    Cart ({state.length})
                </S.Button>
            </S.Buttons>
        </S.Container>
    );
}

export default NavBar;