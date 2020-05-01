import React from 'react';
import Button from './Button';


 const SearchBar = (props) =>
 
     (
        <div>
            <form style={props.style}>
                <input type="text"
                    placeholder="author name or title"
                    value={props.input}
                    onChange={props.onChange}
                    >
                </input>   
            </form>
                
        </div>
    )

export default SearchBar