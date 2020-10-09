import React from 'react'
import './CartItem.css'

const CartItem = ({book, dispatch, bookCart}) => {
    const toggleBookCart = ()=> {
        const action = {type: 'TOGGLE_CART', value: book} 
        dispatch(action)
    }
    return (<div className='cart-item-container'>
        <div className='cart-item-title'> {book.title}</div>
        <div className='cart-item-price'> {book.price} € </div>
        <button className='button-cart cart-item-button' onClick={()=> toggleBookCart()}>
                {bookCart.findIndex(item=>item.isbn === book.isbn) === -1 ?
                 'Ajouter au panier': 
                 'Retirer du panier'}
            </button>
    </div>)
}

export default CartItem