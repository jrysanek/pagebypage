import React from 'react'

export default function Footer(props) {
    return (
        <div>
            <footer style={props.style}>
                <h4>
                    {props.title}
                    <a href="https://www.goodreads.com" target="_blank">
                    <img src="https://s.gr-assets.com/assets/icons/goodreads_icon_32x32-6c9373254f526f7fdf2980162991a2b3.png" alt="goodreads logo"></img></a>
                </h4>
            </footer>
        </div>
    )
}
