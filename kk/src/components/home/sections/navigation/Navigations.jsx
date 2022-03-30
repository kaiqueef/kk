import React, { Component } from 'react';
import Pages from './Pages/Pages'
import Modelos from '../../../../images/navigation/Modelos.png'
import Projetos from '../../../../images/navigation/Projetos.jpg'
import Texturas from '../../../../images/navigation/Texturas.png'

export default (props) =>
    <section className='navigation'>
        <div className='navigation-wrapper'>
            <Pages style={{ backgroundImage: `url(${Modelos})` }}>
                modelos
            </Pages>
            <Pages style={{ backgroundImage: `url(${Texturas})` }}>
                texturas
            </Pages>
            <Pages style={{ backgroundImage: `url(${Projetos})` }}>
                Portfólio
            </Pages>
        </div>
    </section>

