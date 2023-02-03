import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({piePagina}) => {
    return ( 
        <h3 className='footer'>{piePagina}</h3>
     );
}

Formulario.PropTypes = {
    piePagina: PropTypes.string.isRequired
}
export default Footer;
