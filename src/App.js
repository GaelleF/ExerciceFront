import React from 'react'
import './App.css'
import BookList from './Components/BookList'
import Cart from './Components/Cart'
import { Router } from "@reach/router"
import Header from './Components/Header'
import { Provider } from 'react-redux'
import Store from './Store/configureStore'

function App() {
 
  return (
    <Provider store={Store} >
    <div className="App">
      <Header />
      <Router>
        <BookList path='/' />
        <Cart path='cart' />
      </Router>   
    </div>
    </Provider>
  );
}

export default App;
