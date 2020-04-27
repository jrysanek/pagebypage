import React, {useEffect, UseState } from 'react';

import './App.css';

function App() {
  //call api 
  //render books and title on page, wish list option on page
  //when user clicks link, opens up more information.
  return (
    <div className="App">
      <header>
          Page by Page
      </header>
      <p>Home</p>
      <input type="text" placeholder=" title or author name"></input>
      <button type="button">Submit</button>
      <div className="search-results">
        <main className="books">

        {/* <Results /> */}
        </main>
      </div>
    </div>
  );
}

export default App;
