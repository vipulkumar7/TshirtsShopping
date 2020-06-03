import React, { Component } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as actionCreatorCart from '../Actions/actionCreatorCart'
import * as actionCreatorProduct from '../Actions/actionCreatorProduct'

class Products extends Component {

    componentDidMount() {
        this.props.actionCreatorProduct.fetchProducts();
    }

    handleClick = (cartItem, product) => {
        this.props.actionCreatorCart.addToCart(cartItem, product)
    }

    render() {
        const productItems = this.props.products.map((product) => {
            return (
                <div className="col-md-4" key={product.id}>
                    <div className="thumbnail text-center">
                        <a href={`#${product.id}`}>
                            <img src={`products/${product.sku}_2.jpg`} alt={product.title} />
                            <p>{product.title}</p>
                        </a>
                        <b>{(product.price)} $</b>
                        <button
                            className="btn btn-primary"
                            onClick={() => { this.handleClick(this.props.cartItems, product) }}
                        >
                            Add to cart
                </button>
                    </div>
                    <p>{product.title}</p>
                </div >
            )
        })

        return (
            <div className="row" >
                {productItems}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.productReducer.filteredItems,
        cartItems: state.cartReducer.items,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        actionCreatorProduct: bindActionCreators(actionCreatorProduct, dispatch),
        actionCreatorCart: bindActionCreators(actionCreatorCart, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);