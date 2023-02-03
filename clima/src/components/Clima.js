import React from 'react';
import PropTypes from 'prop-types';

const Clima = ({resultado}) => {

    // extraer los valores 
    const { name, main } = resultado;

    //por si el componente cambia
    if(!name) return null;

    let gradosC = (main.temp - 273.15).toFixed(1)


    return (
        <div 
            className='card-panel grey col s12'
            style={{
                 
            }}
        >
            <div className='white-text'>
                <h2>El clima de {name} es: </h2>
                <p className='temperatura'>
                    {gradosC}°C
                </p>                
                <p>
                    Temperatura Máxima: {(main.temp_max - 273.15).toFixed(1)}°C
                </p>                
                <p>
                    Temperatura Mínima: {(main.temp_min - 273.15).toFixed(1)}°C
                </p>                
            </div>
        </div>
     );
}
Clima.PropTypes = {
    resultado: PropTypes.object.isRequired
}
export default Clima;