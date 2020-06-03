import { createStore, applyMiddleware, compose } from 'redux'
import thunk from "redux-thunk";
import rootReducer from '../Reducers/rootReducer'

// const cartItems = localStorage.getItem("cartItems")
//     ? JSON.parse(localStorage.getItem("cartItems"))
//     : [];
// const initialState = { cart: { items: cartItems } };
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    // initialState,
    composeEnhancer(applyMiddleware(thunk))
)

export default store;