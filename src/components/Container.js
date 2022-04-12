import React from "react";
import css from './Container.module.css';

export default function Container(props) {
    return <>
        <div className={css.div} id='quote-box'>{props.children}</div>
    </>
}