import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom'
import * as actionCreatorCart from '../Actions/actionCreatorCart'
class Cart extends Component {
    render() {
        const { cartItems } = this.props;

        return (
            <div className="container">
                {cartItems.length === 0 ? (
                    "Basket is empty"
                ) : (
                        <div>
                            You have {cartItems.length} items in the basket. <hr />
                        </div>
                    )}
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Amount</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.cartItems.map((item) => {
                                return (
                                    <>
                                        <tr key={item.id}>
                                            <td>{item.title}</td>
                                            <td>{(item.price)}</td>
                                            <td>{item.count}</td>
                                            <td>{((item.price) * (item.count))}</td>
                                            <td>
                                                <Link style={{ marginRight: '15px' }} to="/cart">
                                                    <button type="button" className="btn btn-primary btn-xs" onClick={() => { this.props.actionCreatorCart.addToCart(this.props.cartItems, item) }}>+</button>
                                                </Link>
                                                <Link to="/cart">
                                                    <button type="button" className="btn btn-primary btn-xs" onClick={() => { this.props.actionCreatorCart.subToCart(this.props.cartItems, item) }}>-</button>
                                                </Link>
                                                <span style={{ marginLeft: '30px' }}>
                                                    <button type="button" className="btn btn-primary" onClick={(e) => { this.props.actionCreatorCart.removeFromCart(this.props.cartItems, item) }}>Remove</button>
                                                </span>
                                            </td>
                                        </tr>
                                    </>
                                )
                            })
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Total</th>
                            <th></th>
                            <th>{cartItems.reduce((a, c) => a + c.count, 0)}</th>
                            <th>{
                                cartItems.reduce((a, c) => a + c.price * c.count, 0)
                            } $</th>
                            <th></th>
                        </tr>
                    </tfoot>
                </table>
                <button className="btn btn-primary" onClick={() => alert("Todo: Implement checkout page.")}>
                    checkout
                </button>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        products: state.productReducer.filteredItems,
        cartItems: state.cartReducer.items,
        product: state.cartReducer.product
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        actionCreatorCart: bindActionCreators(actionCreatorCart, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
