import React from 'react'
import './App.css'
import BookList from './Components/BookList'
import Cart from './Components/Cart'
import { Router } from "@reach/router"
import Header from './Components/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <BookList path='bookList' />
        <Cart path='cart' />
      </Router>
      
    </div>
  );
}

export default App;
