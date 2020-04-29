import React from 'react'
import { withRouter } from 'react-router-dom'


function Showbook(props) {
    
    const books = props.books;
    const index = parseInt(props.match.params.index)
    console.log(books[index])
    if (books[index]) { 
    return (
        <div>
           <h2>{books[index].best_book.title._text}</h2>
           <h3>{books[index].best_book.author.name._text}</h3>
           <img src={books[index].best_book.image_url._text} />
        </div>
    )} else {
        return <div></div>
    }
}
export default withRouter(Showbook)