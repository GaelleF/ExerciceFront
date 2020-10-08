import React, {useState, useEffect} from 'react'
import {getAllBooks} from '../API/bookApi.js'
import  BookItem  from './BookItem'
import './BookList.css'


const BookList= ()=> {

    const [books, setBooks] = useState([])
    const [searchText, setSearchText] = useState('')

    useEffect(()=> {
        getAllBooks()
        .then(newBooks=> setBooks(newBooks))      
    }, [])

    return (
        <div>
        <input type='text' value={searchText} onChange={(event)=> setSearchText(event.target.value)} placeholder='Rechercher'/> 
        <div className='book-list-container'>
            
            {books && books.length > 0 ? 
            books.filter(book=> book.title && book.title.toLowerCase().includes(searchText.toLowerCase()))
                .map((book) => <BookItem key={book.isbn} book={book}/>):
            'no book'}
        </div>
        </div>
    )
}
export default BookList