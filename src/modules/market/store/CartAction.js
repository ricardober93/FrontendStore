export const setCartAction = (product) => ({
    type: 'SET_CART',
    payload: product
});

export const setCartReloadAction = (cart) => ({
    type: 'SET_CART_RELOAD',
    payload: cart
});

export const updateCartAction = (cart) => ({
    type: 'UPDATE_PRODUCT_CART',
    payload: cart
})

// Selecciona y elimina el producto del carrito
export function removeProductCartAction(id) {
    return async (dispatch) => {
        dispatch(getRemoveProduct(id));
    }
}

const getRemoveProduct = id => ({
    type: 'REMOVE_PRODUCT_CART',
    payload: id
});