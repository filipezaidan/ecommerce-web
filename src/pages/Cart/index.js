//Libraries
import { useSelector } from 'react-redux'
//Components
import TableProducts from '../../components/TableProducts';
//Styles
import * as S from './styles';

function Cart() {
    const state = useSelector(state => state.handleCart)

    return (
        <S.Container>
            {state.length ?
                <TableProducts products={state} />
                : 
                <>
                    <S.Title>Your Cart is empty!</S.Title>
                </>
            }
        </S.Container>
    );
}

export default Cart;