import React from 'react';
import Button from './Button';


export default function SearchBar(props) {
    const input = {input}
    const userInput = {userInput}
    const getBooks = {getBooks}
    return (
        <div>
            <form >

                <input type="text"
                    placeholder="author name or title"
                    value={input}
                    onChange={(e) => userInput(e.target.value)}>
                </input>


                <Button title="Submit" getBooks={getBooks} />
            </form>
        </div>
    )
}
