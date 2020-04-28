import React from 'react'
import { withRouter } from 'react-router-dom'


function Showbook(props) {
    
    const books = props.books;
    const index = parseInt(props.match.params.index)
    console.log(books[index])
    return (
        <div>
           
        </div>
    )
}
export default withRouter(Showbook)