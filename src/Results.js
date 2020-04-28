import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Showbook from './Showbook'



function Results(props) {



    return (
        <>

            {props.books.map((book, index) =>
                <div>
                    <img src={book.best_book.image_url._text} />

                    <Link to={`/Showbook/${index}`}><h2>{book.best_book.title._text}</h2></Link>

                </div>

            )}
        </>
    )}
export default Results