import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../models/contacto.class';
import ComponentB from './ComponentB';

function componenteA ({ contacto }) {
    return (
        <div>            
            <h3>
                Nombre/Apellido: { contacto.nombre } { contacto.apellido }
            </h3>
            <h3>
                Email: { contacto.email }
            </h3>
            <ComponentB estado={true}/>
        </div>
    );
}

componenteA.propTypes = {
    contacto: PropTypes.instanceOf(Contacto),
};

export default componenteA;