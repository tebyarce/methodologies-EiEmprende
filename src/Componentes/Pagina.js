import * as React from 'react';
import Titulo from './Titulo/Titulo';
import Tarjeta from './Tarjeta/Tarjeta';
import "./Pagina.css"

function Pagina() {
    return (
        <div className='pagina'>
            <Titulo></Titulo>
            <Tarjeta></Tarjeta>
        </div>
    );
}
export default Pagina;