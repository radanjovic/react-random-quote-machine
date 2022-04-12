import React from "react";

export default function QuoteText(props) {
    return <>
        <div className='text' id='text'><strong>''{props.text}''</strong></div>
    </>
}