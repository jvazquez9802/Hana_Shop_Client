import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { MenuItems } from "./MenuItems";

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            <nav className="navbar">
                <h1 className="navbar__logo">Hana Shop</h1>
                <div className="navbar__icon" onClick={this.handleClick}>
                    {this.state.clicked ? <FontAwesomeIcon className="navbar__icon navbar__icon--times" icon={faTimes} /> : <FontAwesomeIcon className="navbar__icon navbar__icon--bars" icon={faBars} />}
                </div>
                <ul className={this.state.clicked ? 'navbar__menu navbar__menu--active' : 'navbar__menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar;