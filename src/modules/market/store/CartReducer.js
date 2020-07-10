const initialState = {
    products: [],
    total: 0
}

export default function(state = initialState, action){

    switch(action.type){
        case 'SET_CART':
            return {
                ...state,
                products: [...state.products, action.payload],
                total: state.total + action.payload.subtotal
            }
        case 'SET_CART_RELOAD':
            return {
                ...state,
                products: action.payload.products,
                total: action.payload.total
            }
        case 'UPDATE_PRODUCT_CART':
            return {
                ...state,
                productsCart: action.payload,
            }
        case 'REMOVE_PRODUCT_CART':
            return {
                ...state,
                productRemove: action.payload,
                productsCart: state.productsCart.filter(product => product.id !== state.productRemove),
            }
        default:
            return state;
    }
}