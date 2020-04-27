import React, {useEffect, UseState } from 'react';

import './App.css';
import Axios from 'axios';

function App() {
  const []

  const getBooks = async (e) => {
    e.preventDefault
   const response = await axios({
     baseUrl: 'http://openlibrary.org/books/OL1M.json',
     method: 'get',
     params: {
       name: input, //name whatever i store input
       author:
     }
    });
  };
  //call api 
  //render books and title on page, wish list option on page
  //when user clicks link, opens up more information.
  return (
    <div className="App">
      <header>
          Page by Page
      </header>
      <p>Home</p>
      <form onSubmit={getBooks}>
      <input type="text" placeholder=" title or author name"></input>
      <button type="button">Submit</button>
      </form>
      <div className="search-results">
        <main className="books">

        {/* <Results /> */}
        </main>
      </div>
    </div>
  );
}

export default App;
