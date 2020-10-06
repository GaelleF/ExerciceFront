import React, {useState, useEffect} from 'react'
import {getAllBooks} from '../API/bookApi.js'
import  BookItem  from './BookItem'


const BookList= ()=> {

    const [books, setBooks] = useState([])

    useEffect(()=> {
        getAllBooks()
        .then(newBooks=> setBooks(newBooks))      
    }, [])

    return (
        <div>
            {books && books.length > 0 ? 
            books.map((book)=> <BookItem book={book}/>):
            'no book'}
        </div>
    )



}
export default BookList