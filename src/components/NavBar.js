import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class NavBar extends Component {
    render() {
        return (
            <nav className="navbar-default">
                <div style={{ backgroundColor: 'teal', padding: '20px' }}>
                    <span style={{ marginRight: '30px', fontSize: '20px' }}><NavLink style={{ color: 'white' }} to="/" exact>Shop</NavLink></span>
                    <span style={{ marginRight: '30px', fontSize: '20px' }}><NavLink style={{ color: 'white' }} to="/cart">Cart</NavLink></span>
                </div>
            </nav>
        )
    }
}
