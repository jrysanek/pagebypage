import React from 'react';
import { withRouter} from 'react-router-dom';

function Button(props) {

return (
<div>
    <button className="sButton" style={props.style} onClick={props.getBooks}>{props.title}</button> 
</div>
)
}

export default Button;