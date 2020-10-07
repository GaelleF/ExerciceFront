import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import BookItem from './BookItem'
import './Cart.css'
import {getCommercialOffers} from '../API/bookApi'


const Cart = ({ bookCart, dispatch}) => {
    const [commercialOffers, setCommercialOffers] = useState([])

    useEffect( () => {
        if (bookCart.length>0){
           getCommercialOffers(bookCart.map(book=> book.isbn))
           .then(res=> setCommercialOffers(res.offers || []))
        }
        
    }, [bookCart])
    console.log('COM ', commercialOffers, bookCart)
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