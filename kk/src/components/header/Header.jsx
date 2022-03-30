import React from 'react';
import './Header.css';

export default (props) => {
    return(
        <section className='header'>
            <div className='logo'><a>KK</a></div>
            <div className='navigation'>
                <a className='modelos'>Modelos</a>
                <a className='texturas'>Texturas</a>
                <a className='projetos'>Projetos</a>
                <a className='contato'>Contato</a>
            </div>
        </section>
    )
}