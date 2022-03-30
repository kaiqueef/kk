import React from 'react';
import './Pages.css'
export default (props) => 
    <div className='icons' {...props}>
        <a className={props.children}>
            <h3>{props.children}</h3>
            <h2>{props.descricao}</h2>
        </a>
    </div>
