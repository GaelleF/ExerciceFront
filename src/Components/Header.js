import React from 'react'
import {Link} from "@reach/router"
import './Header.css'


const Header = () => {

    return (<div className='header-container'>
        <div className='header-title'> La bibliotheque de Henri Potier</div>
        <nav>
        <Link className='header-link' to="/"> Liste des livres</Link>
        <Link className='header-link' to="cart"> <span>Panier</span></Link>
        </nav>
    </div>)
}

export default Header