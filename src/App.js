import React, { useState } from 'react';
import { Route, Redirect, Link } from 'react-router-dom'
import Results from './Results'
import Showbook from './Showbook'
import './App.css';
import convert from 'xml-js';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import Button from './Button';
import SearchBar from './SearchBar';

function App() {
  const [input, userInput] = useState("");
  const [books, setBooks] = useState([]);
  const [wishlist, setWishlist] = useState([]);





  const getBooks = async (e) => {
    e.preventDefault();
    console.log(input)

    let apiKey = process.env.REACT_APP_API_KEY
    const response = await axios(`https://corsanywhere.herokuapp.com/https://www.goodreads.com/search/index.xml?key=${apiKey}&q=${input}`)

    const resJSON = convert.xml2json(response.data, { compact: true, spaces: 4 })
    // console.log(JSON.parse(resJSON))
    const parseRes = JSON.parse(resJSON)
    setBooks(parseRes.GoodreadsResponse.search.results.work)
    // console.log(parseRes)
  };

  //making the adds book to wishlist function
  const addToWishlist = (book) => {
    if (!localStorage.getItem('wishlist')) {
      localStorage.setItem('wishlist', JSON.stringify([]));
    }
    //new variable to store the book to wishlist
    const newWishlist = JSON.parse(localStorage.getItem('wishlist'));
    newWishlist.push(book.best_book.title._text);
    localStorage.setItem('wishlist', JSON.stringify(newWishlist));
    setWishlist(newWishlist);
  }


  const clearInput = (e) => {
    userInput([]);
    setBooks([]);
  }




  return (
    <div className="App">

      <Header title="Page by Page" />

      <main>
            <Link exact to="/">
                <button className="Home" onClick={clearInput}>Home</button>
            </Link>

            <SearchBar getBooks={getBooks} input={input} userInput={userInput} />
        {/* <form >

          <input type="text"
            placeholder="author name or title"
            value={input}
            onChange={(e) => userInput(e.target.value)}>
          </input>

          
          <Button title="Submit" getBooks={getBooks} />
        </form> */}

        <div className="search-results">
          <div className="books">

            <Route exact path="/">
              <Results  addToWishlist={addToWishlist} books={books} />
            </Route>




            <Route path="/Showbook/:index">
              <Showbook books={books} />
            </Route>

          </div>
        </div>
      </main>

      <Footer title="&copy;Jenna R" />
    </div>

  );

}
export default App;
