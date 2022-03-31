import { useDispatch } from 'react-redux';
import { incrementItemCart, decrementItemCart } from '../../redux/actions/index';
import * as I from 'react-icons/fa';
import * as S from './styles';

function TableProducts({ products }) {
    const dispatch = useDispatch();

    const handleIncrementItem = (product) => {
        dispatch(incrementItemCart(product))
    }

    const handleDecrementItem = (product) => {
        dispatch(decrementItemCart(product))
    }


    return (
        <S.Table>
            <S.THead>
                <S.TR>
                    <S.TH>Product</S.TH>
                    <S.TH>Price</S.TH>
                    <S.TH>Quantity</S.TH>
                    <S.TH>Total</S.TH>
                    {/* <S.TH>#</S.TH> */}
                </S.TR>
            </S.THead>
            <S.TBody>
                {products.map((item) => {
                    console.log(item)
                    return (
                        <S.TR key={item.id}>
                            <S.TD>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '100%' }}>
                                    <img style={{ objectFit: 'contain' }} src={item.image} width={100} height={100} />
                                    <span>{item.title}</span>
                                </div>
                            </S.TD>
                            <S.TD>
                                ${item.price}
                            </S.TD>
                            <S.TD>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                    <I.FaPlus onClick={() => handleIncrementItem(item)}>add</I.FaPlus>
                                    {item.quantity}
                                    <I.FaMinus onClick={() => handleDecrementItem(item)}>rem</I.FaMinus>
                                </div>
                            </S.TD>
                            <S.TD>${item.quantity * item.price}</S.TD>

                        </S.TR>
                    );
                })}
            </S.TBody>
        </S.Table>
    );
}
export default TableProducts;