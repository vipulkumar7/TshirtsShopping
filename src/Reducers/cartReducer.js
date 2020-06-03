import { ADD_TO_CART, SUB_TO_CART, REMOVE_FROM_CART } from "../Actions/actionTypes";

const initialState = {
    items: [],
}
export default function (state = initialState, action) {
    switch (action.type) {

        case ADD_TO_CART:
            console.log(action.payload, 'ADD_TO_CART');
            return {
                ...state,
                items: action.payload.cartItems,
            };

        case SUB_TO_CART:
            console.log(action.payload, 'SUB_TO_CART');
            return {
                ...state,
                items: action.payload.cartItems,
            };

        case REMOVE_FROM_CART:
            console.log(action.payload, 'REMOVE_FROM_CART');
            return {
                ...state,
                items: action.payload.cartItems
            };

        default:
            return state;
    }
}