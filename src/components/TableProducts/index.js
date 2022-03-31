//Libraries
import { useDispatch } from 'react-redux';
import { incrementItemCart, decrementItemCart } from '../../redux/actions/index';
import * as I from 'react-icons/fa';
//Styles
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
                </S.TR>
            </S.THead>
            <S.TBody>
                {products.map((item) => {
                    return (
                        <S.TR key={item.id}>
                            <S.TD>
                                <S.ContainerProductItem>
                                    <S.ImageProduct src={item.image} />
                                    <S.TitleProduct>{item.title}</S.TitleProduct>
                                </S.ContainerProductItem>
                            </S.TD>
                            <S.TD>
                                $ {item.price}
                            </S.TD>
                            <S.TD>
                                <S.ContainerQuantity>
                                    <S.ButtonCart onClick={() => handleIncrementItem(item)}>
                                        <I.FaPlus />
                                    </S.ButtonCart>
                                    {item.quantity}
                                    <S.ButtonCart onClick={() => handleDecrementItem(item)}>
                                        <I.FaMinus />
                                    </S.ButtonCart>
                                </S.ContainerQuantity>
                            </S.TD>
                            <S.TD>$ {(item.quantity * item.price).toFixed(2)}</S.TD>
                        </S.TR>
                    );
                })}
            </S.TBody>
        </S.Table>
    );
}
export default TableProducts;