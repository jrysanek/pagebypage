import React from 'react'
import { Link } from 'react-router-dom'

export default function Book(props) {
    const book= props.book;
    const index= props.index;
    return (
        <div className="results" >
                <img className="imgRes" src={book.best_book.image_url._text} />
                <button className="wishlist" onClick={() => props.addToWishlist(book)}>Wishlist</button>
                <Link to={`/Showbook/${index}`}><h2>{book.best_book.title._text}</h2></Link>
         </div>
    )
}
