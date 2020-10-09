import React from 'react'
import './BookItem.css'
import {connect } from 'react-redux'



const BookItem = ({book, bookCart, dispatch}) => {

    const toggleBookCart = ()=> {
        const action = {type: 'TOGGLE_CART', value: book} 
        dispatch(action)
    }

    return (
     <div className='book-item-container'>
         <img className='book-picture' src={book.cover} alt='couverture du livre'/>
         <div> 
             <div className='book-item-title'> {book.title}</div>
             <div className='book-item-synopsis'> {`${book.synopsis.join('\n')}`} 
            </div>
            <div className='book-item-price'>{`Prix : ${book.price} €`}</div>
            <button className='button-cart' onClick={()=> toggleBookCart()}>
                {bookCart.findIndex(item=>item.isbn === book.isbn) === -1 ?
                 'Ajouter au panier': 
                 'Retirer du panier'}
            </button>
         </div>
    </div>)
}
const mapStateToProps=(state)=>{
    return {bookCart: state.bookCart || []}
  }
//map((paragraph, index) => <p key={index} className='book-item-paragraph'> {paragraph} </p>
export default connect(mapStateToProps)(BookItem)