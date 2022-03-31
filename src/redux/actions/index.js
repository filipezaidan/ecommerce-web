export const addCart = (product) => {
    return {
        type: "ADD_ITEM",
        payload: product
    }
}
export const delCart = (product) => {
    return {
        type: "DEL_ITEM",
        payload: product
    }
}

export const incrementItemCart = (product) => {
    return {
        type: "INCREMENT_ITEM",
        payload: product
    }
}
export const decrementItemCart = (product) => {
    return {
        type: "DECREMENT_ITEM",
        payload: product
    }
}