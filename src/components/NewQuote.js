import React from "react";


export default function NewQuote(props) {
    return <div id='new-quote-button'>
    <button onClick={props.onClick} className='btn btn-default' id="new-quote">
        New Quote
    </button>
    </div>
}