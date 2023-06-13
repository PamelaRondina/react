
import React, { useState } from 'react';
import PropTypes from 'prop-types';


function ComponentB (estado) {
    const [conectado, setConectado] = useState(estado);
    return (
        <div>
            <h3>
                {conectado === false ? 'Contacto no Disponible' : 'Contacto en Línea'}
            </h3>
            <button onClick={() => setConectado(!conectado)}>{conectado === false ? 'Conectado' : 'Desconectado'}</button>
        </div>
    );
};


ComponentB.propTypes = {
    estado: PropTypes.bool,
};


export default ComponentB;
