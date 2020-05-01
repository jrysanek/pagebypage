import React from 'react'
import { withRouter } from 'react-router-dom'


function Showbook(props) {
    
    const books = props.books;
    const index = parseInt(props.match.params.index)
    console.log(books[index])
    if (books[index]) { 
    return (
        <div>
           <h2 className="showTitle">{books[index].best_book.title._text}</h2>
           <h3 className="showAuth">{books[index].best_book.author.name._text}</h3>
           <img className="showImg" src={books[index].best_book.image_url._text} />
           <button className="showWishlist">Wishlist</button>
        </div>
    )} else {
        return <div></div>
    }
}
export default withRouter(Showbook)