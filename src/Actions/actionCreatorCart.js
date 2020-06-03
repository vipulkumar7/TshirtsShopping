import { ADD_TO_CART, SUB_TO_CART, REMOVE_FROM_CART } from "./actionTypes";

export const addToCart = (items, product) => (dispatch) => {
    const cartItems = items.slice();
    let productAlreadyInCart = false;
    cartItems.forEach((cp) => {
        if (cp.id === product.id) {
            cp.count += 1;
            productAlreadyInCart = true;
        }
    });

    if (!productAlreadyInCart) {
        cartItems.push({ ...product, count: 1 });
    }
    dispatch({ type: ADD_TO_CART, payload: { cartItems } });
};

export const subToCart = (items, product) => (dispatch) => {
    const cartItems = items.slice();

    // Object.objsize = function (Myobj) {
    //     var osize = 0, key;
    //     for (key in Myobj) {
    //         if (Myobj.hasOwnProperty(key)) osize++;
    //     }
    //     return osize;
    // };

    // var objsize = Object.objsize(cartItems);
    // console.log('Size of the current object : ' + objsize);

    cartItems.map((cp) => {
        if (product.id === cp.id) {
            cp.map((i) => {
                if (product.id === i.id) {
                    cp.count -= 1;
                }
            })
            // console.log(product.id, "Product id");
            // console.log(cp.id, "cp id");
        }
    });

    dispatch({ type: SUB_TO_CART, payload: { cartItems } });
};

export const removeFromCart = (items, product) => (dispatch) => {
    const cartItems = items.slice().filter((a) => a.id !== product.id);
    // localStorage.setItem("cartItems", JSON.stringify(cartItems));
    dispatch({ type: REMOVE_FROM_CART, payload: { cartItems } });
};