import React from "react";

export default function QuoteAuthor(props) {
    return <>
        <div className='text' id='author'><em>-{props.text}</em></div>
    </>
}