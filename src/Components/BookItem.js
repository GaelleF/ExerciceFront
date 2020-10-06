import React from 'react'

const BookItem = ({book}) => {

    return (
     <div>
         <img src={book.cover} alt='couverture du livre'/>
         <div> 
             <h3> {book.title}</h3>
             <p> {book.synopsis.join(<br />)}</p>
         </div>
    </div>)
}

export default BookItem