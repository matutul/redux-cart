import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions"

const initialState = {
    cart: [],
    products: [
        { name: "Lenovo Laptop", id: 1 },
        { name: "Asus Laptop", id: 2 },
        { name: "Dell Laptop", id: 3 },
        { name: "HP Laptop", id: 4 },
        { name: "Doel Laptop", id: 5 },
        { name: "Sony Laptop", id: 6 }
    ],
}

const cartReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const id = action.id;
            const newCart = [...state.cart, id];
            return {...state, cart: newCart}
        case REMOVE_FROM_CART:
            const idToRemove = action.id;
            const remainingCart = state.cart.filter(item => item !== idToRemove);
            return {...state, cart: remainingCart}
        default:
            return state;        
    }
}

export default cartReducers;