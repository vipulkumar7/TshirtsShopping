import React, { Component } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as actionCreatorProduct from '../Actions/actionCreatorProduct'
class Filter extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-4">{`${this.props.filteredProducts.length} products found.`}</div>
                <div className="col-md-4">
                    <label>
                        Order by
                        <select
                            className="form-control"
                            value={this.props.sort}
                            onChange={(event) => {
                                this.props.actionCreatorProduct.sortProducts(
                                    this.props.filteredProducts,
                                    event.target.value
                                );
                            }}
                        >
                            <option value="">Select</option>
                            <option value="lowestprice">Lowest to highest</option>
                            <option value="highestprice">Highest to lowest</option>
                        </select>
                    </label>
                </div>
                <div className="col-md-4">
                    <label>
                        Filter Size
                        <select
                            className="form-control"
                            value={this.props.size}
                            onChange={(event) => {
                                this.props.actionCreatorProduct.filterProducts(
                                    this.props.products,
                                    event.target.value
                                );
                            }}
                        >
                            <option value="">ALL</option>
                            <option value="x">XS</option>
                            <option value="s">S</option>
                            <option value="m">M</option>
                            <option value="l">L</option>
                            <option value="xl">XL</option>
                            <option value="xxl">XXL</option>
                        </select>
                    </label>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.productReducer.items,
        filteredProducts: state.productReducer.filteredItems,
        size: state.productReducer.size,
        sort: state.productReducer.sort,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        actionCreatorProduct: bindActionCreators(actionCreatorProduct, dispatch),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
