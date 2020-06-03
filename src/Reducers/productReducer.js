import { FETCH_PRODUCTS, FILTER_PRODUCTS_BY_SIZE, ORDER_PRODUCTS_BY_PRICE } from '../Actions/actionTypes';

const initialState = {
    items: [],
    filteredItems: [],
    size: "",
    sort: ""
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            console.log(action.payload, 'FETCH_PRODUCTS');
            return {
                ...state,
                items: action.payload,
                filteredItems: action.payload
            }

        case FILTER_PRODUCTS_BY_SIZE:
            console.log(action.payload, 'FILTER_PRODUCTS_BY_SIZE');
            return {
                ...state,
                filteredItems: action.payload.items,
                size: action.payload.size
            }

        case ORDER_PRODUCTS_BY_PRICE:
            console.log(action.payload, 'ORDER_PRODUCTS_BY_PRICE');
            return {
                ...state,
                filteredItems: action.payload.items,
                sort: action.payload.sort
            }

        default:
            return state;
    }
}

export default productReducer;