import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import BookItem from './BookItem'
import './Cart.css'
import {getCommercialOffers} from '../API/bookApi'
import {bestCommercialOffer} from '../utils/commercialOfferUtils'
import CartItem from './CartItem'


const Cart = ({ bookCart, dispatch}) => {
    const [commercialOffers, setCommercialOffers] = useState([])
    const [bestOffer, setBestOffer]= useState({})

    useEffect( () => {
        if (bookCart.length>0){
           getCommercialOffers(bookCart.map(book=> book.isbn))
           .then(res=> setCommercialOffers(res.offers || []))
        }
        
    }, [bookCart])

    useEffect(()=> {
        if (bookCart && bookCart.length >0 && commercialOffers && commercialOffers.length>0)
{       const newBestOffer= bestCommercialOffer({bookCart, commercialOffers})
        setBestOffer(newBestOffer)
    } 
    },[commercialOffers, bookCart])

    const displayCart= ()=> {
       return <div> 
           <div> TOTAL panier : {bestOffer && bestOffer.totalPrice } € au lieu de {bestOffer && bestOffer.initialTotalPrice } € </div>

           <h4> Récapitulatif </h4>
        {bookCart.map((book)=> <CartItem key={book.isbn} book={book} dispatch={dispatch} bookCart={bookCart}/>)}

       </div> 

    }
    console.log('COM ', commercialOffers, bookCart, bestOffer)
    return (
    <div className='cart-container'>
        <h2>Votre panier</h2>
        {
            bookCart.length > 0 ?
            displayCart():
            'Aucun livre dans le panier'
        }
{}
    </div>
    )
}

const mapStateToProps=(state)=>{
    return {bookCart: state.bookCart || []}
  }
export default connect(mapStateToProps)(Cart)