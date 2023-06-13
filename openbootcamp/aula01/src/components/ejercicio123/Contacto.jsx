import React from 'react';
import PropTypes from 'prop-types';

class Contact extends React.Component {
  render() {
    const { nombre, apellido, email, conexion } = this.props.contact;
    
    return (
      <div>
        <h2>{nombre} {apellido}</h2>
        <p>Email: {email}</p>
        <p>{conexion ? 'Conectado' : 'Desconectado'}</p>
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.shape({
    nombre: PropTypes.string.isRequired,
    apellido: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    conexion: PropTypes.bool.isRequired
  }).isRequired
};

export default Contact;
