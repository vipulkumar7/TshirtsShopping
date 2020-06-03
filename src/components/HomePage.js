import React, { Component } from 'react'
import Products from "./Products";
import Filter from "./Filter";

export default class HomePage extends Component {
    render() {
        return (
            <div className='container'>
                <h1>E-commerce Shopping Cart Application</h1>
                <hr />
                <div className="row">
                    <div className="col-md-12">
                        <Filter />
                        <hr />
                        <Products />
                    </div>
                </div>
            </div>
        )
    }
}
