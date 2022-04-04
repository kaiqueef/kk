import React from 'react';
import './Menu.css'
import SideMenu from './side-menu/SideMenu';

export default (props) => {
    return (
        <section className='section-menu'>
            <SideMenu/>
            <div id='menu'>
                {props.children}
            </div>
        </section>
    )
}