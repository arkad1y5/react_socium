import React, { component } from 'react';
import b from './Button.module.css';

const Button = (props) => {
    return <div>
        <button className={b.button}>{props.text}</button>
    </div>
}




export default Button;



