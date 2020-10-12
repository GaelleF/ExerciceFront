import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
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
       return <div className='cart-detail'> 
     
           <div className= 'cart-total'> 
               <span className='cart-total-cart'>TOTAL panier : </span> 
               <span className='cart-price-offer'>{bestOffer && bestOffer.totalPrice }  € </span> 
                 au lieu de {bestOffer && bestOffer.initialTotalPrice } € 
            </div>
           <div className='cart-resume'>
              <img className='cart-picture-wizard' src='./wizard-1417195_640.png' alt='sorcier illustration'/>   
          <div className= 'cart-recap'>
              <h4> Récapitulatif </h4>
        {bookCart.map((book)=> <CartItem key={book.isbn} book={book} dispatch={dispatch} bookCart={bookCart}/>)}
      </div>   </div>
       </div> 

    }
    return (
    <div className='cart-container'>
        <h1 className='cart-title'>Votre panier</h1>
        {
            bookCart.length > 0 ?
            displayCart():
            'Aucun livre dans le panier'
        }
    </div>
    )
}

const mapStateToProps=(state)=>{
    return {bookCart: state.bookCart || []}
  }
export default connect(mapStateToProps)(Cart)