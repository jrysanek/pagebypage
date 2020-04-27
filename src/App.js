import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
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
      <div className="searchresults">
        <p className="books">
          
        </p>
      </div>
    </div>
  );
}

export default App;
