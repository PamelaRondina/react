import logo from './logo.svg';
import './App.css';
import Contacto from './components/ejercicio123/Contacto';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Componente de exemplo Funcional*/}
        {/* <GreetingF name="Frida"/> */}
        {/*Componente de Listado de Tareas*/}
        <Contacto/>
        
      </header>
    </div>
  );
}

export default App;
