import React from 'react';
import './App.css';

function App() {
  //call api 
  //render books and title on page, wish list option on page
  //when user clicks link, opens up more information.
  return (
    <div className="App">
      <header>
        <h1>
          Page by Page
        </h1>
      </header>
      <p>Home</p>
      <input type="text" placeholder=" title or author name"></input>
      <button type="button">Submit</button>
      <div className="search-results">
        <p className="books">

        </p>
      </div>
    </div>
  );
}

export default App;
