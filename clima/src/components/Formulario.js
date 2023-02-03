import React, { useState } from 'react';
import Error from './Error';
import PropTypes from 'prop-types';

const Formulario = ({busqueda, guardarBusqueda, guardarConsultar}) => {
    
    // validar el error
    const [error, guardarError] = useState(false);

    // extraer ciudad y pais
    const ciudad = busqueda.ciudad;
    const pais = busqueda.pais;

    // funcion que coloca los elementos en el state
    const handleChange = e => {
        // actualizar el state
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    };

    // Cuando el usuario de submit al form
    const handleSubmit = e => {
        e.preventDefault();

        // validar
        if(ciudad.trim() === '' || pais.trim() === '') {
            guardarError(true);
            return;
        } 

        guardarError(false);

        // pasarlo al componete principal
        guardarConsultar(true);

    };

    return ( 
        <form
            onSubmit={handleSubmit}
        >
            {error
                ?
                    <Error
                        mensaje='Ambos Campos son obligatorios'
                    />
                :
                    null
            }
            <div className='input-field col s12'>
                <input
                    type='text'
                    name='ciudad'
                    id='ciudad'
                    value={ciudad}
                    onChange={handleChange}
                />
                <label htmlFor='ciudad'>Localidad:</label>
            </div>
            <div className='input-field col s12 select-field'>
                <label htmlFor='pais'>País:</label>
                <br/>
                <br/>
                <div>
                    <select 
                        className='browser-default' 
                        name='pais'
                        id='pais'
                        value={pais}
                        style={{ cursor: 'pointer' }}
                        onChange={handleChange}
                    >
                        <option value=''>--Seleccione un Pais--</option>
                        <option value='AR'>Argentina</option>
                        <option value='CR'>Costa RIca</option>
                        <option value='US'>Estados Unidos</option>
                        <option value='MX'>Mexico</option>
                        <option value='CO'>Colombia</option>
                        <option value='CU'>Cuba</option>
                    </select>
                </div>
            </div>

            <div className='input-field col s12'>
                <input
                    type='submit'
                    value='Buscar Clima'
                    className='waves-effect waves-light btn-large btn-block orange accent-4'
                    style={{ width: '100%' }}
                />
            </div>
        </form>
     );
}

Formulario.PropTypes = {
    busqueda: PropTypes.object.isRequired,
    guardarBusqueda: PropTypes.func.isRequired,
    guardarConsultar: PropTypes.func.isRequired
}
 
export default Formulario;
