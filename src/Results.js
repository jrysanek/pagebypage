import React from 'react'
import Book from './Book'
import axios from 'axios'
import Showbook from './Showbook'



function Results(props) {



    return (
        <>
            {props.books.map((book, index) =>
               <Book  book={book} style={props.style} index={index} addToWishlist={props.addToWishlist} />

            )}
        </>
    )}
export default Results