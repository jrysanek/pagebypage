import React, { useEffect, UseState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  // const [title, userTitle] = ('')
  const [author, userAuthor] = useState([]) 


  useEffect(() => {

    getBooks()
  }, [])
  const getBooks = async (e) => {
    e.preventDefault
   const response = await axios({
     baseUrl: 'http://openlibrary.org/books/OL1M.json',
     method: 'get',
     params: {             
       author: ''
       
     }
    });
    // userAuthor()
    console.log(response)
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
      <input type="text" placeholder="author name" onChange={e => userAuthor(e.target.value)}></input>
      <button onClick={() => getBooks()} >Submit</button>
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
