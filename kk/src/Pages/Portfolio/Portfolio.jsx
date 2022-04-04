import React from 'react';
import Menu from '../../components/menu/Menu';

import portfolio from '../../data/portfolio/portfolio';

export default (props) => {

    function importAll(r) {
        return r.keys().map(r);
      }
      
    const images = importAll(require.context('../../images/portfolio/preview', false, /\.(png|jpe?g|svg)$/));

    function getProdutosListItem() {
        return images.map(image => {
            return <div class="preview">
                    <img src={image}></img>
                </div>
        })

        // return portfolio.map(prod => {
        //     // const current = {require: require(prod.preview)}; 
        //     const current = {require: require("../../images/portfolio/preview/1.jpg")}; 
        //     // const previewImage = {current: (`${prod.preview}`)};
        //     // return (<div key={prod.id}>
        //     //     {/* <img src={previewImage.current} alt="Not found"/> */}
        //     //     {prod.id} - {prod.nome} -&gt;
        //     //     </div>)
        //     // return <div>
        //     //     <img></img>
        //     //     ({prod.preview})
        //     // </div>
        //     return <>
        //         {prod.preview}
        //         <img src={current.require}></img>
        //     </>
        // })
    }

    return (
        <>
            <Menu pagina="portfolio" >
                {getProdutosListItem()}
            </Menu>
            {/* <div className='Teste'>
                {getProdutosListItem()}
            </div> */}
        </>
    )
}
