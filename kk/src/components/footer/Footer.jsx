import React from 'react';
import './Footer.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default (props) => {
    return(
        <section className='footer'>
            <div>
                <div className='logo'>
                    <a>KK</a>
                </div>
                <div className='contact-info'>
                {/* <i class="fa-brands fa-linkedin-in"></i> */}
                {/* <FontAwesomeIcon icon={solid('user-secret')} /> */}
                </div>
            </div>
        </section>
    )
}