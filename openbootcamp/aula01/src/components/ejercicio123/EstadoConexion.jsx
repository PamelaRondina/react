import React from 'react';
import PropTypes from 'prop-types';

class ToggleConnection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      conexion: props.contact.conexion
    };
  }

  toggleConnection = () => {
    this.setState((prevState) => ({
      conexion: !prevState.conexion
    }));
  }

  render() {
    const { conexion } = this.state;
    const { nombre} = this.props.contact;

    return (
      <div>
        <button onClick={this.toggleConnection}>
          {conexion ? 'Desconectar' : 'Conectar'}
        </button>
        <p>{conexion ? `Contacto de ${nombre} en línea` : `Contacto de ${nombre} no disponible`}</p>
      </div>
    );
  }
}

ToggleConnection.propTypes = {
  contact: PropTypes.shape({
    nombre: PropTypes.string.isRequired,
    conexion: PropTypes.bool.isRequired
  }).isRequired
};

export default ToggleConnection;
