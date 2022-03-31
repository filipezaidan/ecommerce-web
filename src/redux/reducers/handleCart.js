
const handleCart = (state = [], action) => {

    const { type, payload } = action;
    const exist = state.find(item => item.id === payload.id);

    switch (type) {
        case "ADD_ITEM":
            if (exist) {
                return state.map(item =>
                    item.id === payload.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [
                    ...state, {
                        ...payload,
                        quantity: 1,
                    }
                ]
            };

        case "DEL_ITEM":
            if (exist.quantity === 1) {
                return state.filter((item) => item.id !== payload.id)
            } else {
                return state.map(item =>
                    item.id === payload.id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                );
            };

        case "INCREMENT_ITEM":
            return state.map(item =>
                item.id === payload.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );

        case "DECREMENT_ITEM":
            if (exist.quantity === 1) {
                return state.filter((item) => item.id !== payload.id)
            } else {
                return state.map(item =>
                    item.id === payload.id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                );
            };
        default:
            return state;

    }
}

export default handleCart;