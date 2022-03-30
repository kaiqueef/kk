import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faInstagram, faArtstation, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

export default (props) => {
    return (
        <section className='header'>
            <div className='logo'><a>KK</a></div>
            <div className='navigation'>
                <a className='modelos'>Modelos</a>
                <a className='texturas'>Texturas</a>
                <a className='projetos'>Projetos</a>
                <a className='contato'>Contato
                    <div className='contato-tooltip'>
                        <a href="https://www.linkedin.com/in/kaique-ferreira-854a75139/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} />
                            Linkedin
                        </a>
                        <a href="https://www.instagram.com/kkaique.ferreira/" target="_blank"><FontAwesomeIcon icon={faInstagram} />
                            Instagram
                        </a>
                        <a href="https://www.artstation.com/kaiqueferreira" target="_blank"><FontAwesomeIcon icon={faArtstation} />
                            Artstation
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=+55 27 99510-5454" target="_blank"><FontAwesomeIcon icon={faWhatsapp} />
                            WhatsApp
                        </a>
                    </div>
                </a>
            </div>
        </section>
    )
}