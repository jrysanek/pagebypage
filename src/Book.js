import React from 'react'
import { Link } from 'react-router-dom'

export default function Book(props) {
    const book= props.book;
    const index= props.index;
    return (
        <div>
        <img src={book.best_book.image_url._text} />
        <button onClick={() => props.addToWishlist(book)}>wishlist</button>
        <Link to={`/Showbook/${index}`}><h2>{book.best_book.title._text}</h2></Link>

    </div>
    )
}
