import React, { useEffect, useState } from 'react';
import { Route, Redirect, Link } from 'react-router-dom'
import Results from './Results'
import Showbook from './Showbook'
import './App.css';
import convert from 'xml-js';
import axios from 'axios';

function App() {
  // const [title, userTitle] = ('')
  const [input, userInput] = useState([]);
  const [books, setBooks] = useState([]);
  const [wishlist, setWishlist] = ([])




  const getBooks = async (e) => {
    e.preventDefault();
    // console.log(input)

    let apiKey = process.env.REACT_APP_API_KEY

    //assign a variable for user input here 
    const response = await axios(`https://corsanywhere.herokuapp.com/https://www.goodreads.com/search/index.xml?key=${apiKey}&q=${input}`)

    const resJSON = convert.xml2json(response.data, { compact: true, spaces: 4 })
    // console.log(JSON.parse(resJSON))
    const parseRes = JSON.parse(resJSON)
    // const name = parseRes.GoodreadsResponse.search.results.work[0].best_book.title._text
    setBooks(parseRes.GoodreadsResponse.search.results.work)
    console.log(parseRes)
  };

  
   const addToWishlist = (book) => {
     if (!localStorage.getItem('wishlist')) {
       localStorage.setItem('wishlist', JSON.stringify([]));
     }
     const newWishlist = () => {
    JSON.parse(localStorage.getItem('wishlist'));
     newWishlist.push(book);
     localStorage.setItem('wishlist', JSON.stringify(newWishlist));
     setWishlist(newWishlist);

   }
  }



  //call api 
  //render books and title on page, wish list option on page
  //when user clicks link, opens up more information.
  return (
    <div className="App">
      <header>
        Page by Page
      </header>
      <Link to="/">
      <p>Home</p>
      </Link>
      <form >

        <input type="text"
          placeholder="author name or title"
          value={input}
          onChange={(e) => userInput(e.target.value)}>
        </input>

        <button onClick={getBooks}>Submit</button>
      </form>

      <div className="search-results">
        <main className="books">

          <Route path="/">
            {books.length && <Redirect to="/results" />}
          </Route>


          <Route path="/results">
            <Results addToWishlist={addToWishlist} books={books} />
          </Route>

          <Route path="/Showbook/:index">
            <Showbook books={books} />
          </Route>

        </main>
      </div>
    </div>
  );
}

export default App;
