import React from 'react';
import notFound from '../images/not_found.gif'

export default () => {
    return(
        <>
        <h1>Página não encontrada. ):</h1>
            <img src={notFound} alt="Not found"  width="100%" />
        </>
    )
}