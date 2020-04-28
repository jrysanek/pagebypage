import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import convert from 'xml-js';
import axios from 'axios';

function App() {
  // const [title, userTitle] = ('')
  const [input, userInput] = useState([]);





  const getBooks = async (e) => {
    e.preventDefault();
    console.log(input)

    let apiKey = process.env.REACT_APP_API_KEY

    //assign a variable for user input here 
    const response = await axios(`https://corsanywhere.herokuapp.com/https://www.goodreads.com/search/index.xml?key=${apiKey}&q=${input}`)

    const resJSON = convert.xml2json(response.data, { compact: true, spaces: 4 })
    console.log(JSON.parse(resJSON))
    const parseRes = JSON.parse(resJSON)


    console.log(parseRes.GoodreadsResponse)
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

          {/* <Results /> */}
        </main>
      </div>
    </div>
  );
}

export default App;
