import React from 'react'

const CartItem = ({book, dispatch, bookCart}) => {
    const toggleBookCart = ()=> {
        const action = {type: 'TOGGLE_CART', value: book} 
        dispatch(action)
    }
    return (<div>
        <div> {book.title}</div>
        <div> {book.price} </div>
        <button onClick={()=> toggleBookCart()}>
                {bookCart.findIndex(item=>item.isbn === book.isbn) === -1 ?
                 'Ajouter au panier': 
                 'Retirer du panier'}
            </button>
    </div>)
}

export default CartItem