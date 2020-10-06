import React from 'react'
import { Link} from "@reach/router"
import './Header.css'


const Header = () => {

    return (<div className='header-container'>
        <div className='header-title'> La bibliotheque de Henry Potier</div>
        <nav>
        <Link className='header-link' to="/">Accueil</Link>
        <Link className='header-link' to="bookList"> Liste des livres</Link>
        <Link className='header-link' to="cart"> Panier</Link>
        </nav>
    </div>)
}

export default Header