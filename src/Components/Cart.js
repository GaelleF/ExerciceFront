import React from 'react'
import { connect } from 'react-redux'
import BookItem from './BookItem'
import './Cart.css'

const Cart = ({ bookCart, dispatch}) => {
    return (
    <div className='cart-container'> 
        <h2>Votre panier</h2>
        {
            bookCart.length > 0 ?
            bookCart.map((book)=> <BookItem key={book.isbn} book={book} />):
            'Aucun livre dans le panier'
        }

    </div>
    )
}

const mapStateToProps=(state)=>{
    return {bookCart: state.bookCart || []}
  }
export default connect(mapStateToProps)(Cart)