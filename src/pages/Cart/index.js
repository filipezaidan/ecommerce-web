//Libraries
import { useSelector } from 'react-redux'
//Components
import TableProducts from '../../components/TableProducts';
//Styles
import * as S from './styles';

function Cart() {
    const state = useSelector(state => state.handleCart)
    const total = state.reduce((sum, li) => sum + (li.price * li.quantity), 0); // 17.5
    console.log(total)


    return (
        <S.Container>
            {state.length ?
                <>
                    <TableProducts products={state} />
                    <S.TotalContainer>
                        <S.Title>Total: </S.Title>
                        <S.TotalTitle>$ {total}</S.TotalTitle>
                    </S.TotalContainer>
                </>

                :

                <S.Title>Your Cart is empty!</S.Title>

            }
        </S.Container>
    );
}
export default Cart;