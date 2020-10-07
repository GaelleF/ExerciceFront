import React, {useState, useEffect} from 'react'
import {getAllBooks} from '../API/bookApi.js'
import  BookItem  from './BookItem'
import './BookList.css'


const BookList= ()=> {

    const [books, setBooks] = useState([])

    useEffect(()=> {
        getAllBooks()
        .then(newBooks=> setBooks(newBooks))      
    }, [])

    return (
        <div className='book-list-container'>
            {books && books.length > 0 ? 
            books.map((book)=> <BookItem key={book.isbn} book={book}/>):
            'no book'}
        </div>
    )



}
export default BookList