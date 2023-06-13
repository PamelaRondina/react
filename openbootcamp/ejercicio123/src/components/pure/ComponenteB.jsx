import React from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';

const ComponentB = ({ props }) => {
    return (
        <div>
            <h2>
                Nombre: { props.nombre }
            </h2>
            <h3>
                Apellido: { props.apellido }
            </h3>
            <h4>
                E-mail: { props.email }
            </h4>
            <h5>
                Conectado: { props.conectado ? 'CONECTADO EN LINEA':'CONTACTO NO DISPONIBLE' }
            </h5>
        </div>
    );
};


ComponentB.propTypes = {
    task: PropTypes.instanceOf(Task)
};


export default ComponentB;
