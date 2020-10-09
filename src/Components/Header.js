import React from 'react'
import {Link} from "@reach/router"
import './Header.css'
import {connect } from 'react-redux'


const Header = ({bookCart}) => {

    return (<div className='header-container'>
        <div className='header-title'> La bibliotheque de Henri Potier</div>
        <nav>
        <Link className='header-link' to="/"> Liste des livres</Link>
        <Link className='header-link' to="cart"> 
        <span data-cy='header-cart'>
            {bookCart && bookCart.length > 0 ?`Panier (${bookCart.length})`: 'Panier'}
            </span></Link>
        </nav>
    </div>)
}

const mapStateToProps=(state)=>{
    return {bookCart: state.bookCart || []}
  }

export default connect(mapStateToProps)(Header)